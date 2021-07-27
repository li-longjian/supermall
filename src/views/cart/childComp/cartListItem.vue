<template>
<div class="listItem">
  <div class="checkButton">
    <check-button :isChecked="production.checked"
                  @click.native="checkClick"
    ></check-button>
  </div>

  <div class="image">
    <img :src="production.img" alt="">
  </div>
  <div class="content">
    <span class="title">{{production.title}}</span>
    <span class="desc">{{production.desc}}</span>
  </div>
    <div class="bottom_info">
      <div class="goods_price" >￥{{production.price}}</div>
      <div class="count">x{{production.count}}</div>
    </div>

</div>
</template>

<script>
  import CheckButton from "./CheckButton";
  export default {
    name: "cartListItem",
    props:{
      production:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButton,
    },
    methods:{
      checkClick(){

        this.$store.commit('checkChanged',this.production)
      }
    }

  }
</script>

<style scoped>
.listItem{
  display: flex;
  padding:10px 5px;
  border-bottom: 2px solid rgba(100,100,100,.1);
  position: relative;
}
.checkButton{
  display: flex;

  position: absolute;
  top:45%;
  width:20px;
}
.listItem  .image{
  flex:0.5;
  padding-left:25px;
}
.image img{
  border-radius: 10px;
  width:25vw;
  /*height:15vh;*/
}
.content{

  color:#333333;
  padding-left:5px  ;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  text-align: center;
  line-height: 40px;
}
.content .title{
  white-space: nowrap;
  font-size:16px;
}
.content .desc{
    white-space: nowrap;
    font-size:13px;
  }
.bottom_info {
  position: absolute;
  left:40%;
  bottom: 30px;
  display: flex;
  width:100vw;

}
.goods_price{
  color:#F3752C;
  font-size: 20px;
  flex:1;
}
.count{
  flex:1;

}

</style>
