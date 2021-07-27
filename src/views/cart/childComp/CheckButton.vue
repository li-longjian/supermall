<template>
  <div class="check">
<!--    <h3>11111</h3>-->
    <img src="../../../assets/images/cart/tick.svg" alt=""
         :class="{'checked':isChecked}"
    >
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return true
        }
      }

    }
  }
</script>

<style scoped>
.check{

}
.check img{
  width:20px;
  height:20px;
  border-radius: 50%;
  border:2px solid rgba(100,100,100,.4);
}
.check .checked{
    background-color: red;
    border:2px solid red ;
  }
</style>
