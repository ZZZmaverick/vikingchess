<template>
  <div class="wrapper">
    <div class="shop-wrapper">
      <div class="money">金币：{{money}}</div>
      <div class="goods-wrapper"
           v-show="selected === 0">
        <div class="goods-item"
             v-for="(item, index) of ski"
             :key="index">
          <img class="goods-avatar"
               src="/images/goodstest.jpg">
          <div class="goods-des">
            <div class="goods-name">技能名</div>
            <div class="goods-intro">货品介绍货品介绍货品介绍货品介绍货品介绍</div>
            <div class="goods-price">$1000</div>
          </div>
        </div>
      </div>
      <div class="goods-wrapper"
           v-show="selected === 1">
        <div class="goods-item"
             v-for="(item, index) of equ"
             :key="index">
          <img class="goods-avatar"
               src="/images/goodstest.jpg">
          <div class="goods-des">
            <div class="goods-name">装备名</div>
            <div class="goods-intro">货品介绍货品介绍货品介绍货品介绍货品介绍</div>
            <div class="goods-price">$1000</div>
          </div>
        </div>
      </div>
      <div class="goods-wrapper"
           v-show="selected === 2">
        <div class="goods-item"
             v-for="(item, index) of cards"
             :key="index">
          <img class="goods-avatar"
               src="/images/goodstest.jpg">
          <div class="goods-des">
            <div class="goods-name">卡牌名</div>
            <div class="goods-intro">货品介绍货品介绍货品介绍货品介绍货品介绍</div>
            <div class="goods-price">$1000</div>
          </div>
        </div>
      </div>
      <div class="nav">
        <span class="tab"
              :class="{'active':selected === 0}"
              @click="changeNav(0)">技能</span>
        <span class="tab"
              :class="{'active':selected === 1}"
              @click="changeNav(1)">装备</span>
        <span class="tab"
              :class="{'active':selected === 2}"
              @click="changeNav(2)">卡牌</span>
      </div>
    </div>
    <bottomtab :bottommsg="'商店'"></bottomtab>
  </div>
</template>

<script>
import bottomtab from '../components/bottomtab.vue'
export default {
  name: 'shop',
  components: {
    bottomtab
  },
  data () {
    return {
      selected: 0,
      money: 5000,
      ski: [1, 2, 3, 4, 5],
      equ: [2, 3, 4, 5],
      cards: [3, 2, 3, 4, 5]
    }
  },
  methods: {
    changeNav (index) {
      this.selected = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins/neumorphism.styl'
@import '../mixins/frostedglass.styl'
@import '../mixins/wrapper.styl'
.wrapper
  topwrapper('/images/shopbackground.jpg')
  .shop-wrapper
    wrapper(85vh, 90vw, 5vw, auto)
    wood()
    overflow: hidden
    .money
      wrapper(10vw, 80vw, 5vw, auto)
      neumorphism-text()
      line-height: 10vw
      font-size: 7vw
      border-radius: 3vw
      wood-font(#B22222) /* FireBrick */
    .nav
      wrapper(10vw, 60vw, 5vw, auto)
      neumorphism-btn()
      line-height: 10vw
      font-size: 7vw
      border-radius: 3vw
      wood-font(#B22222) /* FireBrick */
      display: flex
      justify-content: space-around
      overflow: hidden
      .tab
        height: 10vw
        width: 20vw
        neumorphism-btn()
      .active
        neumorphism-btn-hover()
    .goods-wrapper
      wrapper(60vh, 80vw, 5vw, auto)
      neumorphism-text-pro()
      border-radius: 1vw
      background: url('/images/parchment.png')
      background-size: 100%
      overflow: auto
      .goods-item
        wrapper(30vw, 70vw, 3vw, auto)
        margin-top: 3vw
        border: 1vw dashed rgba(0, 0, 0, 0.7)
        border-radius: 3vw
        .goods-avatar
          float: left
          height: 25vw
          width: 25vw
          line-height: 25vw
          margin: 2.5vw
          margin-right: 0
          border-radius: 3vw
        .goods-des
          float: left
          height: 25vw
          width: 37vw
          line-height: 25vw
          margin: 2.5vw
          text-align: left
          color: rgba(0, 0, 0, 0.7)
          overflow: hidden
          .goods-name
            height: 9vw
            width: 100%
            line-height: 9vw
            font-size: 6vw
            font-weight: bold
          .goods-intro
            height: 8vw
            width: 100%
            line-height: 8vw
            font-size: 5vw
            singlelineoverflow()
          .goods-price
            height: 8vw
            width: 100%
            line-height: 8vw
            font-size: 5vw
            font-weight: bold
            text-align: right
</style>