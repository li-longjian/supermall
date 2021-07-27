<template>
  <div class="cart">
    <nav-bar class="cart_nav" >
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar class="bottom_bar"></cart-bottom-bar>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import cartList from "./childComp/cartList";
  import CartBottomBar from "./childComp/cartBottomBar";
    export default {
        name: "Cart",
      components:{
        CartBottomBar,
        NavBar,
        cartList
      },
      computed:{
          cartListLength(){
            return this.$store.state.cartList.length;
          }
      }

    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
.cart_nav{
  background-color: var(--color-tint);
  color:#ffffff;
  letter-spacing: 3px;
  z-index: 9;
  position: relative;
}
  .bottom_bar{
    width:100%;
    height:40px;
    background-color:#ffffff;
    border-top:1px solid rgba(100,100,100,.1);
  }
</style>
