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
        <button class="btn"
                @click.prevent="login()"
                type="submit">登录</button>
        <button class="btn"
                @click="toRegister()">注册</button>
      </div>
    </div>
    <div class="login-background">
      <img class="backimg"
           src="images/loginbackground.jpg">
    </div>
    <popup v-model="popupShow"
           :title="popupTitle"
           :content="popupMsg"></popup>
  </div>
</template>

<script>
import popup from '../components/popup.vue'
export default {
  name: 'login',
  components: {
    popup
  },
  data () {
    return {
      username: '',
      password: '',
      popupShow: false,
      popupTitle: '提示',
      popupMsg: ''
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        this.$axios.post('/login', { username: this.username, password: this.password })
          .then(result => {
            //console.log(result.data)
            this.popupMsg = result.data.msg
            if (result.data.status === 1) {
              //console.log(result.data.ret)
              localStorage.setItem('isLogin', 'true')
              localStorage.setItem('userData', JSON.stringify(result.data.ret))
              this.$router.push('/home')
            }
            else {
              this.openPopup()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
      else {
        this.popupMsg = '请完整输入用户名和密码'
        this.openPopup()
      }
    },
    openPopup () {
      //console.log('openPopup')
      this.popupShow = true
    },
    toRegister () {
      this.$router.push('/register')
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
      .btn:hover
        box-shadow: inset 0.5vh 0.5vh 1vh #d9d9d9, inset -0.5vh -0.5vh 1vh #ffffff
  .login-background
    height: 25vh
    background: yellow
    .backimg
      height: 100%
      width: 100%
</style>
