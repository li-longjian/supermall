<template>
  <div class="base_info" v-if="goods">

    <div class="title">
    <h3>{{goods.title}}</h3> </div>
    <div class="Price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-show="goods.disCount"
            :style="{backgroundColor:goods.discountBgColor}"
            class="disCount"
      >
        {{goods.disCount}}
      </span>
    </div>
    <div class="info_others" v-if="goods.column">
      <span >{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="shop_serves" v-if="goods.services">
      <span v-for="index  in goods.services.length-1" :key="index" >
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailnfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.base_info{
  margin-top:50px;
}
.title{
  font-size:16px;
}
  .Price{
    margin:15px 10px;
  }
  .Price .n-price{
    font-size:24px;
    color:var(--color-high-text);
  }
  .Price .o-price{
    padding:0 10px;
    font-size:14px;
    color:#8f9096;
    text-decoration: line-through;
  }
  .disCount{
    color:#ffffff;
    border-radius: 5px;
    padding:3px;
    position: relative;
    top:-15px;
  }
  .info_others{
    display: flex;
    /*text-align: center;*/
    color:#8f9096;
    padding-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #F3F3F3;
    font-size:15px;
  }
.info_others span{
  flex:1;
}
  .shop_serves{
    padding:25px 15px ;
    font-size:15px;
    display: flex;
    border-bottom: 10px solid #F3F3F3;
  }
.shop_serves span{
  flex:1;
}
.shop_serves img{
  /*margin-right:3px;*/
  width:16px;
  height:16px;
  position: relative;
  top:2px;

}
</style>
