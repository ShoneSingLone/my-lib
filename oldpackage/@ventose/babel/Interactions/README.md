# VDrag

[Demo](https://shonesinglone.github.io/my-lib/#/PageVDrag)

```html
<script src="https://unpkg.com/@ventose/interactions@0.0.1/lib/dInteractions.umd.min.js"></script> 
<!-- 虽然推荐使用script 但是会引入全局的jQuery jQueryUI；另外， src必须有.js，才能获取加载js 的地址 -->
```

```js
/* Vue-cli的打包思路 检索window.document.currentScript */
/* 获取js路径的代码  */
if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

```
