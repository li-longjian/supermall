export default {

  addCount(state,payload){
    state.cartList[payload].count += 1;
  },
  pushCart(state,payload){
    payload.checked = true;
    state.cartList.push(payload);
  },
  checkChanged(state,payload){
    for(let item of state.cartList){
      if(item.iid === payload.iid){
        item.checked = !item.checked
      }
    }

  }
}
