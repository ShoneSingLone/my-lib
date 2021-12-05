<template>
  <div class="markdown201909260455 markdown" v-html="content"></div>
</template>
<script>

import markdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import subscript from "markdown-it-sub";
import superscript from "markdown-it-sup";
import footnote from "markdown-it-footnote";
import deflist from "markdown-it-deflist";
import abbreviation from "markdown-it-abbr";
import insert from "markdown-it-ins";
import mark from "markdown-it-mark";
import toc from "markdown-it-toc-and-anchor";
import katex from "markdown-it-katex";
import tasklists from "markdown-it-task-lists";

export default {
  $md: (() => {
    const _md = new markdownIt()
      .use(subscript)
      .use(superscript)
      .use(footnote)
      .use(deflist)
      .use(abbreviation)
      .use(insert)
      .use(mark)
      .use(katex, {
        throwOnError: false,
        errorColor: " #cc0000"
      })
      .use(tasklists, {
        enabled: this.taskLists
      });

    if (this.emoji) {
      _md.use(emoji);
    }

    _md.set({
      html: this.html,
      xhtmlOut: this.xhtmlOut,
      breaks: this.breaks,
      linkify: this.linkify,
      typographer: this.typographer,
      langPrefix: this.langPrefix,
      quotes: this.quotes
    });
    _md.renderer.rules.table_open = () =>
      `<table class="${this.tableClass}">\n`;
    let defaultLinkRenderer =
      _md.renderer.rules.link_open ||
      function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };
    _md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      Object.keys(this.anchorAttributes).map(attribute => {
        let aIndex = tokens[idx].attrIndex(attribute);
        let value = this.anchorAttributes[attribute];
        if (aIndex < 0) {
          tokens[idx].attrPush([attribute, value]); // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = value;
        }
      });
      return defaultLinkRenderer(tokens, idx, options, env, self);
    };

    if (this.toc) {
      _md.use(toc, {
        tocClassName: this.tocClass,
        tocFirstLevel: this.tocFirstLevel,
        tocLastLevel: this.tocLastLevelComputed,
        anchorLink: this.tocAnchorLink,
        anchorLinkSymbol: this.tocAnchorLinkSymbol,
        anchorLinkSpace: this.tocAnchorLinkSpace,
        anchorClassName: this.tocAnchorClass,
        anchorLinkSymbolClassName: this.tocAnchorLinkClass,
        tocCallback: (tocMarkdown, tocArray, tocHtml) => {
          if (tocHtml) {
            if (this.tocId && document.getElementById(this.tocId)) {
              document.getElementById(this.tocId).innerHTML = tocHtml;
            }
            this.$emit("toc-rendered", tocHtml);
          }
        }
      });
    }
    return _md;
  })(),
  data() {
    return { sourceData: this.source, content: "" };
  },
  props: {
    watches: { type: Array, default: () => ["source", "show", "toc"] },
    source: { type: String, default: `` },
    show: { type: Boolean, default: true },
    /*   高亮函数，会返回转义的 HTML。
   如果源字符串未更改，且应该进行外部的转义，或许返回 ''
   如果结果以 <pre ... 开头，内部包装器则会跳过。 */
    highlight: { type: Boolean, default: true },
    html: { type: Boolean, default: true } /* // 在源码中启用 HTML 标签 */,
    xhtmlOut: {
      type: Boolean,
      default: true
    } /* // 使用 '/' 来闭合单标签 （比如 <br />）。 */,
    breaks: {
      type: Boolean,
      default: true
    } /* // 转换段落里的 '\n' 到 <br>。 */,
    linkify: {
      type: Boolean,
      default: true
    } /* // 将类似 URL 的文本自动转换为链接。 */,
    emoji: { type: Boolean, default: true },
    typographer: {
      type: Boolean,
      default: true
    } /* 启用一些语言中立的替换 + 引号美化 */,
    langPrefix: {
      type: String,
      default: "language-"
    } /* / 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。 */,
    quotes: {
      type: String,
      default: "“”‘’"
    } /* 
    当 typographer 启用时，成倍的 + 单引号替换对。
   或者智能(smartquotes)引号等，可以是 String 或 Array。
  比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
  还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。 */,
    tableClass: { type: String, default: "table" },
    taskLists: { type: Boolean, default: true },
    toc: { type: Boolean, default: false },
    tocId: { type: String },
    tocClass: { type: String, default: "table-of-contents" },
    tocFirstLevel: { type: Number, default: 2 },
    tocLastLevel: { type: Number },
    tocAnchorLink: { type: Boolean, default: true },
    tocAnchorClass: { type: String, default: "toc-anchor" },
    tocAnchorLinkSymbol: { type: String, default: "#" },
    tocAnchorLinkSpace: { type: Boolean, default: true },
    tocAnchorLinkClass: { type: String, default: "toc-anchor-link" },
    anchorAttributes: { type: Object, default: () => ({}) },
    prerender: {
      type: Function,
      default: sourceData => {
        return sourceData;
      }
    },
    postrender: {
      type: Function,
      default: htmlData => {
        return htmlData;
      }
    }
  },
  computed: {
    tocLastLevelComputed() {
      return this.tocLastLevel > this.tocFirstLevel
        ? this.tocLastLevel
        : this.tocFirstLevel + 1;
    }
  },
  renderasdfasdf(createElement) {
    let outHtml = this.show
      ? this.md.render(this.prerender(this.sourceData))
      : "";
    outHtml = this.postrender(outHtml);

    this.$emit("rendered", outHtml);
    return createElement("div", {
      domProps: {
        innerHTML: outHtml
      }
    });
  },
  mounted() {
    this.content = this.$md.render("# hehe");
    debugger;
    this.$watch("source", () => {
      this.sourceData = this.prerender(this.source);
    });
    this.watches.forEach(v => {
      this.$watch(v, () => {
        this.$forceUpdate();
      });
    });
  }
};
</script>
<style lang="scss">
.markdown201909260455 {
  height: 500px;
  border: 1px solid black;
}
</style>