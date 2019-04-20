<template>
  <div class="page-group">
  <div class="page page-current" >
    <header class="bar bar-nav">
        <span class="button button-link button-nav pull-left icon icon-menu open-panel"></span>
      <h1 class="title">{{this.$store.state.title}}</h1>
    </header>
    <nav class="bar bar-tab">
      <ak class="tab-item" href="http://m.365ind.com">
        <span class="icon icon-home"></span>
        <span class="tab-label">首页</span>
      </ak>
      <a class="tab-item" href="http://m.365ind.com/page/goods/category.html">
        <span class="icon icon-app"></span>
        <span class="tab-label">分类</span>
      </a>
      <a class="tab-item" href="http://m.365ind.com/page/goods/cart.html">
        <span class="icon icon-cart"></span>
        <span class="tab-label">购物车</span>
      </a>
      <a class="tab-item" href="tel:18561986170">
        <span class="icon icon-phone"></span>
        <span class="tab-label">联系我们</span>
      </a>
    </nav>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
    <div class="panel panel-left panel-reveal">
      <div class="content-block">
        <p><a href="#" class="button button-danger close-panel">关闭</a></p>
      </div>
      <div class="content-block-title"><h2><router-link to='/home'>平台简介</router-link></h2></div>
      <div class="content-block-title"><h2><router-link to='/embodiment'>工业服务生态圈价值体现</router-link></h2></div>
      <div class="content-block-title"><h2><router-link to='/competitiveness'>差异化竞争力</router-link></h2></div>
      <div class="list-block">
        <ul>
          <li class="item-content">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><router-link to='/butler'>1.服务商管家式服务</router-link></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><router-link to='/aggregatedpurchase'>2.物联网聚合采购</router-link></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><router-link to='/interactions'>3.规模定制交互</router-link></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><router-link to='/saas'>4.SASS云服务</router-link></div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-media"><i class="icon icon-f7"></i></div>
            <div class="item-inner">
              <div class="item-title"><router-link to='/packageservices'>5.园区成套服务</router-link></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block-title"><h2><router-link to='/nodes'>供应链节点全覆盖</router-link></h2></div>
      <div class="content-block-title"><h2><router-link to='/supermarket'>工业品超市</router-link></h2></div>
      <div class="content-block-title"><h2><router-link to='/service'>平台服务流程</router-link></h2></div>
      <div class="content-block-title"><h2><router-link to='/process'>多方合作共赢案例</router-link></h2></div>
    </div>
  </div>
</template>
<style lang="">

</style>

<script>

export default {
  data(){
    return{
    }
  },
  watch: {
    "$route.path": function(newVal){
      if(newVal){
        document.querySelector('.with-panel-left-reveal').classList.remove("with-panel-left-reveal")
        document.querySelector('.panel').classList.remove("active")
        document.querySelector('.panel').style.display="none"
      }
    }
  }
}
</script>