<template>  
  <div class="login-page">  
    <div class="login-container">  
      <h1>Login</h1>  
      <form @submit.prevent="login">  
        <div class="form-group">  
          <label for="username">用户名:&nbsp;&nbsp;</label>  
          <input type="text" id="username" v-model="username" required>  
        </div>  
        <div class="form-group">  
          <label for="password">密码:&nbsp;&nbsp;</label>  
          <input type="password" id="password" v-model="password" required>  
        </div>  
        <button type="submit">登录</button>  
      </form>  
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
      username: '',  
      password: ''  
    };  
  },  
  methods: {  
    login() {  
      // 在这里处理登录逻辑，比如发送登录请求到服务器  
      let data = {
        username: this.username,
        password: this.password
      };
      api.Login(data).then(res => {
        alert(JSON.stringify(res));
        const token = 'your_token_here'; // 从服务器获取的token  
        localStorage.setItem('userToken', token); // 将token保存到localStorage

          //数据处理
      }).catch(err => console.log(err))
      console.log('Logging in...', this.username, this.password);  
    }  
  }  
};  
</script>  
  
<style scoped>  
.login-page {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100vh;  
  background-image: url('../../assets/login/beijing2.jpg'); 
}  
.login-container {  
  width: 300px;  
  padding: 16px;  
  background-color: rgb(112, 129, 196);  

  border-radius: 8px;  
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);  
}  
.form-group {  
  margin-bottom: 10px;  
}  
</style>