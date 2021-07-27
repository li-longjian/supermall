export  default {
  addCart(context,payload) {
    let flag = -1;
    for (let i in context.state.cartList) {
      if (context.state.cartList[i].iid === payload.iid) {
        flag = 1;
        context.commit('addCount',i)
      }
    }
    if (flag === -1) {
      payload.count = 1;
      context.commit('pushCart',payload);
    }
  }
}
