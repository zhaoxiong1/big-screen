<template>
  <div class="container">
    <Header></Header>
    <Hero></Hero>
    <Footer></Footer>
    
  </div>
</template>

<script setup>
   import {ref} from 'vue'
   import Header from '../header/index.vue'
   import Hero from '../hero/index.vue'
   import Footer from '../footer/index.vue'

</script>
<style scoped>  
.solar-terms-container {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: space-between;  
  height: 100%; /* 或其他您需要的值 */  
  padding: 20px;  
  box-sizing: border-box;  
  background-color: #e7f0fa;  
  padding: 20px;  
  box-sizing: border-box;  
}  
</style>