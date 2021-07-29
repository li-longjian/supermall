export  default {
  addCart(context,payload) {
    return new Promise((resolve,reject)=>{
      let flag = -1;
      for (let i in context.state.cartList) {
        if (context.state.cartList[i].iid === payload.iid) {
          flag = 1;
          context.commit('addCount',i);
          resolve('当前商品数量+1')
        }
      }
      if (flag === -1) {
        payload.count = 1;
        context.commit('pushCart',payload);
        resolve('添加了新的商品')
      }
    })
  }
}
