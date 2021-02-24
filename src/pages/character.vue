<template>
  <div class="wrapper">
    <div class="info-wrapper">
      <img class="avatar"
           src="/images/playeravatar.jpg">
      <div class="hp-fp-wrapper">
        <div class="hp-fp-text">{{player.nickname}}</div>
        <div class="hp-fp-text">生命值：{{player.health}}</div>
        <div class="hp-fp-text">信仰值：{{player.faith}}</div>
      </div>
    </div>
    <div class="ski-equ-wrapper">
      <div class="ski-equ-line">
        <span class="ski-equ-text">技</span>
        <span class="ski-equ-item"
              v-for="(item, index) of player.skills"
              :key="index">{{item}}</span>
      </div>
      <div class="ski-equ-line">
        <span class="ski-equ-text">备</span>
        <span class="ski-equ-item"
              v-for="(item, index) of player.equipments"
              :key="index">{{item}}</span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-wrapper-left">卡 牌</div>
      <div class="card-wrapper-right">
        <span class="card-item"
              v-for="(item, index) of player.cards"
              :key="index">{{item}}</span>
      </div>
    </div>
    <bottomtab :bottommsg="'角色自订'"></bottomtab>
  </div>
</template>

<script>
import bottomtab from "../components/bottomtab.vue"
export default {
  name: 'character',
  components: {
    bottomtab
  },
  data () {
    return {
      player: {
        nickname: 'player1',
        health: 15,
        faith: 10,
        skills: [1, 2, 0, 0],
        equipments: [1, 2, 3, 0],
        cards: [1, 2, 3, 4, 5, 0]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
@import '../mixins/wrapper.styl'
.wrapper
  topwrapper('/images/characterbackground.jpg')
  .info-wrapper
    wrapper(20vh, 80vw, 5vh, auto)
    wood()
    display: flex
    .avatar
      wrapper(30vw, 30vw, auto, auto)
      overflow: hidden
      float: left
      border-radius: 6vw
      border: 1px solid Peru
      neumorphism-btn()
    .hp-fp-wrapper
      wrapper(30vw, 40vw, auto, auto)
      margin-left: 0
      overflow: hidden
      border-radius: 6vw
      float: left
      neumorphism-text()
      .hp-fp-text
        height: 6vw
        width: 33vw
        margin: 3vw
        line-height: 6vw
        border-radius: 3vw
        wood-font(#B22222) /* FireBrick */
        font-size: 5vw
        text-indent: 3vw
        text-align: left
        background: transparent
        neumorphism-btn()
  .ski-equ-wrapper
    wrapper(20vh, 80vw, 5vh, auto)
    wood()
    .ski-equ-line
      height: 50%
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      .ski-equ-text
        height: 13vw
        width: 13vw
        line-height: 13vw
        font-size: 7vw
        margin: 0 auto
        border-radius: 3vw
        neumorphism-btn()
        wood-font(#B22222)
      .ski-equ-item
        height: 13vw
        width: 13vw
        line-height: 13vw
        margin: 0 auto
        margin-left: 0
        border-radius: 1vw
        neumorphism-text-pro()
  .card-wrapper
    wrapper(26vh, 80vw, 5vh, auto)
    wood()
    .card-wrapper-left
      float: left
      height: 80%
      width: 15vw
      margin-top: 5%
      margin-left: 2vw
      margin-right: 0
      border-radius: 3vw
      font-size: 7vw
      writing-mode: vertical-lr
      line-height: 15vw
      neumorphism-btn()
      wood-font(#B22222)
    .card-wrapper-right
      float: right
      height: 100%
      width: 60vw
      display: flex
      justify-content: center
      flex-wrap: wrap
      .card-item
        height: 20vw
        width: 15vw
        margin-right: 3vw
        margin-top: 1vh
        margin-bottom: 0
        line-height: 20vw
        border-radius: 1vw
        neumorphism-text-pro()
</style>