# ImgViewer

[Demo](https://shonesinglone.github.io/my-lib/#/PageImgViewer)

```js
import Vue from 'vue'
...
//依赖全局的Vue 即 window.Vue
window.Vue = Vue;
```

```html
    <div class="gallery">
      <div v-for="(src, index) in imgs" :key="index" class="pic" @click="() => show(index)">
        <img :src="src" />
      </div>
    </div>
```

```js
data() {
    return {
        imgs: [
            "https://shonesinglone.github.io/public/sample/0.jpg",
            "https://shonesinglone.github.io/public/sample/1.jpg",
            "https://shonesinglone.github.io/public/sample/2.jpg",
            "https://shonesinglone.github.io/public/sample/3.jpg",
            "https://shonesinglone.github.io/public/sample/4.jpg"
        ],
    }
}
methods: {
    show(index) {
        this.index = index;
        window.VueServer.imgViewer
            .setImgs(this.imgs)
            .setIndex(index)
            .show();
    }
}

```
