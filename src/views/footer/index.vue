<template>

  <div>

    <!--头部开始-->
    <div class="button-group">
      <div class="button-row">
        <button class="button" @click="handleClick('Button 1')">简介</button>
        <button class="button" @click="handleClick('Button 2')">古诗</button>
        <button class="button" @click="handleClick('Button 3')">习俗</button>
        <button class="button" @click="handleClick('Button 4')">画作</button>
        <button class="button " @click="handleClick('Button 5')">书籍</button>
      </div>
      <div class="button-row">
        <div class="home-div">
          <div class="home-div1">
          </div>
          <div class="home-div1">
          </div>
          <div class="home-div2">
            <button class="button home-button " @click="gotoHome('Button 5')">
              <span>☖</span>返回主页</button>
          </div>
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
      console.log(`Home button clicked.`);
    },  
  },
};

</script>


<style>
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
    padding-top:56px;
  }  
.button {  
  /* 这里你可以根据图片中按钮的样式来调整 */  
  border: none;  
  padding: 11px 44px;  
  text-align: center;  
  text-decoration: none;  
  display: inline-block;  
  font-size: 16px;  
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
.home-div1{
  flex:1;
  width:250px;
}
.home-div2{
  width:214px;
}


  



  
.home-button {  
  /* 如果有特殊的home按钮样式，可以在这里添加 */  
 /* 如果有特殊的home按钮样式，可以在这里添加 */ 
 text-align: center; 
 background-color: #7cc4d6;
  color: #4699ae;  
  margin: 0; 
  width:214px;
  font-size: 20px;
  letter-spacing: 10px;
  text-shadow:
    -1px -1px 0 #fff,  
     1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff; /* 阴影模拟边框 */
  padding: 10px; /* 文字周围的填充，可以增加白边的大小 */
  line-height: 38px;
  
}  
  
.home-button span{
  color:white;
  font-size: 22px;
  line-height: 38px;

}
.home-button:hover {  
  background-color: #55838e; /* 举例：hover状态下的颜色 */  
}  
.button:hover {  
  background-color: #63bcd3; /* 举例：hover状态下的颜色 */  
}  


.home-button .fas { /* 可能需要调整选择器来正确应用样式 */  
    /* 添加与图标相关的样式，例如间距、大小等 */  
    margin-right: 5px; /* 在图标和文字之间添加一些间距 */  
  } 
</style>