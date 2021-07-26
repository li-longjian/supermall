<template>
  <div class="wrapper">
    <swiper  :options="swiperOptions" >

      <swiper-slide v-for="item in topImages" :key="item">

          <img :src="item" alt="" >

      </swiper-slide>

      <div class="swiper-pagination" slot="pagination">

      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "detailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination:{el:'.swiper-pagination'},
          loop : true,
          autoplay: {
            delay:1500,
            disableOnInteraction: false,
          }
        },
        isLoad:false
      }
    },
  }
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    width: 100%;
    position: relative;
    top:40px;
    height:260px;
    /*flex-shrink: 0;*/
  }
  .wrapper img{
    width:100%;
    height:100%;

  }
  .swiper-pagination{
    --swiper-pagination-color:#fff;
  }
  .swiper-pagination-bullets{
    top:230px;
  }
</style>
