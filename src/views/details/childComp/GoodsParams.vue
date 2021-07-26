<template>
  <div>
    <table class="item_sizes">
      <tr v-for="item in itemParams.sizes[0]">
        <td v-for="it in item">{{it}}</td>
      </tr>
    </table>
    <table class="item_info">
      <tr v-for="info in itemParams.infos">
          <td>{{info.key}}</td>
        <td class="info_value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "GoodsParams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }

      }
    }
  }
</script>

<style scoped>
  .item_sizes{
    width:100%;
    height:230px;
  }
.item_sizes tr td{
  border-bottom: 1px solid rgba(100,100,100,.1);
}
  .item_info{
    width:100%;
    height:500px
  }
  .item_info tr td{

    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info_value{
    color:var(--color-high-text);
  }
</style>
