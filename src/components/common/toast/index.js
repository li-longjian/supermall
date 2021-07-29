import Toast from './Toast'

const obj ={};

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  //2.new 的方式，根据组件构造器创建一个组件对象
  const toast = new toastContrustor();
  //3.必须手动挂载到一个元素上
  toast.$mount(document.createElement('div'));
  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = Toast;
}

export default obj
