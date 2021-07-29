<template>
  <div class="toast" v-show="isShow">
    {{massage}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{

      },
    data(){
      return {
        massage:'',
        isShow:false,
      }
    },
    methods:{

      show(massage='默认文字',time=1500){
        this.massage = massage;
        this.isShow = true;
        setTimeout(()=>{
          this.isShow = false;
        },time)
      }

    }


  }
</script>

<style scoped>
.toast{
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  padding:10px;
  color:#fff;
  background-color: rgba(0,0,0,.7);
  z-index: 99;
}
</style>
