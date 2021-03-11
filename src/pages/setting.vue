<template>
  <div class="wrapper">
    <div class="setting-wrapper">
      <button class="btn"
              @click="toChangeinfo()">修改信息</button>
      <button class="btn"
              @click="toChangpwd()">修改密码</button>
      <button class="btn"
              @click="openpopup()">删除账户</button>
      <button class="btn"
              @click="logout()">退出登录</button>
    </div>
    <bottomtab :bottommsg="'设置'"></bottomtab>
    <popup v-model="popupShow"
           :title="popupTitle"
           :content="popupMsg"
           @confirm="popupConfirm()"></popup>
  </div>
</template>

<script>
import bottomtab from "../components/bottomtab.vue"
import popup from "../components/popupc.vue"
import { mapMutations } from 'vuex'
export default {
  name: 'setting',
  components: {
    bottomtab,
    popup
  },
  data () {
    return {
      newUsername: '',
      popupShow: false,
      popupTitle: '提示',
      popupMsg: ''
    }
  },
  methods: {
    ...mapMutations(['changeLoginState', 'chageUserData']),
    deleteUser () {
      let userData = JSON.parse(localStorage.getItem('userData'))
      this.$axios.get('/deleteUser', { params: { username: userData.username } })
        .then(result => {
          this.popupMsg = result.data.msg
          if (result.data.status == 1) {
            this.logout()
          }
          else {
            alert('删除请求失败')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      //localStorage.clear()
      this.changeLoginState()
      localStorage.removeItem('userData')
      localStorage.setItem('isLogin', 'false')
      this.$router.replace('/login')
    },
    openpopup () {
      this.popupMsg = '确定删除账户？'
      this.popupShow = true
    },
    popupConfirm () {
      this.deleteUser()
    },
    toChangpwd () {
      this.$router.push('/changepwd')
    },
    toChangeinfo () {
      this.$router.push('/changeinfo')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
@import '../mixins/wrapper.styl'
.wrapper
  topwrapper('/images/settingbackground.jpg')
  .setting-wrapper
    wrapper(70vh, 70vw, 15vw, auto)
    wood()
    overflow: hidden
    .btn
      wrapper(20vw, 60vw, 0, auto)
      margin-top: 5vw
      line-height: 20vw
      font-size: 8vw
      wood-font()
      border: 0
      outline: none
      border-radius: 6vw
      neumorphism-btn()
    .btn:hover
      neumorphism-btn-hover()
</style>