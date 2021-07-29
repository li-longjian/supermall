<template>
    <div id="profile">
<!--      导航栏-->
      <nav-bar class="profile_nav">
        <div slot="center">我的</div>
      </nav-bar>
<!--      头像以及用户名-->
      <user_massage></user_massage>
<!--      用户余额及优惠券相关信息-->
      <div class="user-about">
        <div class="num_style">
          <div class="text_sty">{{balance.toFixed(2)}}<span >元</span> </div>
          <div>我的余额</div>
        </div>
        <div class="num_style border_sty">
          <div class="text_sty">{{coupons}}<span >张</span></div>
          <div>我的优惠</div>
        </div>
        <div class="num_style">
          <div class="text_sty">{{integral}}<span >分</span></div>
          <div>我的积分 </div>
        </div>
      </div>

      <list ></list>
    </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import User_massage from "./childComp/User_massage";
  import list from "./childComp/list";
    export default {
        name: "profile",
      components:{
        NavBar,
        User_massage,
        list
      },
      data(){
          return {
            balance:0,
            coupons:0,
            integral:0,

          }
      }

    }
</script>

<style scoped>
.profile_nav{
  background-color: var(--color-tint);
  color:#fff;
  letter-spacing: 6px;
  font-size:17px;
}
  .user-about{
    display: flex;
    text-align: center;
    border-bottom:10px solid rgba(100,100,100,.1);
  }
  .num_style{
    flex: 1;
    line-height:30px;
    padding:10px;
    box-sizing: border-box;
    font-size: 14px;
  }
 .border_sty{
   border-left: 1px solid rgba(100,100,100,.2);
   border-right: 1px solid rgba(100,100,100,.2);
  }
.text_sty {
  color:red;
  font-size: 24px;
  font-weight: bold;
}
.text_sty span{
  font-size:14px;
  color:#666666;
  font-weight: normal;
}

</style>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              fill="#ff8198" p-id="5621"></path></svg>
