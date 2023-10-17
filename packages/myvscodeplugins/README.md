
- add selection to next find match
- View: Close All Editors
- View: Close Editor
- View: show Explore
- Insert Line Above
- Insert Line Below
- Search: Find in Files
- Split into Lines
- Transpose
- expandToLine 


# command

```js
"commands": [
    {
        "command": "shone.sing.lone.transpose",
        "title": "Transpose"
    },
    {
        "command": "shone.sing.lone.splitIntoLines",
        "title": "Split into Lines"
    }
]
/* 
vscode 已经 内置
包括 Bracket Pairs => Editor>Guides:
{
    "command": "shone.sing.lone.expandToLine",
    "title": "Expand Selection to Line"
},
{
    "command": "shone.sing.lone.joinLines",
    "title": "Join Lines"
}
*/
```

# importVue 

- @/************`"@/layout/AppLayoutLeft.vue"`是当前业务App下的文件路径
- _s/***********`"_s/libs/VueRouter.vue"`是共有模块的访问地址

> 需要在package.json中添加字段useImportVue:真值即可，后期会添加可配置路径跳转项