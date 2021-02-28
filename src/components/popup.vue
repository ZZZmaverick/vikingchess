<template>
  <div class="popup"
       v-show="showPopup">
    <div class="wrapper">
      <div class="text-wrapper">
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
      </div>
      <div class="btn-wrapper">
        <button class="btn"
                @click="closePopup()">{{confirmText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    value: {},
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    closePopup () {
      this.showPopup = false
    }
  },
  mounted () {
    this.showPopup = this.value
  },
  watch: {
    value (newVal, oldVal) {
      this.showPopup = newVal
    },
    showPopup (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
@import '../mixins/wrapper.styl'
.popup
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 9999
  background: rgba(0, 0, 0, 0.2)
  .wrapper
    wrapper(40vw, 60vw, 40vh, auto)
    border-radius: 6vw
    background: rgb(235, 236, 240)
    .text-wrapper
      height: 30vw
      width: 60vw
      .title
        height: 10vw
        width: 50vw
        margin: 0 auto
        line-height: 10vw
        font-size: 6vw
        border-bottom: 1px solid grey
        color: grey
      .content
        height: 20vw
        width: 50vw
        margin: 1vw auto
        line-height: 8vw
        font-size: 5vw
        color: grey
        overflow: hidden
        text-overflow: ellipsis
    .btn-wrapper
      height: 10vw
      width: 60vw
      line-height: 10vw
      .btn
        height: 8vw
        width: 50vw
        line-height: 8vw
        margin: auto
        border: 0
        outline: none
        border-radius: 5vw
        font-size: 5vw
        background: rgb(235, 236, 240)
        box-shadow: 0.5vh 0.5vh 1vh #d9d9d9, -0.5vh -0.5vh 1vh #ffffff
      .btn:hover
        background: rgb(235, 236, 240)
        box-shadow: -0.5vh -0.5vh -1vh #d9d9d9, 0.5vh 0.5vh 1vh #ffffff
</style>