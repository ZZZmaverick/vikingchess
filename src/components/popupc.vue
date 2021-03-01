<template>
  <div class="popup"
       v-show="showpopup">
    <div class="wrapper">
      <div class="text-wrapper">
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
      </div>
      <div class="btn-wrapper">
        <button class="btn"
                @click="confirm()">{{confirmText}}</button>
        <button class="btn"
                @click="closepopup()">{{cancelText}}</button>
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
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      showpopup: false
    }
  },
  methods: {
    closepopup () {
      this.showpopup = false
    },
    confirm () {
      this.$emit('confirm')
      this.closepopup()
    }
  },
  mounted () {
    this.showpopup = this.value
  },
  watch: {
    value (newVal, oldVal) {
      this.showpopup = newVal
    },
    showpopup (val) {
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
    wood()
    .text-wrapper
      height: 30vw
      width: 60vw
      .title
        height: 10vw
        width: 50vw
        margin: 0 auto
        line-height: 10vw
        font-size: 6vw
        border-bottom: 1px solid #8B4513
        wood-font()
      .content
        height: 20vw
        width: 50vw
        margin: 1vw auto
        line-height: 8vw
        font-size: 5vw
        wood-font()
        overflow: hidden
        text-overflow: ellipsis
    .btn-wrapper
      height: 10vw
      width: 60vw
      line-height: 10vw
      display: flex
      justify-content: space-around
      .btn
        height: 8vw
        width: 25vw
        line-height: 8vw
        margin: auto
        border: 0
        outline: none
        border-radius: 5vw
        font-size: 5vw
        wood-font()
        neumorphism-btn()
      .btn:hover
        neumorphism-btn-hover()
</style>