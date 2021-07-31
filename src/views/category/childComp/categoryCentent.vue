<template>
  <div class="sub">
    <div class="content">

      <div v-for="(item,index) in  subcategories.list"
           :key="index"
           class="item"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" class="images">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>



  </div>
</template>

<script>

  export default {
    name: "categoryCentent",
    props:{
      subcategories:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      // GridView
    },
    created() {
      console.log(this.subcategories)
    },
    methods:{

    }

  }
</script>

<style scoped>
  .sub{
    padding-top:44px;

    position: absolute;
    top:0;
    right:0;

    width:70%;
    margin-top: 15px;
    padding-bottom: 49px;

  }
  .content {
    display: flex;
    flex-wrap: wrap;
    /*margin-left: 30%;*/
  }
  .item{

    width:120px;
    right:0;
    font-size:16px;
    text-align: center;
    padding:10px;
    box-sizing: border-box;
  }
  .images{
    width:80px;
    height:80px;
    /*border-radius: 50%;*/
  }
</style>
