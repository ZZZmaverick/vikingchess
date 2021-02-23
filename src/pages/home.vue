<template>
  <div class="home">
    <div class="wrapper">
      <div class="homebtn">冒险</div>
      <div class="homebtn">角色</div>
      <div class="homebtn">商店</div>
      <div class="homebtn">账户</div>
    </div>
    <div class="tab-bottom">维京战旗</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.home
  height: 100vh
  width: 100vw
  margin: 0
  overflow: hidden
  background: url('/images/homebackground.jpg')
  background-size: 100%
  .wrapper
    height: 45%
    width: 45%
    margin: 30% auto
    display: flex
    flex-direction: column
    justify-content: center
    border-radius: 20px
    background: rgba(255, 255, 255, 0.2)
    backdrop-filter: saturate(200%) blur(10px)
    .homebtn
      width: 60%
      height: 17%
      line-height: 250%
      margin: 1vh auto
      color: white
      font-size: 3vh
      border: 0
      outline: none
      padding: 0 1vh
      border-radius: 4vh
      background: transparent
      box-shadow: 0.5vh 0.5vh 1vh rgba(0, 0, 0, 0.2), -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.2)
    .homebtn:hover
      box-shadow: inset 0.5vh 0.5vh 1vh rgba(0, 0, 0, 0.2), inset -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.2)
  .tab-bottom
    width: 100vw
    height: 20vw
    font-size: 7vw
    color: white
    border-top: 1px solid grey
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    bottom: 0
    background: rgba(255, 255, 255, 0.2)
    backdrop-filter: saturate(200%) blur(20px)
    box-shadow: -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.2)
</style>