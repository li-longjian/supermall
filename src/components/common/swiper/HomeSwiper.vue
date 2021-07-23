<template>
  <div class="wrapper">
    <swiper  :options="swiperOptions" >

      <swiper-slide v-for="item in banners" :key="item.title">
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination">

      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
        banners:{
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
          },

        }
      }
    },
  }
</script>

<style scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
  /*flex-shrink: 0;*/
}
  .wrapper img{
    width:100%;
  }
.swiper-pagination{
  --swiper-pagination-color:#fff;
}
</style>
