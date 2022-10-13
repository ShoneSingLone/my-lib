import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import { _ } from "../loadCommonUtil";
import { State_UI } from "../State_UI";
import { Button } from "ant-design-vue";
import {
	SaveOutlined,
	SearchOutlined,
	UploadOutlined,
	DeleteOutlined,
	SyncOutlined
} from "@ant-design/icons-vue";

/*$t 可能会变，所以每次render用新的数据*/
const BTN_PRESET_MAP = {
	query: () => ({ icon: <SearchOutlined />, text: State_UI.$t("查询").label }),
	refresh: () => ({ icon: <SyncOutlined />, text: State_UI.$t("刷新").label }),
	save: () => ({ icon: <SaveOutlined />, text: State_UI.$t("保存").label }),
	upload: () => ({ icon: <UploadOutlined />, text: State_UI.$t("上传").label }),
	delete: () => ({ icon: <DeleteOutlined />, text: State_UI.$t("删除").label })
};

export type t_buttonOptions = {
	text?: string;
	onClick?: () => Promise<any>;
};

export default defineComponent({
	name: "xButton",
	components: {
		Button
	},
	props: {
		payload: {
			type: Object,
			default() {
				return {};
			}
		},
		configs: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			loading: true
		};
	},
	computed: {
		type() {
			if (this.configs.preset === "query") {
				return "primary";
			}
			return this.configs.type;
		},
		title() {
			if (_.isString(this.disabled) && this.disabled.length > 0) {
				return this.disabled;
			}
			if (_.isString(this.configs.title) && this.configs.title.length > 0) {
				return this.configs.title;
			}
			return false;
		},
		disabled() {
			if (_.isBoolean(this.configs.disabled)) {
				return this.configs.disabled;
			}
			if (_.isFunction(this.configs.disabled)) {
				return this.configs.disabled(this);
			}
			return false;
		},
		text() {
			/* slot优先 */
			if (_.isFunction(this.$slots?.default)) {
				return this.$slots.default(this);
			}
			/* 预置 */
			const presetFn = BTN_PRESET_MAP[this.configs.preset];
			if (presetFn) {
				const preset = presetFn();
				return (
					<span class="btn-preset">
						{preset.icon}
						{preset.text}
					</span>
				);
			}
			/* text作为render */
			if (_.isFunction(this.configs.text)) {
				return this.configs.text(this) || "";
			}
			/* text 作为 string */
			return this.configs.text || "";
		}
	},
	watch: {
		configs: {
			immediate: true,
			handler(configs) {
				this.loading = !!configs.loading;
			}
		}
	},
	created() {},
	methods: {
		async onClick() {
			if (_.isFunction(this.configs.onClick)) {
				this.loading = true;
				try {
					await this.configs.onClick(this);
				} catch (e) {
					console.error(e);
				} finally {
					this.loading = false;
				}
			}
		}
	},
	render(h) {
		const configs = _.omit(this.configs, ["text", "onClick", "disabled"]);
		if (this.title) {
			configs.title = this.title;
		}
		return (
			<Button
				class="flex middle"
				onClick={this.onClick}
				loading={this.loading}
				disabled={!!this.disabled}
				type={this.type}
				{...configs}>
				{this.text}
			</Button>
		);
	}
});
