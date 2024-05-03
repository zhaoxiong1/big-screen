<template>

  <div>

    <!--头部开始-->
    <div class="button-group">
      <div class="button-row">
        <button class="button intro-button" @click="handleClick('Button 1')">简介<span class="button-icon"></span>  </button>
        <button class="button poetry-button" @click="handleClick('Button 2')">古诗<span class="button-icon"></span>  </button>
        <button class="button custom-button" @click="handleClick('Button 3')">习俗<span class="button-icon"></span>  </button>
        <button class="button pic-button" @click="handleClick('Button 4')">画作<span class="button-icon"></span>  </button>
        <button class="button book-button" @click="handleClick('Button 5')">
          
          书籍
          <span class="button-icon"></span>  
        </button>
      </div>
      <div class="button-row">
        <div class="home-div">
            <button class="button home-button button-with-icon" @click="gotoHome('Button 5')">
              返回主页</button>
        </div>


      </div>
    </div>
    <!--头部结束-->
  </div>
</template>

<script>
  export default {
  data() {
    return {
      items: [
        {
          title: "立春",
          imageSrc: "./img/cat_1.jpg",
        },
        {
          title: "立春",
          imageSrc: "../assets/cat_1.jpg",
        }
      ],
    };
  },
  methods: {
    handleClick(buttonName) {  
      console.log(`Button ${buttonName} clicked.`);
    },  
    gotoHome() {  
      // 处理触摸结束事件  
      this.$router.push('/');  
    },  
  },
};

</script>


<style>

.book-button {  
  /* 确保按钮有足够的 padding-top 来容纳图标 */  
  padding-top: 40px; /* 根据你的图标大小调整 */  
  position: relative; /* 用于定位图标 */  
  /* 其他样式保持不变 */  
}  
.pic-button{
  padding-top: 40px; /* 根据你的图标大小调整 */  
  position: relative; /* 用于定位图标 */ 
}
.custom-button{
  padding-top: 40px; /* 根据你的图标大小调整 */  
  position: relative; /* 用于定位图标 */ 
}
.poetry-button{
  padding-top: 40px; /* 根据你的图标大小调整 */  
  position: relative; /* 用于定位图标 */ 
}
.intro-button{
  padding-top: 40px; /* 根据你的图标大小调整 */  
  position: relative; /* 用于定位图标 */ 
}
  
.book-button .button-icon {  
  display: block;  
  position: absolute;  
  top: -77px; /* 根据需要调整图标与按钮顶部的距离 */  
  left: 50%;  
  transform: translateX(-50%); /* 水平居中图标 */  
  width: 92px; /* 图标宽度 */  
  height: 92px; /* 图标高度 */  
  border-radius: 50%; /* 圆形图标 */  
  background-color: #7de0f9; /* 示例颜色，当图片加载失败时显示 */  
  background-image: url('../../assets/button/book2.png');  
  background-size: 60px; /* 保持图片的宽高比 */  
  background-position: center; /* 确保图片在元素内居中 */  
  background-repeat: no-repeat; /* 不重复图片 */  
    
} 
.pic-button .button-icon {  
  display: block;  
  position: absolute;  
  top: -77px; /* 根据需要调整图标与按钮顶部的距离 */  
  left: 50%;  
  transform: translateX(-50%); /* 水平居中图标 */  
  width: 92px; /* 图标宽度 */  
  height: 92px; /* 图标高度 */  
  border-radius: 50%; /* 圆形图标 */  
  background-color: #7de0f9; /* 示例颜色，你可以使用背景图片 */  
  background-image: url('../../assets/button/huazuo8.png');  
  background-size: 60px; /* 保持图片的宽高比 */  
  background-position: center; /* 确保图片在元素内居中 */  
  background-repeat: no-repeat; /* 不重复图片 */  
} 
.custom-button .button-icon {  
  display: block;  
  position: absolute;  
  top: -77px; /* 根据需要调整图标与按钮顶部的距离 */  
  left: 50%;  
  transform: translateX(-50%); /* 水平居中图标 */  
  width: 92px; /* 图标宽度 */  
  height: 92px; /* 图标高度 */  
  border-radius: 50%; /* 圆形图标 */  
  background-color: #7de0f9; /* 示例颜色，你可以使用背景图片 */  
  background-image: url('../../assets/button/xisu.png');  
  background-size: 55px; /* 保持图片的宽高比 */  
  background-position: center; /* 确保图片在元素内居中 */  
  background-repeat: no-repeat; /* 不重复图片 */  
} 
.poetry-button .button-icon {  
  display: block;  
  position: absolute;  
  top: -77px; /* 根据需要调整图标与按钮顶部的距离 */  
  left: 50%;  
  transform: translateX(-50%); /* 水平居中图标 */  
  width: 92px; /* 图标宽度 */  
  height: 92px; /* 图标高度 */   
  border-radius: 50%; /* 圆形图标 */  
  background-color: #7de0f9; /* 示例颜色，你可以使用背景图片 */  
  background-image: url('../../assets/button/shici.png');  
  background-size: 75px; /* 保持图片的宽高比 */  
  background-position: center; /* 确保图片在元素内居中 */  
  background-repeat: no-repeat; /* 不重复图片 */  
} 
.intro-button .button-icon {  
  display: block;  
  position: absolute;  
  top: -77px; /* 根据需要调整图标与按钮顶部的距离 */  
  left: 50%;  
  transform: translateX(-50%); /* 水平居中图标 */  
  width: 92px; /* 图标宽度 */  
  height: 92px; /* 图标高度 */   
  border-radius: 50%; /* 圆形图标 */  
  background-color: #7de0f9; /* 示例颜色，你可以使用背景图片 */  
  background-image: url('../../assets/button/intro.png');  
  background-size: 45px; /* 保持图片的宽高比 */  
  background-position: center; /* 确保图片在元素内居中 */  
  background-repeat: no-repeat; /* 不重复图片 */  
} 

 















.button-with-icon {  
    display: inline-flex; /* 使图片和文字并排显示 */  
    align-items: center; /* 垂直居中 */  
    padding: 10px 20px 10px 40px; /* 根据需要调整内边距，左侧留出图标的空间 */  
    background-image: url('../../assets/button/home.png'); /* 设置图标路径 */  
    background-position: left center; /* 设置图标位置 */  
    background-repeat: no-repeat; /* 不重复背景图片 */  
    background-size: 61px 47px; /* 设置图标大小 */  
    border: none; /* 移除边框 */  
    border-radius: 5px; /* 添加圆角 */  
    cursor: pointer; /* 鼠标悬停时变为小手形状 */  
    background-position: left center;
    background-position-x: 27px
  } 
 


.button-group {  
  display: flex;  
  flex-direction: column; /* 垂直排列按钮组 */  
  align-items: center; /* 水平居中按钮（如果需要）*/  
  background-color:#e6f7ff;
}  

.button-row {  
    display: flex;  
    justify-content: space-between; /* 根据需要调整对齐方式 */  
    align-items: center; /* 垂直居中按钮 */  
    margin-bottom: 10px; /* 底部间距 */  
    padding-top:91px;
  }  
.button {  
  /* 这里你可以根据图片中按钮的样式来调整 */  
  border: none;  
  padding: 10px 86px;  
  text-align: center;  
  text-decoration: none;  
  display: inline-block;  
  font-size: 24px;  
  margin: 0 13px; /* 左右间距 */  
  cursor: pointer;  
  border-radius: 28px; /* 圆角 */  
  background-color: #7de0f9; /* 你可以调整颜色 */  
  color: white; /* 文字颜色 */  
  font: bold;
  transition: background-color 0.3s; /* 你可以添加过渡效果 */  
}  
  
.home-div {  
  display: flex;
}  
.home-div2{
  width:214px;
}


  



  
.home-button {  
  /* 如果有特殊的home按钮样式，可以在这里添加 */  
 /* 如果有特殊的home按钮样式，可以在这里添加 */ 
 text-align: right; 
 background-color: #7cc4d6;
  color: #4699ae;  
  margin: 0; 
  width:277px;
  font-size: 28px;
  letter-spacing: 10px;
  text-shadow:
    -1px -1px 0 #fff,  
     1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff; /* 阴影模拟边框 */
  padding: 12px; /* 文字周围的填充，可以增加白边的大小 */
  
}  
  
.home-button:hover {  
  background-color: #55838e; /* 举例：hover状态下的颜色 */  
}  
/* .button:hover {  
  background-color: #63bcd3;
}   */

.home-button .fas { /* 可能需要调整选择器来正确应用样式 */  
    /* 添加与图标相关的样式，例如间距、大小等 */  
    margin-right: 5px; /* 在图标和文字之间添加一些间距 */  
  } 
</style>