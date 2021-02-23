<template>
  <div class="wrapper">
    <div class="game-level-wrapper">
      <!-- 管卡的信息，用routerview -->
      <div class="game-level-intro"></div>
      <div class="game-level-chose">
        <span v-for="(item, index) of gameLevel"
              :key="index"
              class="game-level">{{item}}</span>
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
      gameLevel: [],
      gameLevelIntro: []
    }
  }
}
</script>

<style lang="stylus" scoped>
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
    border-radius: 5vw
    overflow: hidden
    background: yellow
    .game-level-intro
      height: 50vh
      width: 70vw
      margin: 3vh auto
      background: red
    .game-level-chose
      height: 20vh
      width: 70vw
      margin: 3vh auto
      background: green
</style>