# myvscodeplugins

[vscode-sublime-commands](https://github.com/Zarel/vscode-sublime-commands)
[vs code ](https://segmentfault.com/a/1190000040720760)
[publishing-extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
[get-a-personal-access-token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

- [myvscodeplugins_manage](https://marketplace.visualstudio.com/manage/publishers/ShoneSingLone/extensions/myvscodeplugins/hub?_a=acquisition)
- [myvscodeplugins_items](https://marketplace.visualstudio.com/items?itemName=ShoneSingLone.myvscodeplugins)


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