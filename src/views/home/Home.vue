<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 ref="tabControl1"
                 @typeChange="typeChange"
                 class="tabControl"
                 v-show="isFixed"
    ></tab-control>
      <scroll class="content" ref="scroll"
              :probetype="probetype"
              @scroll="contentScroll"
              :pullUpLoad="true"
              @pullingup="loadMore"
              >

        <!--    banner-->
        <home-swiper :banners="banners"
                     class="banner"
                     @swiper-img-load="swiper_img_load"
        ></home-swiper>
        <!--    recommend-->
        <recommend :recommend="recommend"></recommend>
        <!--    本周流行-->
        <fashion></fashion>
        <!--    -->
        <tab-control :titles="['流行','新款','精选']"
                     ref="tabControl"
                     @typeChange="typeChange"
        ></tab-control>
        <!--    -->
        <goods-list :goods="goods[this.currentType].list"></goods-list>
      </scroll>
      <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getHomeMultiData} from "network/home";
    import {getHomeGoods} from "network/home";
    import HomeSwiper from "../../components/common/swiper/HomeSwiper";
    import Recommend from "./childComps/recommend";
    import Fashion from "./childComps/Fashion";
    import TabControl from "components/contents/TabControl";
    import GoodsList from "../../components/contents/goods/GoodsList";
    import Scroll from "components/common/scroll/Scroll";
    import backTop from "components/contents/backTop/backTop";
    import {debounce} from "common/utils";

    export default {
        name: "Home",
        components:{
          GoodsList,
          NavBar,
          HomeSwiper,
          Recommend,
          Fashion,
          TabControl,
          Scroll,
          backTop
        },
        created() {
        this.getHomeMultiData(),
         this.getHomeGoods('pop'),
          this.getHomeGoods('new'),
          this.getHomeGoods('sell')

      },
        mounted() {
          //1.监听图片加载是否完成
          //debounce防抖动函数
        const refresh = debounce(this.$refs.scroll.refresh,200)
        //通过事件总线监听图片加载是否完成
        this.$bus.$on('imageLoad',() =>{
          // console.log('images load');
          //刷新scroll，使scrollHeight同时刷新
          // this.$refs.scroll.scroll.refresh()
          refresh()
        })


      },
        data() {
          return {
            banners:[],
            recommend:[],
            currentType:'pop',
            probetype:3,
            isShowBackTop:false,
            taboffsetTop:0,
            isFixed:false,
            saveY:0,
            goods: {
              'pop':{
                page:0,
                list:[]
              },
              'new':{
                page:0,
                list:[]
              },
              'sell':{
                page:0,
                list:[]
              },
            }
            }
        },
        activated() {
          //再次进来home时回到离开时的位置
          this.$refs.scroll.refresh();
          this.$refs.scroll.scrollTo(0,this.saveY,0);

        },
        deactivated() {
          //离开时保存home的位置
          this.saveY = this.$refs.scroll.scroll.y;
          // console.log(this.saveY);
        },
      computed: {

        },

        methods: {

          /*
          监听事件
          */
          typeChange(index){
            switch (index) {
              case 0: this.currentType = 'pop';
                      break;
              case 1: this.currentType = 'new';
                      break;
              case 2: this.currentType = 'sell';
                      break;

            }
            this.$refs.tabControl.currentIndex = index;
            this.$refs.tabControl1.currentIndex = index;
          },
          //聚顶效果
          swiper_img_load(){
            this.taboffsetTop = this.$refs.tabControl.$el.offsetTop
              //2.监听tabControl
              //要获取tabControl的offsetTop
              //所有组件都有一个属性$el,可以拿到组件内元素
              // console.log(this.taboffsetTop);
    },
          //回到顶部
          topClick(){
            //this.refs.scroll取到scroll对象，scroll里面有一个scrollTo的函数
            this.$refs.scroll.scrollTo(0,0,500);
          },
          //监听scroll的位置
          contentScroll(position){
            // console.log(position);
            //当滑动到位置y小于-1200px时，回到top出现
            this.isShowBackTop = position.y < -1200;

            //监听taboffsetTop,当y超过taboffsetTop时，isFixed为true
            this.isFixed = position.y < -this.taboffsetTop-40
          },
          // 监听上拉加载更多
          loadMore(){
            // console.log('加载更多');
            //调用之前封装好的函数,并把当前是pop或者new或者sell传入
            this.getHomeGoods(this.currentType)
            //刷新阻止better-scroll的bug
            this.$refs.scroll.scroll.refresh();
            //加载更多后,必须回调这个函数:finishPullUP()
            // this.$refs.scroll.finishPullUp();
          },
          /*
          网络请求相关
           */
          getHomeMultiData(){
            getHomeMultiData().then(res =>{

              this.banners = res.data.banner.list;
              this.recommend = res.data.recommend.list;
            })
          },
          getHomeGoods(type){
            const page = this.goods[type].page+1;
            getHomeGoods(type,page).then(res =>{
              this.goods[type].list.push(...res.data.list);
              this.goods[type].page +=1;
              this.$refs.scroll.finishPullUp();
            })
          }
        }
    }
</script>

<style scoped>
  #home {
   margin-top: 44px;
    position: relative;
  }
  .content{
    /*height:300px;*/
    overflow: hidden;
    height:calc(100vh - 93px)
    /*不能将高度写死*/
    /*height:300px;*/
    /*可以用定位操作完成*/
    /*好像有问题下面操作*/
    /*position: absolute;*/
    /*top:44px;*/
    /*bottom: 49px;*/
    /*left:0;*/
    /*right:0;*/
  }
  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
    z-index: 9;
  }
.tabControl{
  /*position: fixed;*/

  position:relative;
  /*top:44px;*/
  z-index: 9;
}
  /*.home-tab-control{*/
  /*  !*两个要混合使用*!*/
  /*  position: sticky;*/
  /*  top: 44px;!*顶部navbar的高度*!*/
  /*  z-index: 9;*/
  /*}*/

  /*.home-scroller{*/
  /*  !*height:300px;*!*/
  /*  overflow: hidden;*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  right: 0;*/
  /*  left: 0;*/
  /*}*/



</style>
