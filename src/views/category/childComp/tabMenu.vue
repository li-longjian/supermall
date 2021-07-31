<template>
  <scroll id="tab-menu">
    <div class="menuList">
      <div class="menuItem" v-for="(item,index) in categorys"
           :key="index"
           @click="itemClick(index)"
           :class="{ 'active' : currentIndex === index}"
      >
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "tabMenu",
    components:{
      Scroll
    },
    props:{
      categorys:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        // console.log( index + 'itemClick');
        this.currentIndex = index;
        this.$emit('menu_item_click',index)
      }
    }
  }
</script>

<style scoped>
#tab-menu{
  background-color: #f6f6f6;
  width:25%;
  /*height:calc(100vh - 44px - 49px);*/
}

  .menuList{
    padding-top:44px;
    width:100%;
    height: 100%;
    font-size:15px;
    overflow: hidden;

  }
.menuItem{

  width: 100%;
  height: 45px;

  line-height: 45px;
  text-align: center;
}
.active{
  color:var(--color-high-text);
  background-color:#ffffff;
  border-left:4px solid var(--color-high-text)
}
</style>
