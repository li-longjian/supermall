<template>
  <div class="Images" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">{{detailInfo.desc}}</div>
    <div>
      <div>{{detailInfo.detailImage[0].key}}</div>
      <div class="img_list">
        <img v-for="(item,index) in detailInfo.detailImage[0].list"
             :src="item" alt=""
             @load="imgLoad"
             :key="index"
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailImg",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        currentLength:0
      }
    },
    methods:{
      imgLoad(){
        //为了避免频繁刷新
        if(++this.currentLength === detailInfo.detailImage[0].list.length)
        this.$emit('imgLoad')
      }
    }

  }
</script>

<style scoped>
.Images{
  margin-top: 70px;
  border-top:10px solid #f6f6f6;
}
.desc{
  padding-top:25px;
  font-size: 14px;
}
.img_list img{
  width:100%;
  height:100%;
}
</style>
