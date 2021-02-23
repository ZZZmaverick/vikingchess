<template>
  <div>
    <div class="bottom-tab">
      <span class="bottom-msg">页面名</span>
      <span class="bottom-back">返回</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
.bottom-tab
  height: 20vw
  width: 100vw
  line-height: 20vw
  font-size: 7vw
  wood-font()
  position: fixed
  bottom: 0
  wood-bottom-bar()
  /* frostedglass(rgba(255, 255, 255, 0.1)) */
  .bottom-msg
    height: 15vw
    width: 60vw
    line-height: 15vw
    position: fixed
    left: 0
    margin: 2.5vw 7vw
    border-radius: 7vw
    neumorphism-text()
  .bottom-back
    height: 15vw
    width: 20vw
    line-height: 15vw
    position: fixed
    right: 0
    margin: 2.5vw 7vw
    border-radius: 6vw
    neumorphism-btn()
  .bottom-back:hover
    neumorphism-btn-hover()
</style>