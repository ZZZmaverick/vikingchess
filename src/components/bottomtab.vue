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
.bottom-tab
  height: 20vw
  width: 100vw
  line-height: 20vw
  color: white
  font-size: 7vw
  position: fixed
  bottom: 0
  border-top: 1px solid grey
  background: rgba(255, 255, 255, 0.1)
  backdrop-filter: saturate(200%) blur(20px)
  box-shadow: -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.3)
  .bottom-msg
    height: 15vw
    width: 60vw
    line-height: 15vw
    position: fixed
    left: 0
    margin: 2.5vw 7vw
    border-radius: 7vw
    background: transparent
    box-shadow: inset 0.5vh 0.5vh 1vh rgba(0, 0, 0, 0.2), inset -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.2)
  .bottom-back
    height: 15vw
    width: 20vw
    line-height: 15vw
    position: fixed
    right: 0
    margin: 2.5vw 7vw
    border-radius: 6vw
    background: transparent
    box-shadow: 0.5vh 0.5vh 1vh rgba(0, 0, 0, 0.2), -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.2)
  .bottom-back:hover
    box-shadow: inset 0.5vh 0.5vh 1vh rgba(0, 0, 0, 0.2), inset -0.5vh -0.5vh 1vh rgba(255, 255, 255, 0.2)
</style>