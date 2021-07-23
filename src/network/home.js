import {request0,request1} from './request'
export function getHomeMultiData() {
  return request0({
    url:'/home/multidata'
  });
}
export function getHomeGoods(type,page) {
  return request1({
    url:'/home/data',
    params:{
      type,
      page
    }
  });
}

