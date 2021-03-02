<template>
  <div class="wrapper">
    <div class="bar-wrapper">
      <img class="bar-img"
           src="images/gamelogo.jpg">
      <div class="bar-text">修改密码</div>
    </div>
    <div class="input-wrapper">
      <input class="input"
             type="password"
             name="password"
             v-model="curpassword"
             placeholder="请输入当前密码"
             required>
      <input class="input"
             type="password"
             name="password"
             v-model="password"
             placeholder="请输入新密码"
             required>
      <input class="input"
             type="password"
             name="password2"
             v-model="password2"
             placeholder="请再次输入新密码"
             required>
    </div>
    <div class="btn-wrapper">
      <button class="btn"
              @click="submit()">提交</button>
      <button class="btn"
              @click="toSetting()">返回</button>
    </div>
    <popup v-model="popupShow"
           :title="popupTitle"
           :content="popupMsg"></popup>
  </div>
</template>

<script>
import popup from '../components/popup.vue'
export default {
  name: "register",
  components: {
    popup
  },
  data () {
    return {
      curpassword: '',
      password: '',
      password2: '',
      popupShow: false,
      popupTitle: '提示',
      popupMsg: ''
    }
  },
  methods: {
    openPopup () {
      //console.log('openPopup')
      this.popupShow = true
    },
    submit () {
      let userData = JSON.parse(localStorage.getItem('userData'))
      if (!this.curpassword || !this.password || !this.password2) {
        this.popupMsg = '密码项输入不全'
        this.openPopup()
      }
      else if (this.curpassword != userData.password) {
        this.popupMsg = '当前密码输入错误'
        this.openPopup()
      }
      else if (this.password != this.password2) {
        this.popupMsg = '两次输入密码不一致'
        this.openPopup()
      }
      else {
        this.$axios.post('/changepwd', {
          username: userData.username,
          password: this.password
        }).then(result => {
          //console.log(result.data)
          this.popupMsg = result.data.msg
          if (result.data.status === 1) {
            localStorage.removeItem('userData')
            localStorage.setItem('isLogin', 'false')
            this.$router.replace('/login')
          }
          else {
            this.popupMsg = '修改密码请求失败'
            this.openPopup()
          }
        })
          .catch(err => {
            console.log(err)
          })
      }
    },
    toSetting () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height: 100vh
  width: 100vw
  overflow: hidden
  background: rgb(235, 236, 240)
  .bar-wrapper
    height: 20vh
    width: 80vw
    margin: 0 auto
    margin-top: 5vw
    display: flex
    justify-content: center
    .bar-img
      height: 30vw
      width: 30vw
      line-height: 30vw
      float: left
    .bar-text
      height: 30vw
      width: 50vw
      line-height: 30vw
      font-size: 10vw
      text-align: left
  .input-wrapper
    width: 80vw
    margin: 0 auto
    .input
      height: 10vw
      width: 60vw
      line-height: 10vw
      margin: 5vw auto
      font-size: 5vw
      border: 0
      outline: none
      padding: 0 2vh
      border-radius: 5vw
      background: rgb(235, 236, 240)
      box-shadow: inset 0.5vh 0.5vh 1vh #d9d9d9, inset -0.5vh -0.5vh 1vh #ffffff
    .radio-wrapper
      height: 10vw
      width: 60vw
      line-height: 10vw
      margin: 5vw auto
      display: flex
      justify-content: space-between
      .input-radio
        height: 10vw
        width: 20vw
        line-height: 10vw
        border: 0
        border-radius: 5vw
        outline: none
        background: rgb(235, 236, 240)
        box-shadow: 0.5vh 0.5vh 1vh #d9d9d9, -0.5vh -0.5vh 1vh #ffffff
      .input-radio-active
        box-shadow: inset 0.5vh 0.5vh 1vh #d9d9d9, inset -0.5vh -0.5vh 1vh #ffffff
  .btn-wrapper
    width: 80vw
    margin: 0 auto
    .btn
      height: 10vw
      width: 60vw
      line-height: 10vw
      margin: 0 auto
      margin-top: 5vw
      font-size: 5vw
      border: 0
      border-radius: 5vw
      outline: none
      box-shadow: 0.5vh 0.5vh 1vh #d9d9d9, -0.5vh -0.5vh 1vh #ffffff
    .btn:hover
      box-shadow: inset 0.5vh 0.5vh 1vh #d9d9d9, inset -0.5vh -0.5vh 1vh #ffffff
</style>