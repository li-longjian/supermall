/*
         refresh()函数非常频繁刷新，做防抖动处理
         */
export function  debounce(func,delay){
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() =>{
      func.apply(this,args)
    },delay)

  }
}



