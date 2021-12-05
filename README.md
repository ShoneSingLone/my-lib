# my-lib

开发有依赖或者没依赖的Vue component

# 操作

- `npm set registry https //registry.npmjs.org/`
- `npm publish --access public`
- `npm set registry https://registry.npm.taobao.org`
- `npm i -g lerna`
- `npm install -g yo generator-code`
-  `yo code`
- `lerna init`

[--tag ] 使用给定标签注册发布的软件包，例如npm install @将安装此版本。默认情况下，npm publish更新和npm install安装latest标签。有关标签的详细信息，请参见npm-dist-tag。
[--access ] 告诉注册表此软件包是应公开发行还是受限制发行。仅适用于作用域包，默认为 restricted。如果您没有付费帐户，则必须使用发布与 --access public 发布有范围的软件包。
[--otp ] 如果您在 auth-and-writes 模式下启用了双重身份验证，那么您可以为此提供来自身份验证器的代码。如果您不包括此文件，而您正在从 TTY 中运行，则会提示您。
[--dry-run] 从开始 npm@6，除了实际发布到注册表外，所有发布都可以完成。报告将要发布的内容的详细信息。