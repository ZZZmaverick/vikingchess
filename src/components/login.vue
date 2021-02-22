<template>
  <div class="wrapper">
    <div class="logo">
      <img class="logoimg"
           src="images/gamelogo.jpg">
    </div>
    <div class="login-info">
      <div class="input-wrapper">
        <input class="input"
               type="text"
               name="username"
               v-model="username"
               placeholder="用户名">
      </div>
      <div class="input-wrapper">
        <input class="input"
               type="password"
               name="password"
               v-model="password"
               placeholder="密码">
      </div>
      <div class="input-wrapper">
        <input class="btn"
               type="submit"
               value="登录">
        <button class="btn">注册</button>
      </div>
    </div>
    <div class="login-background">
      <img class="backimg"
           src="images/loginbackground.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height: 100vh
  width: 100vw
  background: rgb(235, 236, 240)
  .logo
    height: 30vh
    width: 30vh
    margin: 0 auto
    padding: 5vh 0
    .logoimg
      height: 30vh
      width: 30vh
  .login-info
    height: 30%
    width: 60vw
    margin: 0 auto
    .input-wrapper
      margin: 3% auto
      width: 100%
      height: 25%
      .input
        width: 80%
        height: 90%
        font-size: 3vh
        border: 0
        outline: none
        padding: 0 2vh
        border-radius: 4vh
        background: rgb(235, 236, 240)
        box-shadow: inset 0.5vh 0.5vh 1vh #d9d9d9, inset -0.5vh -0.5vh 1vh #ffffff
      .btn
        width: 40%
        height: 90%
        font-size: 3vh
        color: rgb(185, 18, 0)
        border: 0
        outline: none
        padding: 0 2vh
        margin: 0 1vh
        border-radius: 4vh
        background: rgb(235, 236, 240)
        box-shadow: 0.5vh 0.5vh 1vh #d9d9d9, -0.5vh -0.5vh 1vh #ffffff
  .login-background
    height: 25vh
    background: yellow
    .backimg
      height: 100%
      width: 100%
</style>
