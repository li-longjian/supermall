<template>
  <div class="bottom_bar">
    <div class="left">
      <check-button class="check_button"
                    :isChecked="checked_all"
                    @click.native="checkClick"
      ></check-button>
      <div class="select_all">全选</div>
    </div>
    <div class="center">
      <span>合计:</span>
      <span class="total_price">￥{{totalPrice}}</span>
    </div>
    <div class="calc">去付款</div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  export default {
    name: "cartBottomBar",
    components:{
      CheckButton,
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter( item =>{
          return item.checked;
        }).reduce((preValue,item)=>{
          return preValue + item.price * item.count;
        },0).toFixed(2)
      },
      checked_all(){
        //当购物车为空时，全选按钮为空白
        if(!this.$store.state.cartList.length === 0)  return false;
        //find:查找数组中是否有不选中的，如果find有不选中的find返回true，但是checked_all需要取反
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods:{
      checkClick(){
        //如果是全选中，则取反，有不选中的，则全选
        if(this.checked_all){
          this.$store.state.cartList.forEach(item => { item.checked = false})
        }else{
          this.$store.state.cartList.forEach(item => { item.checked = true})
        }
      }

    }
  }
</script>

<style scoped>
.bottom_bar{
  width:100%;
  display: flex;
}
.left{
  display: flex;
  width:80px;

  text-align: center;
  line-height: 40px;
}
  .check_button{
    flex:1;
    position: relative;
    top:3px;
  }
  .select_all{
    flex:1;
  }
  .total_price{
    padding-left: 12px;
    color:red;
    font-weight: bold;
  }
  .center{
    line-height: 40px;
    text-align: center;
    flex: 1;
  }
  .calc{
    width:90px;
    line-height:40px;
    text-align: center;
    background-color: red;
    color:#ffffff;
  }
</style>
