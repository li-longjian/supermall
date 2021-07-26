<template>
  <div  class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probetype:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type:Boolean,
        default() {
          return false;
        }
      }
    },
    data(){
      return {
        scroll:null,

      }
    },
    mounted() {
      //1.创建scroll对象
      this.scroll = new BScroll('.wrapper',{
          click:true,
          probeType:this.probetype,
          observeDOM:true,
          pullUpLoad:this.pullUpLoad
      })
        //2.监听滚动位置
        if(this.probetype == 2 || this.probetype == 3){
          this.scroll.on('scroll',(position) => {
            // console.log(position);
            //自定义事件，将scoll的位置传到home
            this.$emit('scroll',position)
          })
        }

      //3.监听上拉加载
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() =>{
          // console.log('加载更多');
          this.$emit('pullingup')
        })
      }


    },
    methods:{
      //回到顶部
      scrollTo(x,y,time=300){
       this.scroll && this.scroll.scrollTo(x,y,time)
      },
      //刷新
      refresh(){
       this.scroll && this.scroll.refresh();
      },
      //加载更多
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
