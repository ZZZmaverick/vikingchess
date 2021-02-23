<template>
  <div class="wrapper">
    <div class="game-level-pic-cover">
      <img class="game-level-pic"
           :src="gamelevelpic[$route.params.id]">
    </div>
    <div class="game-level-des">{{gameleveldes[$route.params.id]}}</div>
  </div>
</template>

<script>
export default {
  name: 'gamelevelintro',
  data () {
    return {
      gamelevelpic: ['/images/gamelevel0.jpg'],
      gameleveldes: ['教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关教学关']
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height: 100%
  width: 100%
  background: transparent
  .game-level-pic-cover
    height: 50vw
    width: 50vw
    margin: 5vw auto
    border-radius: 5vw
    overflow: hidden
    background: transparent
    .game-level-pic
      mix-blend-mode: multiply
      height: 100%
      width: 100%
  .game-level-des
    width: 60vw
    height: 35vw
    margin: 0 auto
    padding: 0 5vw
    font-size: 5vw
    font-weight: bold
    text-align: left
</style>