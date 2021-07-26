import {request1} from './request'

export  function getDetail(iid) {
    return request1({
      url:'/detail',
      params:{
        iid
      }
    })
}

export class Goods{
  constructor(columns,itemInfo,services) {
    this.columns = columns;
    this.realPrice = itemInfo.lowNowPrice;
    this.title = itemInfo.title
    this.oldPrice = itemInfo.oldPrice;
    this.disCount = itemInfo.discountDesc;
    this.newPrice = itemInfo.price;
    this.services = services;
    this.desc= itemInfo.desc;
    this.discountBgColor = itemInfo.discountBgColor;
  }
}

export class Shop{
  constructor(shopInfo) {
    this.cFans = shopInfo.cFans;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
  }
}

export class GoodsParam{
  constructor(info,rule) {
    this.image = info.images ? info.images[0]:' ';
    this.infos = info.set;
    this.sizes = rule.tables

  }
}
