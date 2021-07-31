<template>
  <div class="category">
<!--    导航栏-->
    <nav-bar class="cate-nav">
      <div slot="center">商品分类</div>
    </nav-bar>

      <div class="content">
        <!--左侧菜单选择栏-->
        <tab-menu :categorys="category" @menu_item_click="menu_item_click" class="tabmenu"></tab-menu>
        <!--    分类里的-->
        <div class="categorys_list">
          <category-centent :subcategories="showSubcategories" ></category-centent>
        </div>
      </div>


  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabMenu from "./childComp/tabMenu";
  import CategoryCentent from "./childComp/categoryCentent";

  import {getCategory,getSubcategory} from "../../network/category";


  export default {
      name: "Category",
      components: {

        NavBar,
        TabMenu,
        CategoryCentent,

      },
      data(){
          return {
            category:[],
            categoryData: {},
            currentIndex:-1,
          }
      },
      created() {
        this._getCategory();
    },
    computed:{
      showSubcategories(){
        if(this.currentIndex === -1) return {};
        return this.categoryData[this.currentIndex].subcategories
      }
    },
    methods:{
        _getCategory(){
          getCategory().then(res =>{
            // console.log(res);
            //1.获取分类菜单的信息
            this.category = res.data.category.list;
            //2.初始化 每一个分类的子数据
            for(let i = 0;i<this.category.length;i++){
              //拿到每一个子分类对象
              this.categoryData[i] = {
                subcategories: {},
                categoryDetail: {
                  'pop':[],
                  'new':[],
                  'sell':[]
                },
              };
            }
            //请求第一个分类数据
            this._getSubcategory(0)
          })

  },
      _getSubcategory(index){
        this.currentIndex = index;
        const maitKey = this.category[index].maitKey;
        getSubcategory(maitKey).then(res => {
          // console.log(res);
          this.categoryData[index].subcategories = res.data;
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail(POP)
          this._getCategoryDetail(SELL)
          this._getCategoryDetail(NEW)
        })
  },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      menu_item_click(index){
          // this.currentIndex = index;
          this._getSubcategory(index);
      }
    }

  }
</script>

<style scoped>
.cate-nav{
  background-color: var(--color-tint);
  color:#ffffff;
  letter-spacing: 3px;
  z-index: 99;


  position: fixed;
}
.tabmenu{
  position: fixed;

}




</style>
