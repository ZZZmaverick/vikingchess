<template>
  <div class="home">
    <div class="wrapper">
      <router-link tag="div"
                   to="/adventure"
                   class="homebtn">冒险</router-link>
      <router-link tag="div"
                   to="/character"
                   class="homebtn">角色</router-link>
      <router-link tag="div"
                   to="/shop"
                   class="homebtn">商店</router-link>
      <router-link tag="div"
                   to="/setting"
                   class="homebtn">设置</router-link>
    </div>
    <div class="tab-bottom">维京战棋</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
@import '../mixins/wrapper.styl'
.home
  topwrapper('/images/homebackground.jpg')
  .wrapper
    height: 45%
    width: 45%
    margin: 30% auto
    display: flex
    flex-direction: column
    justify-content: center
    wood()
    /* border-radius: 6vw
    frostedglass(rgba(255, 255, 255, 0.2)) */
    .homebtn
      width: 60%
      height: 17%
      line-height: 200%
      margin: 1vh auto
      font-size: 8vw
      wood-font()
      border: 0
      outline: none
      padding: 0 1vh
      border-radius: 4vh
      neumorphism-btn()
    .homebtn:hover
      neumorphism-btn-hover()
  .tab-bottom
    width: 100vw
    height: 20vw
    font-size: 10vw
    wood-font()
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    bottom: 0
    wood-bottom-bar()
    /* border-top: 1px solid grey
    frostedglass(rgba(255, 255, 255, 0.2)) */
</style>