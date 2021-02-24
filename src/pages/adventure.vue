<template>
  <div class="wrapper">
    <div class="game-level-wrapper">
      <!-- 关卡的信息，用routerview -->
      <div class="game-level-intro">
        <router-view></router-view>
      </div>
      <div class="game-level-chose">
        <router-link tag="span"
                     :to="'/adventure/gamelevel/' + String(index)"
                     class="game-level"
                     v-for="(item, index) of gameLevel"
                     :key="index">{{item}}</router-link>
      </div>
    </div>
    <bottomtabpro :bottommsg="' 关卡选择'"></bottomtabpro>
  </div>
</template>

<script>
import bottomtabpro from '../components/bottomtabpro.vue'
export default {
  name: 'adventure',
  components: {
    bottomtabpro
  },
  props: {

  },
  data () {
    return {
      gameLevel: ['教学关', '关卡一', '关卡二', '关卡三', '关卡四', '关卡五'],
      gameLevelIntro: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
@import '../mixins/wrapper.styl'
.wrapper
  topwrapper('/images/mapbackground.jpg')
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
      .game-level:hover
        neumorphism-btn-hover()
</style>