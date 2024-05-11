<template>
  <div class="container">
    <div class="content" :style="dynamicStyle">
      <span></span>

      <!-- <video controls width="500">  
      <source src="@/assets/bb.mp4" type="video/mp4">  
      Your browser does not support the video tag.  
    </video>   -->
    <div class="poem-container">
      <div class="gushi" v-show="type == 2">
         <span>《春望》</span>
         <span>唐·杜甫</span>
          国破山河在，城春草木深。<br>

          感时花溅泪，恨别鸟惊心。<br>

          烽火连三月，家书抵万金。<br>

          白头搔更短，浑欲不胜簪。<br>

     </div>

     <div class="lichun" v-show="type == 1">

        <p>
          立春，为二十四节气之首。立，是“开始”之意；春，代表着温暖、生长。 
          [19]二十四节气最初是依据“斗转星移”制定，当北斗七星的斗柄指向寅位时为立春。
          现行是依据太阳黄经度数定节气，当太阳到达黄经315°时为立春，于每年公历2月3-5日交节。
          [19]干支纪元，以寅月为春正、立春为岁首，
          立春乃万物起始、一切更生之义也，意味着新的一个轮回已开启。在传统观念中，立春有吉祥的涵义。
        </p>
        <p>
          立春标志着万物闭藏的冬季已过去，开始进入风和日暖、万物生长的春季。
          在自然界，立春最显著的特点就是万物开始有复苏的迹象。时至立春，在中国的北回归线（黄赤交角）及其以南一带，
          可明显感觉到早春的气息。由于中国幅员辽阔，南北跨度大，各地自然节律不一，“立春”对于很多地区来讲只是入春天的前奏，
          万物尚未复苏，还处于万物闭藏的冬天。
        </p> 

     </div>


     <div class="lichun" v-show="type == 3">

      <p>
        立春习俗有很多，包括躲春、打春、咬春等。
      </p>
      <p>
        躲春时刻要尽量保持低调，不与人斗气吵架，远离负能量的人事物，以求来年顺顺利利。
        打春是以"鞭打春牛"来"催农耕作"，意在提醒人们一年之计在于春，要抓紧春耕生产，莫误农时，同时也期盼新的一年五谷丰登。
      </p> 
      
      <p>
        咬春则是盛行于北京与河北等地的习俗，每到立春这天，家家户户都要吃上几口生萝卜或者春饼，以求解除瘟疫，迎接新春。
      </p>

      
      <p>
        此外，还有吃春卷、晒被子、立春饮茶、春游踏青等立春习俗，这些习俗都体现了人们对春天的期盼和对美好生活的向往。
      </p>

      </div>



      <div class="lichun" v-show="type == 5">
      
        <p>
          中国古典长篇小说四大名著，简称四大名著，是指《水浒传》《三国演义》《西游记》《红楼梦》(按照成书先后顺序)这四部巨著。
      </p>
      <p>
        四大古典名著是中国文学史中的经典作品，是世界宝贵的文化遗产 。此四部巨著在中国文学史上的地位是难分高低的，都有着极高的文学水平和艺术成就，细致的刻画和所蕴含的深刻思想都为历代读者所称道，其中的故事、场景 。

      </p>
      
      
      </div>



    </div>
     


    </div>

    
  </div>

</template>
<script setup>
   import api from '@/api/api';
  
   
</script>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      type: this.$route.query.type,
      dynamicStyle: {},

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
    onPlay() {  
      console.log('Video is now playing.');  
    },  
    onPause() {  
      console.log('Video is now paused.');  
    },  
    updateDynamicStyle() {
      this.getList();
      if (this.type && (this.type === '0' || this.type === 0)) {
        this.dynamicStyle = {
          backgroundSize: 'cover',
          backgroundImage: `url(${require(`../../assets/beijing/${this.id}.gif`)})`
        };
      } else {
        this.dynamicStyle = {};  

      }

	  // request({
    //     url:  "/logout",
    //     method: "get",
    //   }); yarn add element-plus

  
    },
    getList() {
       let data = {};
        api.getListAPI(data).then(res => {

          //数据处理
        }).catch(err => 
            console.log(err)
          )
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
  height: 1000px;
  position: relative;
  box-shadow: 5px 5px 10px #6ba6b5;
  border-radius: 20px;
  background-image: url('../../assets/contentback/1.png');
  /*设置背景图片 */
  /* background-size: cover; */
  /* 背景图片铺满div */
  background-position: center;
  /* 背景图片居中 */
  background-repeat: no-repeat;
  /* 背景图片不重复 */
}
.content div{
  height:100%;
  /* background-color: #e6f7ff; */
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







.lichun {
  padding-left: 50px;  /* 设置左内边距为20像素 */  
  padding-right: 50px; /* 设置右内边距为30像素 */
  text-align: left; /* 文本居中 */  
  font-size: 2em; /* 字体大小设为当前字体大小的2倍，你可以根据需要调整这个值 */  
  line-height: 2; /* 行高，可以根据需要进行调整以优化排版 */  
  margin: 20px 0; /* 上下外边距，根据需要调整 */  
  color:#001f3f;
}

.lichun p{
  text-indent: 2em; /* 首行缩进两个字符宽度 */
  margin-bottom: 20px; /* 设置段落之间的间距 */ 
  color:#001f3f;
}

.gushi {  
  text-align: center; /* 文本居中 */  
  font-size: 2em; /* 字体大小设为当前字体大小的2倍，你可以根据需要调整这个值 */  
  line-height: 2; /* 行高，可以根据需要进行调整以优化排版 */  
  margin: 20px 0; /* 上下外边距，根据需要调整 */  
}  
  
/* 如果需要，还可以为古诗的标题和作者增加样式 */  
.gushi span {  
  display: block; /* 使标题和作者各占一行 */  
  font-weight: bold; /* 字体加粗 */ 
  color:#001f3f;
}  
  
/* 第一个span表示标题，可以设置更大的字体 */  
.gushi span:first-child {  
  font-size: 1.2em; /* 相对于.gushi的字体大小再放大1.2倍 */  
  color:#001f3f;
}  

.poem-container {  
  display: flex;  
  align-items: center; /* 垂直居中 */  
  justify-content: center; /* 水平居中 */  
  padding-top: 10%;
}
</style>
