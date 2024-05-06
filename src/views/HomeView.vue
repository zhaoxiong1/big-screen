<template>
  <div>

    <!--头部开始-->
    <div class="header-container" >
        <div class="header">
          <div class="twenty-four-solar-terms">
            <span class="chuantong">中国传统节日</span>
             <span class="jieqi">二十四节气</span>
          </div>
        </div>
        <div class="line-with-text">
          <div class="diamond left-diamond diamond-1"></div>  
           <div class="diamond left-diamond diamond-2"></div>  
          <div class="dot left"></div>
          24 SOLAR TERMS
          <div class="dot right"></div> 
          <div class="diamond right-diamond diamond-3"></div>  
          <div class="diamond right-diamond diamond-4"></div>  
        </div>
        
    </div>
    <!--头部结束-->


    <!--content 开始--->
    <div class="content">
      <div class="item" @click="handleTouchEnd(1)">
        <img alt="Vue logo" src="../assets/cat_1.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(2)">
        <img alt="Vue logo" src="../assets/cat_2.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(3)">
        <img alt="Vue logo" src="../assets/cat_3.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(4)">
        <img alt="Vue logo" src="../assets/cat_4.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(5)">
        <img alt="Vue logo" src="../assets/cat_5.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(6)">
        <img alt="Vue logo" src="../assets/cat_6.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(7)">
        <img alt="Vue logo" src="../assets/cat_7.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(8)">
        <img alt="Vue logo" src="../assets/cat_8.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(9)">
        <img alt="Vue logo" src="../assets/cat_9.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(10)">
        <img alt="Vue logo" src="../assets/cat_10.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(11)">
        <img alt="Vue logo" src="../assets/cat_11.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(12)">
        <img alt="Vue logo" src="../assets/cat_12.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(13)">
        <img alt="Vue logo" src="../assets/cat_13.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(14)">
        <img alt="Vue logo" src="../assets/cat_14.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(15)">
        <img alt="Vue logo" src="../assets/cat_15.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(16)">
        <img alt="Vue logo" src="../assets/cat_16.jpg">
      </div>
      <div class="item"  @click="handleTouchEnd(17)">
        <img alt="Vue logo" src="../assets/cat_17.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(18)">
        <img alt="Vue logo" src="../assets/cat_18.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(19)">
        <img alt="Vue logo" src="../assets/cat_19.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(20)">
        <img alt="Vue logo" src="../assets/cat_20.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(21)">
        <img alt="Vue logo" src="../assets/cat_21.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(22)">
        <img alt="Vue logo" src="../assets/cat_22.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(23)">
        <img alt="Vue logo" src="../assets/cat_23.jpg">
      </div>
      <div class="item" @click="handleTouchEnd(24)">
        <img alt="Vue logo" src="../assets/cat_24.jpg">
      </div>

    </div>
    <!--header 结束--->

   


    <div class="bottom-container" >
      <span class="footer">
        点击任意图标查看详情
      </span>
    </div>

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
    
    handleTouchEnd(event) {  
      // 处理触摸结束事件  
      // this.$router.push('/details/'+event);  
      this.$router.push({ path: '/details', query: { id: event ,type: 0} });

    },  
  },
};

</script>

<style>


.header{
  display: flex;
  justify-content: center;
}
.header-container {  
    text-align: center; /* 使头部内容居中 */  
    display: flex;
    flex-direction: column;
    background-color: #e6f7ff;
    justify-content: center;
  }  
.twenty-four-solar-terms {  
   /*  font-family: Weibei SC; 使用系统默认的无衬线字体 */  
    color: white; /* 白色文字 */  
    background-color:#7de0f9; /* 深蓝色背景，象征天空和水 */  
    margin: 20px;
    border-radius: 10px
 
}  
.twenty-four-solar-terms .jieqi{
  font-size: 4rem; /* 字体大小，可根据需要调整 */  
    text-align: center; /* 文字居中 */  
    padding: 20px; /* 内边距 */  
    margin: 20px; /* 外边距 */  
    border-radius: 10px; /* 圆角 */  
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5); /* 文字阴影，增加立体感 */  
    font-weight: bold;
    letter-spacing: 24px;
    font-family: 'KaiTi_GB2312', '华康卡通', sans-serif;


  text-shadow:
    -6px -6px 0 #38afd1,  
     6px -6px 0 #38afd1, 
    -6px 6px 0 #38afd1, 
     6px 6px 0 #38afd1; /* 文字的四周添加黑色阴影，模拟轮廓效果 */
  /*  font-style: italic;可选：设置文字的样式 */
}
.twenty-four-solar-terms .chuantong{
    display: block; /* 使span元素作为块级元素排列 */
    margin-bottom: 10px; /* 设置下边距以分隔两个span */
    font-size: 16px;
    letter-spacing: 24px;
    margin: 6px;
    color: #398fa4;
}

.line-with-text {    
  text-align: center;    
  position: relative;    
  font-size: 16px;    
  color: #2493cf;    
}    
  
.line-with-text::before,    
.line-with-text::after {    
  content: '';    
  position: absolute;    
  top: 50%;    
  transform: translateY(-50%); /* 居中垂直对齐 */  
  width: 40%; /* 或者设定一个具体的宽度 */    
  height: 1px;    
  background-color: #78afcd;    
}    
  
.line-with-text::before {    
  left: 0;    
}    
  
.line-with-text::after {    
  right: 0;    
}  
  
/* 添加点的样式 */  
.line-with-text .dot {  
  position: absolute;  
  top: 50%;  
  transform: translateY(-50%);  
  width: 8px; /* 点的大小 */  
  height: 8px;  
  background-color: #78afcd; /* 点的颜色 */  
  border-radius: 50%; /* 圆形 */  
}  
  
.line-with-text .dot.left {  
  left: 40%; /* 对应线的宽度，调整以使点紧挨着线 */  
}  
  
.line-with-text .dot.right {  
  right: 40%; /* 对应线的宽度，调整以使点紧挨着线 */  
}



/* 菱形的基本样式 */  
.diamond {  
  width: 8px; /* 菱形的宽度，与点的大小相匹配 */  
  height: 8px; /* 菱形的高度 */  
  background-color: #78afcd; /* 菱形的颜色，与线的颜色相同 */  
  transform: rotate(45deg); /* 旋转45度以形成菱形 */  
  position: absolute; /* 绝对定位 */  
  top: 50%; /* 相对于父元素垂直居中 */  
  margin-top: -4px; /* 向上偏移菱形高度的一半，以确保垂直居中 */  
}  
  
/* 左侧菱形的定位 */  
.left-diamond {  
  left: 90%; /* 定位在左侧线的内侧，紧挨着点 */  
}  
  
.left-diamond.diamond-1 {  
  margin-left: -12px; /* 第一个菱形向左偏移，与点保持一定距离 */  
}  
  
.left-diamond.diamond-2 {  
  margin-left: 4px; /* 第二个菱形稍微向右偏移，与第一个菱形保持一定距离 */  
}  
  
/* 右侧菱形的定位 */  
.right-diamond {  
  right: 90%; /* 定位在右侧线的内侧，紧挨着点 */  
}  
  
.right-diamond.diamond-3 {  
  margin-right: -4px; /* 第三个菱形稍微向左偏移 */  
}  
  
.right-diamond.diamond-4 {  
  margin-right: 12px; /* 第四个菱形向右偏移，与第三个菱形保持一定距离 */  
}


















.content{
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #e6f7ff;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;


}
.content div{
  height:100%;
  background-color: #e6f7ff;
}

.item {
  margin: 30px;
  cursor: pointer;
}

.content .item img {
    border-radius: 50%; /* 将图片裁剪为圆形 */  
    width: 200px; /* 设置图片的宽度 */  
    height: 200px; /* 设置图片的高度 */  
    object-fit: cover; /* 确保图片内容在保持宽高比的同时填充整个容器 */ 
}

.bottom-container{
  background-color: #e6f7ff;
  padding-top:40px;
  height: 80px;
}

.bottom-container .footer{
  font-size: 15px;
  color: #398fa4;
  letter-spacing: 10px;
}
</style>
