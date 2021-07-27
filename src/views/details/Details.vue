<template>
  <div id="detail">
    <detail-nav class="detail_nav"
                @title_click="title_click"
                ref="nav"
    ></detail-nav>
      <Scroll class="content" ref="scroll"
              :probetype="3"
              @scroll="contentSCroll"
      >
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detailnfo :goods="goods"></detailnfo>
        <shop-info :shop="shop"></shop-info>
        <detail-img :detail_info="detailInfo" @imgLoad="imgLoad"></detail-img>
        <goods-params :itemParams="itemParams" ref="params"></goods-params>
        <detail-comment :comment="comment" ref="comment"></detail-comment>
        <div class="recommend" >今日推荐</div>
        <goods-list :goods="recommend" ref="recommends"></goods-list>
      </Scroll>
    <bottom-tab @add_to_cart="add_to_cart"></bottom-tab>
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
  import detailComment from "./childComp/detailComment";
  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "../../network/detail";
  import GoodsList from "../../components/contents/goods/GoodsList";
  import {debounce} from '../../common/utils';
  import bottomTab from './childComp/bottomTab'

  export default {
    name: "Details",
    data(){
      return {
        iid:null,
        topImages:[],
        goods: {},
        shop:{},
        detailInfo:{},
        itemParams:{},
        comment:{},
        recommend:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
      }
    },
    components:{

      detailNav,
      detailSwiper,
      detailnfo,
      shopInfo,
      Scroll,
      detailImg,
      GoodsParams,
      detailComment,
      GoodsList,
      bottomTab

    },
    methods:{
      imgLoad(){
        //监听所有图片加载完成，做一次刷新
        this.$refs.scroll.refresh();

        //但是刷新频繁，可以做一次防抖函数;在create里对getThemeTopY函数赋值

        this.getThemeTopY();
      },
      title_click(index){
        // console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
      },
      //监听滚动位置
      contentSCroll(position){
        let positionY = -position.y;
        const length = this.themeTopYs.length;
        for(let i =0;i<length;i++){
          if(this.currentIndex !== i && ( (i<length-1 && positionY>=this.themeTopYs[i]&&
            positionY<this.themeTopYs[i+1])
            || (i===length-1 && positionY >=this.themeTopYs[i]))) {
                this.currentIndex = i;
                this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      },
      //监听加入购物车
      add_to_cart(){
        // console.log('加入购物车+1');
        const production = {};
        production.title = this.goods.title;
        production.img = this.topImages[0];
        production.price = this.goods.realPrice;
        production.iid = this.iid;
        production.desc = this.goods.desc;
        //提交到actions里面
        this.$store.dispatch('addCart',production);
      }
    },
    created(){
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res =>{
        // console.log(res);
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
        //6.获取评论信息
        if(data.rate.cRate !== 0 ){
          this.comment =data.rate.list[0];
        }
      });
      getRecommend().then(res =>{
        // console.log(res);
        this.recommend = res.data.list;
      });
      //给getThemeTopY赋值
      this.getThemeTopY = debounce(()=>{
        this.$nextTick(() =>{
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
          // console.log(this.themeTopYs);
        })
      })
    },
    mounted() {


    },
    updated() {
      //


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
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
  .recommend{
    padding:15px;
  }
</style>
