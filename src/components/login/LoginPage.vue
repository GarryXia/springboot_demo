<template>
<div>
<h1>登录页面，请登入系统</h1>
<div class="user_form">
<el-form label-position="right" style="width: 200px;" :model="userForm">
  <el-form-item label="用户名">
    <el-input v-model="userForm.name" size="medium" prefix-icon="el-icon-user"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="userForm.password" size="medium" prefix-icon="el-icon-lock"></el-input>
  </el-form-item>
</el-form>
</div>
<el-button type="primary" round>注册用户</el-button>
 <el-button round @click.native="login">登陆</el-button>
</div>
</template>

<style scoped>
.user_form {
  display: flex;
  justify-content: center;
}
</style>

<script>
export default{
  name: 'Login',
  data() {
    return {
      userForm: {
        name: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (this.userForm.name && this.userForm.password) {
        
      } else {
        var msg = this.userForm.name ? '请输入密码' : '请输入用户名';
        alert(msg);
      }
    }
  },
}
</script>
