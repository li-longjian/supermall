<template>
  <div id="list">
    <div class="item"  >
      <img src="~assets/images/profile/message.svg"/>
      <div class="text">消息中心</div>
    </div>
    <div class="item"  >
      <img src="~assets/images/profile/shopping.svg"/>
      <div class="text">积分商城</div>
    </div>
    <div class="item"  >
      <img src="~assets/images/profile/vip.svg"/>
      <div class="text">会员卡</div>
    </div>
    <div class="item services"  >
      <img src="~assets/images/profile/cart.svg"/>
      <div class="text">我的购物车</div>
    </div>
    <div class="item"  >
      <img src="~assets/images/profile/address.png"/>
      <div class="text">我的地址</div>
    </div>
    <div class="item"  >
      <img src="~assets/images/profile/downLoad.png"/>
      <div class="text">下载App</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",

    data(){
      return{

      }
    }

  }
</script>

<style scoped>
  .item{
    padding:5px;
    width:100%;

    display: flex;
  }
.item img {
  width:24px;
  height:24px;
  position: relative;
  top:6px;
  left: 10px;

}
  .item .text{

  }
  .item .text  {
    margin-left:30px;
    height:40px;
    line-height: 40px;
    flex:1;
    /*width:80%;*/

    border-bottom: 1px solid rgba(100,100,100,.1);

  }
  .services{
    border-top:10px  solid rgba(100,100,100,.1);
  }
</style>
