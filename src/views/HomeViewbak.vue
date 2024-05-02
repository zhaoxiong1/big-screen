<template>
  <section>
    <div class="header-container" >
        <div class="header">
          <div class="twenty-four-solar-terms">
             <span>二十四节气</span>
          </div>
        </div>
        <div class="line-with-text">
          <span class="arrow-left "></span>
          24 SOLAR TERMS
          <span class="arrow-right"></span>
        </div>
    </div>


    
    <div>
      <div class="content">
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_1.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_2.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_3.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_4.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_5.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_6.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_7.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_8.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_9.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_10.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_11.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_12.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_13.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_14.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_15.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_16.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_17.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_18.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_19.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_20.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_21.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_22.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_23.jpg">
      </div>
      <div class="item">
        <img alt="Vue logo" src="../assets/cat_24.jpg">
      </div>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>



    <div>3</div>
  </section>

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
    goToDetails(item) {
      console.log("Going to details:", item);
      // Navigate to the details page or implement your own logic here.
    },
  },
};

</script>

<style>
.content{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.content .item {
  margin: 30px;
  cursor: pointer;
}

.content .item img {
    border-radius: 50%; /* 将图片裁剪为圆形 */  
    width: 200px; /* 设置图片的宽度 */  
    height: 200px; /* 设置图片的高度 */  
    object-fit: cover; /* 确保图片内容在保持宽高比的同时填充整个容器 */ 
}

.header{
  display: flex;
}
.header-container {  
    text-align: center; /* 使头部内容居中 */  
  }  
.twenty-four-solar-terms {  
  font-family: Weibei SC; /* 使用系统默认的无衬线字体 */  
    color: white; /* 白色文字 */  
    background-color: #002FA7; /* 深蓝色背景，象征天空和水 */  
    font-size: 4rem; /* 字体大小，可根据需要调整 */  
    text-align: center; /* 文字居中 */  
    padding: 20px; /* 内边距 */  
    margin: 20px; /* 外边距 */  
    border-radius: 10px; /* 圆角 */  
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5); /* 文字阴影，增加立体感 */  
    font-weight: bold;


  text-shadow:
    -6px -6px 0 #6acaed,  
     6px -6px 0 #6acaed, 
    -6px 6px 0 #6acaed, 
     6px 6px 0 #6acaed; /* 文字的四周添加黑色阴影，模拟轮廓效果 */
  /*  font-style: italic;可选：设置文字的样式 */
}  



section div:nth-child(1) {
  width: 100%;
  height: 200px;
  background-color: #e6f7ff;

}

section div:nth-child(2) {
  flex: 1;
  background-color: #e6f7ff;
  height: 100%;

}

section div:nth-child(3) {
  width: 100%;
  height: 100px;
  background-color: #e6f7ff;

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
  
/* 左边的小箭头 */  
.line-with-text .arrow-left {  
  position: absolute;  
  left: 380px; /* 调整箭头与文本之间的距离 */  
  top: 50%;    /* 垂直居中 */  
  transform: translateY(-50%); /* 确保箭头垂直居中 */  
  border: solid transparent;  
  border-width: 6px 10px 6px 0; /* 右边框宽度为10px，其他为0 */  
  border-right-color: #78afcd; /* 右边框颜色为箭头颜色 */  
  content: "";  /* 伪元素必须设置content属性 */  
}  
  
/* 右边的小箭头 */  
.line-with-text .arrow-right {  
  position: absolute;  
  right: 380px; /* 调整箭头与文本之间的距离 */  
  top: 50%;      /* 垂直居中 */  
  transform: translateY(-50%); /* 确保箭头垂直居中 */  
  border: solid transparent;  
  border-width: 6px 0 6px 10px; /* 左边框宽度为10px，其他为0 */  
  border-left-color: #78afcd; /* 左边框颜色为箭头颜色 */  
  content: "";    /* 伪元素必须设置content属性 */  
}


</style>
