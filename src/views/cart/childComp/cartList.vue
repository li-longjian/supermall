<template>
  <div class="cart_list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :production="item"

      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from "./cartListItem";
  export default {
    name: "cartList",
    components:{
      CartListItem,
      Scroll,
    },
    computed:{
      cartList(){
        return this.$store.state.cartList;
      }
    },
    activated() {
      // console.log('-----');
      this.$refs.scroll.refresh();
    }


  }
</script>

<style scoped>
.cart_list{
  height: calc(100vh - 44px - 49px - 40px);

}
  .content{
    height: 100%;
    overflow: hidden;
  }

</style>
