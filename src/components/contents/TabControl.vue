<template>
  <div class="tabControl">

    <div class="item"
         v-for="(item,index) in titles"
         :class="{active:currentIndex === index}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        //向home发送改变的typeindex
        this.$emit('typeChange',index)
      }

    }

  }
</script>

<style scoped>
.tabControl{
  display: flex;
  text-align: center;
  font-size: 16px;
  height:40px;
  line-height: 40px;
  background-color: #ffffff;
  z-index: 9;
}
  .item{
    flex:1;
  }
  .item span {
    padding: 5px;
  }
  .active{
    color:var(--color-high-text);

  }
.active span{
  border-bottom:2px solid var(--color-tint);
}
</style>
