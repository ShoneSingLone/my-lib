<template>
  <transition name="fade">
    <div v-show="visible" class="img-swiper modal s201907070818" @click.self="closeDialog">
      <div class="img-wrapper" :class="{transition: imgTransitionStatus}" :style="imgStyle">
        <img
          class="img"
          :src="visibleImgSrc"
          alt
          draggable="false"
          @mousedown="handleMouseDown($event)"
          @mouseup="handleMouseUp($event)"
          @mousemove="handleMouseMove($event)"
          @wheel.prevent="handleMouseWheel($event)"
        />
      </div>

      <!-- btns -->
      <div class="btns">
        <div
          v-if="imgList.length !== 1"
          class="btn__prev"
          :class="{disable: imgIndex === 0}"
          @click="prev"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-prev" />
          </svg>
        </div>

        <div
          v-if="imgList.length !== 1"
          class="btn__next"
          :class="{disable: imgIndex === imgList.length - 1}"
          @click="next"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next" />
          </svg>
        </div>

        <div class="btn__close" @click="closeDialog">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-close" />
          </svg>
        </div>

        <div class="toolbar-btns">
          <!-- zoom-in -->
          <div class="toobar-btn toolbar-btn__zoomin" @click="zoomIn()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zoomin" />
            </svg>
          </div>

          <!-- zoom-out -->
          <div class="toobar-btn toolbar-btn__zoomout" @click="zoomOut()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zoomout" />
            </svg>
          </div>

          <!-- rotate -->
          <div class="toobar-btn toolbar-btn__rotate" @click="rotate(-90)">
            <left class="icon"></left>
          </div>
          <!-- rotate -->
          <div class="toobar-btn toolbar-btn__rotate" @click="rotate(90)">
            <right class="icon"></right>
          </div>
        </div>
      </div>

      <!-- total -->
      <div v-if="imgList.length !== 1" class="pagination-total">{{ imgIndex + 1 }}/{{ imgTotal }}</div>
    </div>
  </transition>
</template>

<script>
import "./assets/svg/iconfont";
import right from "./assets/svg/right";
import left from "./assets/svg/left";

export default {
  components: {
    right,
    left
  },
  name: "vue-easy-lightbox",
  data() {
    return {
      imgs: [],
      index: 0,
      visible: false,
      scale: 1,
      rotateDeg: 0,
      imgIndex: 0,
      imgTransitionStatus: true,
      top: 0,
      left: 0,
      lastX: 0,
      lastY: 0,
      isDraging: false
    };
  },
  methods: {
    checkBtn(btn) {
      if (btn === 0) return true;
      return false;
    },
    handleMouseDown(e) {
      if (!this.checkBtn(e.button)) return;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.isDraging = true;
      e.stopPropagation();
    },
    handleMouseUp(e) {
      if (!this.checkBtn(e.button)) return;
      this.isDraging = false;
      this.lastX = this.lastY = 0;
    },
    handleMouseMove(e) {
      if (!this.checkBtn(e.button)) return;
      if (this.isDraging) {
        this.top = this.top - this.lastY + e.clientY;
        this.left = this.left - this.lastX + e.clientX;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
      }
      e.stopPropagation();
    },
    handleMouseWheel(e) {
      let wd = e.wheelDelta;
      if (wd > 0) {
        this.scale += 0.025;
      } else {
        this.scale -= 0.025;
      }
      e.stopPropagation();
    },
    zoomIn() {
      this.scale += 0.25;
    },
    zoomOut() {
      if (this.scale !== 0) {
        this.scale -= 0.25;
      }
    },
    rotate(deg) {
      this.rotateDeg = this.rotateDeg + deg;
    },
    next() {
      if (this.imgIndex === this.imgList.length - 1) return;
      this.reset();
      this.imgIndex += 1;
      setTimeout(() => {
        this.imgTransitionStatus = !this.imgTransitionStatus;
      }, 0);
    },
    prev() {
      if (this.imgIndex === 0) return;
      this.reset();
      this.imgIndex -= 1;
      setTimeout(() => {
        this.imgTransitionStatus = !this.imgTransitionStatus;
      }, 0);
    },
    reset() {
      this.imgTransitionStatus = !this.imgTransitionStatus;
      this.scale = 1;
      this.rotateDeg = 0;
    },
    setImgs(imgs) {
      if (
        typeof imgs === "object" &&
        imgs.length > 0 &&
        typeof imgs[0] === "string"
      ) {
        this.imgs = imgs;
      } else if (typeof imgs === "string") {
        this.imgs = [imgs];
      } else {
        this.imgs = [];
      }
      return this;
    },
    setIndex(index) {
      this.index = index;
      return this;
    },
    show() {
      this.visible = true;
      return this;
    },
    closeDialog() {
      this.visible = false;
      this.$emit("hide");
    },
    init() {
      this.imgIndex = this.index;
      this.imgTransitionStatus = true;
      this.scale = 1;
      this.rotateDeg = 0;
      this.top = 0;
      this.left = 0;
      this.isDraging = false;
    }
  },
  computed: {
    imgList() {
      if (Array.isArray(this.imgs)) {
        return this.imgs;
      } else {
        return [this.imgs];
      }
    },
    visibleImgSrc() {
      return this.imgList[this.imgIndex];
    },
    imgTotal() {
      return this.imgList.length || 0;
    },
    imgStyle: {
      get() {
        return {
          transform: `translate(-50%, -50%)
              scale(${this.scale})
              rotate(${this.rotateDeg}deg)`,
          top: `calc(50% + ${this.top}px)`,
          left: `calc(50% + ${this.left}px)`
        };
      }
    }
  },
  watch: {
    visible(visible) {
      if (visible === true) {
        this.init();
      }
    }
  }
};
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.img-swiper.s201907070818 {
  position: relative;
  display: block;
  &.modal {
    z-index: 9998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .img-wrapper {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    box-shadow: #555 0px 5px 20px 2px;
    cursor: move;
    &.transition {
      transition: transform 0.3s ease-in-out;
    }
  }
  .img {
    width:unset;
    max-width: 80vw;
    max-height: 80vh;
    vertical-align: middle;
    position: relative;
  }

  .btn__prev,
  .btn__next,
  .btn__close {
    cursor: pointer;
    position: absolute;
    font-size: 60px;
    color: #fff;
    opacity: 0.6;
    transition: 0.15s linear;
    &:hover {
      opacity: 1;
    }
  }

  .btn__prev.disable:hover,
  .btn__next.disable:hover,
  .btn__prev.disable,
  .btn__next.disable {
    cursor: default;
    opacity: 0.2;
  }
  .btn__next {
    top: 50%;
    right: 20px;
    font-size: 40px;
  }
  .btn__prev {
    top: 50%;
    left: 20px;
    font-size: 40px;
  }
  .btn__close {
    top: 10px;
    right: 10px;
    font-size: 40px;
  }

  .pagination-total {
    position: absolute;
    font-size: 16px;
    top: 16px;
    left: 16px;
    color: #000;
  }
  .toolbar-btns {
    user-select: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background: rgba(45, 45, 44, 0.8);
    border-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 6px 24px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
  .toobar-btn {
    cursor: pointer;
    display: inline-block;
    padding: 6px;
  }
  .toobar-btn .icon {
    width: 32px;
    height: 32px;
    fill: #fff;
  }
  .toobar-btn:hover .icon {
    fill: #54b4ee;
  }
}
</style>
