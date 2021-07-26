<template>
<div class="comment" v-if="Object.keys(comment).length !==0">
  <div class="header">
    <span>用户评价</span>
    <span class="more">更多</span>
  </div>
  <div class="user_info">
    <img :src="comment.user.avatar" alt="">
    <span>{{comment.user.uname}}</span>
  </div>
  <div class="info_detail">
    <p>{{comment.content}}</p>
  </div>
  <div class="comment_style">
    <span>{{show_time}}</span>
    <span>{{comment.style}}</span>
  </div>
  <div class="comment_images" v-if="comment.images">
    <img :src="item" alt="" v-for="(item,index) in comment.images" :key="index">
  </div>
</div>
</template>

<script>
  import {dateFormat} from '../../../common/utils'
  export default {
    name: "detailComment",
    props:{
      comment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      show_time(){
        return dateFormat(this.comment.content*1000,'Y-m-d');
      }
    }

  }
</script>

<style scoped>
  .comment{
    border-top: 10px solid rgba(100,100,100,.1);
    border-bottom: 10px solid rgba(100,100,100,.1);
    margin:30px 0px;
  }
  .header{
    padding:15px 0;
    position: relative;
    border-bottom: 1px solid rgba(100,100,100,.1);
    /*justify-content: space-between;*/
  }
  .header span{
    font-size:14px;
  }
  .header .more{
    position: absolute;
    right:0;
    top:20px;
  }
  .user_info{
    padding:15px 0 ;

  }
  .user_info img{
    width:32px;
    height:32px;
    border-radius: 50%;
    position: relative;
    top:5px;
    left:5px;
  }
  .user_info span{
    padding-left:20px;
    font-size: 16px;
  }
  .info_detail{
    padding-left: 10px;
    font-size:14px;
  }
  .comment_style{
    padding:10px 0;
    font-size:14px;

  }
  .comment_style span{
    padding-left: 10px;
  }
  .comment_images img{
    width:25%;
    height:25%;
  }
</style>
