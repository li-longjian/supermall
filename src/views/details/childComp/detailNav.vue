<template>
  <div class="detail">
      <nav-bar>
        <div slot="left" class="back" @click="backClick">
          <img src="../../../assets/images/common/back.svg" alt="">
        </div>
        <div slot="center" class="titles">
          <div
               v-for="(item,index) in titles"
               class="title_item"
               :class="{ active: currentIndex == index}"
               @click="titleClick(index)"
          >
            {{item}}
          </div>
        </div>
      </nav-bar>


  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "detailNav",
    components:{
      NavBar,
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },

    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit('title_click',index)
      },
      backClick(){
        // this.$router.push('/home')
        //可能产生的bug,返回时有时有记录有的时候无记录，不能回到原来的地方
        this.$router.back();
      }

    }
  }
</script>

<style scoped>
  .detail{
    background-color: #ffffff;
      }
.titles{
  display: flex;
  font-size: 14px;
}
  .titles .title_item{
    flex:1;
  }
  .active{
    color:var(--color-high-text);
  }
.back img{
  width:18px;
  height:18px;
}
  .back{
    position: absolute;
    top:4px;
    left:8px
  }
</style>
