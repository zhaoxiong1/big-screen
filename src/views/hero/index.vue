<template>
  <div class="container">
    <div class="content" :style="dynamicStyle">
      <span></span>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      type: this.$route.query.type,
      dynamicStyle: {}
    };
  },
  // computed: {
  //   updateDynamicStyle () {
  //     if (this.type && (this.type === '0' || this.type === 0)) {
  //       return {
  //         backgroundImage: `url(${require(`../../assets/beijing/${this.id}.gif`)})`
  //       };
  //     } else {
  //       return {}
  //     }

  //   }
  // },
  mounted() {
    // alert(JSON.stringify(this.computedBackgroundStyle))
    this.updateDynamicStyle();
  },
  watch: {
    '$route.query': function (newVal, oldVal) {
      // 当路由的查询参数发生变化时，这个函数会被调用  
      this.type = newVal.type;
      if (newVal.type && newVal.type !== 0 && newVal.type !== '0') {
        console.log('查询参数已变化', newVal);
        console.log('查询参数已变化oldVal', newVal.type);
        // 在这里根据新的查询参数进行必要的更新操作  
        this.updateDynamicStyle();
      }
    }
  },
  methods:{
    updateDynamicStyle() {
      if (this.type && (this.type === '0' || this.type === 0)) {
        this.dynamicStyle = {
          backgroundImage: `url(${require(`../../assets/beijing/${this.id}.gif`)})`
        };
      } else {
        this.dynamicStyle = {};  

      }

    }
  }
}

</script>



<style scoped>
/* 假设我们有一个用于展示该图片的容器 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e6f7ff;
  /* 假设手机屏幕有一个背景色 */
  padding: 100px 20px 20px 20px;
  /* 为了给内容一些空间 */
}

.content {
  width: 85%;
  height: 1660px;
  position: relative;
  box-shadow: 5px 5px 10px #6ba6b5;
  border-radius: 20px;
  /* background-image: url('../../assets/beijing/11.jpg'); */
  /*设置背景图片 */
  background-size: cover;
  /* 背景图片铺满div */
  background-position: center;
  /* 背景图片居中 */
  background-repeat: no-repeat;
  /* 背景图片不重复 */
}

.content::before,
.content::after {
  content: "";
  position: absolute;
  /* 改为绝对定位以确保精确定位 */
  top: -62px;
  width: 23px;
  height: 100px;
  background-color: #7de0f9;
  background: linear-gradient(to bottom, #6bcdea, #d0eefc);
  border-radius: 30%;
}

.content::before {
  left: 50%;
  /* 从中间开始定位 */
  margin-left: -214px;
  /* 向左偏移一半宽度减去吊带宽度的一半，以居中吊带 */
}

.content::after {
  right: 50%;
  /* 从中间开始定位 */
  margin-right: -200px;
  /* 向右偏移一半宽度减去吊带宽度的一半，以居中吊带 */
}

/* 使用span元素来承载圆球伪元素 */
.content>span {
  position: relative;
  /* 圆球将相对于这个元素定位 */
  display: block;
  /* 确保span元素可见并且可以承载伪元素 */
  width: 100%;
  /* 宽度设为100%以确保圆球可以在任何位置 */
  height: 0;
  /* 高度设为0以避免影响布局 */
}

.content>span::before,
.content>span::after {
  content: "";
  position: absolute;
  /* 圆球使用绝对定位 */
  top: 15px;
  /* 定位圆球在图钉吊带的下方 */
  width: 40px;
  height: 40px;
  background: linear-gradient(to bottom, #80d1f2, #b9e4f7);
  border-radius: 50%;
  box-shadow: 5px 16px 15px #37afd3;
}

.content>span::before {
  left: 50%;
  /* 水平居中 */
  margin-left: -222px;
  /* 向左偏移以将圆球放在左侧吊带下方 */
}

.content>span::after {
  right: 50%;
  /* 水平居中 */
  margin-right: -209px;
  /* 向右偏移以将圆球放在右侧吊带下方 */
  z-index: 1;
}
</style>
