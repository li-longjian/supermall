<template>
  <div class="recommend">

    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>

</template>

<script>
  export default {
    name: "recommend",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  font-size: 14px;
  text-align: center;
  padding :15px 5px;
  box-sizing: border-box;
  border-bottom: 9px solid #eee;
}
  .recommend-item{
    flex:1;
    width:100%;

  }
  .recommend-item img{
    width:20vw;
  }

</style>
