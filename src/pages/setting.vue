<template>
  <div class="wrapper">
    <div class="setting-wrapper">
      <div class="setting-item"></div>
    </div>
    <bottomtab :bottommsg="'设置'"></bottomtab>
  </div>
</template>

<script>
import bottomtab from "../components/bottomtab.vue"
export default {
  name: 'setting',
  components: {
    bottomtab
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
</style>