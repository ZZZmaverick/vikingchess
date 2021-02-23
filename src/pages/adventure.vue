<template>
  <div class="wrapper">
    <div class="game-level-wrapper">
      <!-- 关卡的信息，用routerview -->
      <div class="game-level-intro"></div>
      <div class="game-level-chose">
        <span class="game-level"
              v-for="(item, index) of gameLevel"
              :key="index">{{item}}</span>
      </div>
    </div>
    <bottomtab></bottomtab>
  </div>
</template>

<script>
import bottomtab from '../components/bottomtab.vue'
export default {
  name: 'adventure',
  components: {
    bottomtab
  },
  props: {

  },
  data () {
    return {
      gameLevel: ['关卡一', '关卡二', '关卡三', '关卡四', '关卡五', '关卡六'],
      gameLevelIntro: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
.wrapper
  height: 100vh
  width: 100vw
  margin: 0
  overflow: hidden
  background: url('/images/mapbackground.jpg')
  background-size: 100%
  .game-level-wrapper
    height: 80vh
    width: 80vw
    margin: 10vw auto
    overflow: hidden
    wood()
    /* frostedglass(rgba(255, 255, 255, 0.2)) */
    .game-level-intro
      height: 50vh
      width: 70vw
      margin: 3vh auto
      neumorphism-text()
      background: url('/images/parchment.png')
      background-size: 100%
    .game-level-chose
      height: 20vh
      width: 70vw
      margin: 3vh auto
      display: flex
      justify-content: center
      flex-wrap: wrap
      border-radius: 5vw
      neumorphism-text()
      .game-level
        height: 8vh
        width: 20vw
        line-height: 8vh
        margin: 1.5vw
        font-size: 5vw
        wood-font()
        border-radius: 5vw
        neumorphism-btn()
</style>