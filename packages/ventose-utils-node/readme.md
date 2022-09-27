# Ventose-utils-node

<details>
  <summary> ./libs/fp/asyncAllDirAndFile.js </summary>
  <br>
  
```js
/**
 * 给定文件夹，获取文件夹下所有文件夹和文件
 * 
 * @param {*} array_all ["/home/user/doc"] 需要在传入之前对路径用pathD处理成绝对路径
 * @param {any} array_dir []
 * @param {any} array_file []
 * @returns [dirs,files]
 */
```
</details>

<details>
  <summary> ./libs/fp/asyncCpDir.js </summary>
  <br>
  
```js
/**
 * 将源文件夹下的所有文件夹及文件复制到目标文件夹下，保持同样的接口
 * - 参数必须是绝对路径
 * @param {any} str_srcdir 原文件夹
 * @param {any} str_targetdir 目标文件夹
 */
```
</details>

<details>
  <summary> ./libs/fp/asyncEmptyDir.js </summary>
  <br>
  
```js
/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path
 */
```
</details>

<details>
  <summary> ./libs/fp/asyncRmDir.js </summary>
  <br>
  
```js
/**
 * 删除目录
 * @param {*} string_pathName
 * @returns
 */
```
</details>

<details>
  <summary> ./libs/fp/asyncSafeMakeDir.js </summary>
  <br>
  
```js
/**
 * 保证路径存在;如果存在就直接返回true，不存在就让它存在，再返回true;
 * @param {*} path_dir
 * @returns true
 */
```
</details>

<details>
  <summary> ./libs/fp/asyncSleep.js </summary>
  <br>
  
```js
/**
 * 异步等待 
 * 
 * @param {any} timeout 毫秒
 * @returns 
 */
```
</details>

<details>
  <summary> ./libs/fp/asyncWriteFile.js </summary>
  <br>
  
```js
/**
 * force写入文件：没有文件就创建，有就覆盖
 * @param {*} path_file
 * @param {*} content
 */
```
</details>

<details>
  <summary> ./libs/fp/dirName.js </summary>
  <br>
  
```js
/**
 * 获取路径的父目录
 * @param {*} pathName
 * @returns
 */
```
</details>

<details>
  <summary> ./libs/fp/getPathD.js </summary>
  <br>
  
```js
/**
 * path.resolve(__dirname,...args) 简写 
 * - const pathD = _n.getPathD(__dirname)
 * - 必须要注入__dirname
 * - pathD("../libs")
 * 
 * @param {any} this_dir : __dirname
 * @returns pathD
 */
```
</details>

<details>
  <summary> ./libs/fp/pathC.js </summary>
  <br>
  
```js
/**
 * path.resolve(process.cwd(),...args) 简写
 * @param  {...any} args
 * @returns
 */
```
</details>

<details>
  <summary style="color:gray;text-decoration-line: line-through;"> ./libs/fp/pathD.js </summary>
  <br>
  
```js
/**
 * @Deprecated
 * __dirname 只能代表当前执行文件的地址，必须运行时注入
 * 使用PathD代替
 * path.resolve(__dirname,...args) 简写
 * @param  {...any} args
 * @returns
 */
```
</details>

<details>
  <summary> ./libs/fp/pathR.js </summary>
  <br>
  
```js
/**
 * path.resolve 简写
 * @param  {...any} args
 * @returns
 */
```
</details>
