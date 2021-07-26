<template>
  <div class="shop_info">
    <div class="shop">
      <div class="logo"><img :src="shop.shopLogo" alt=""></div>
      <span class="shopName">{{shop.name}}</span>
    </div>

    <div class="describe">
      <div class="goods_sell">
        <div class="sell">
          <span class="num_style">{{shop.cSells}}</span>
          <div class="font_style">
            总销量
          </div>
        </div>

        <div class="goods">
          <span class="num_style">{{shop.cGoods}}</span>
          <div class="font_style ">
            全部宝贝
          </div>
        </div>
      </div>

      <div class="shop_score">
        <table class="tab">
          <tr v-for="(item,index) in shop.score"
              :key="index"
              class="score_item">
            <td >{{item.name}}</td>
            <td class="score" :class="{'score_better':item.isBetter  }">{{item.score}}</td>
            <td class="better" :class="{'more_better':item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>

      </div>
    </div>
      <div class="shopUrl"><a :href="shop.shopUrl">进店逛逛</a></div>
  </div>
</template>

<script>
  export default {
    name: "shopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return{
        isBetter:false
      }
    }
  }
</script>

<style scoped>
  .shopUrl{
    width:100px;
    height:35px;
    line-height: 35px;
    background-color: rgba(100,100,100,.5);
    border-radius: 20px;
    text-align: center;
    /*position: absolute;*/
    position: relative;
    left:35% ;
    top:20px;
    letter-spacing: 3px;

    /*padding-bottom: 25px;*/
  }
  .shopUrl a{
    color:#ffffff;
    text-decoration: none;
  }
.shop_info{
  padding-top:30px;
  padding-left:15px;

}
.shop{
  display: flex;
}
.shopName{
  font-size:15px;
  position: relative;
  top:15px;
  margin-left:20px;
}
/*.logo{*/
/*  width: 36px;*/
/*  height:36px;*/

/*  !*border:1px solid #a6a6a6;*!*/
/*  text-align: center;*/

/*}*/
  .shop .logo img{
    width:32px;
    height:32px;
    border-radius: 50%;
  }
  .describe{
    padding-top:20px;
    display: flex;

  }
  .goods_sell{
    display: flex;
    width:50%;
    padding:20px 10px;
    box-sizing: border-box;
    text-align: center;
  }
.goods_sell .sell{
  width:25%;
  flex:1;


}
.goods_sell .goods{
  width:25%;
  flex:1;
  text-align: center;
  border-right:1px solid #a6a6a6;
}
.goods_sell .num_style{
  font-size:18px;
  font-weight: bold;
  padding-bottom: 5px;
}
  .font_style{
    font-size:12px;
    font-weight: bold;
  }
  .shop_score{
    width:50%;
    padding:5px;
    box-sizing: border-box;
    line-height: 1.5em;
    font-size: 14px;
  }

  .tab{
    border-spacing: 2px;
  }


.score{
  padding-left: 10px;
  color:green;
}
  .score_better{
    color:red;

  }
  .better{

    background-color: green;
    color:#ffffff;
    font-size: 12px;
  }
  .more_better{
    background-color: red;
    color:#ffffff;
    font-size: 12px;
  }
</style>
