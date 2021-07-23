<template>
  <div class="backTop">
    <img src="../../../assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>
  .backTop{
    position: fixed;
    right:8px;
    bottom:50px;
    z-index: 99;
  }
    .backTop img{
      width:50px;
      height:50px;
    }
</style>
