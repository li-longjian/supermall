<template>
  <div id="detail">
    <detail-nav class="detail_nav"></detail-nav>
      <Scroll class="content" ref="scroll">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detailnfo :goods="goods"></detailnfo>
        <shop-info :shop="shop"></shop-info>
        <detail-img :detail-info="detailInfo" @imgLoad="imgLoad"></detail-img>
        <goods-params :itemParams="itemParams"></goods-params>
      </Scroll>
    </div>


</template>

<script>
  import detailNav from "./childComp/detailNav";
  import detailSwiper from "./childComp/detailSwiper";
  import detailnfo from "./childComp/detailnfo";
  import shopInfo from "./childComp/shopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import detailImg from "./childComp/detailImg";
  import GoodsParams from "./childComp/GoodsParams";
  import {getDetail,Goods,Shop,GoodsParam} from "../../network/detail";

  export default {
    name: "Details",
    data(){
      return {
        iid:null,
        topImages:[],
        goods: {},
        shop:{},
        detailInfo:{},
        itemParams:{}
      }
    },
    components:{
      detailNav,
      detailSwiper,
      detailnfo,
      shopInfo,
      Scroll,
      detailImg,
      GoodsParams

    },
    methods:{
      imgLoad(){
        this.$refs.scroll.refresh();
      }
    },

    created(){
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res =>{
        console.log(res);
        const data = res.result
        //1.获取详情轮播图
        this.topImages = data.itemInfo.topImages;
        //2.获取价格，包邮信息等商品信息
        this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
        //3.获取商家店铺信息
        this.shop = new Shop(data.shopInfo)
        //4.获取详情图片
        this.detailInfo = data.detailInfo;
        //5.获取商品参数
        this.itemParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      })

    }
  }
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  margin-top:44px;
}
  .detail_nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
.content{
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
