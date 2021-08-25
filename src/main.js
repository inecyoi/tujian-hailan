import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.mint-ui样式
import 'mint-ui/lib/style.css'
//2.mui库样式
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
//3.mint-ui组件 Header
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
//4.注册组件
Vue.component(Header.name,Header);
//注册轮播图组件 Swipe及 SwipeItem
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//注册button组件
Vue.component(Button.name,Button);

//5.引入axios库
import axios from 'axios'
//6.配置跨域访问保存session
axios.defaults.withCredentials = true;
//7.将axios库配置到vue实例对象
Vue.prototype.axios = axios;

//7.1加载第三方模块qs
import qs from "qs"
//7.2配置qs模块
Vue.prototype.qs = qs;

//8.main.js 创建日期过滤器
Vue.filter("datetime",function(val){
  //8-1.创建日期对象
  var date = new Date(val);
  //8-2.获取 年 月 日 小时 分钟 秒
  var y = date.getFullYear();  //年
  var m = date.getMonth()+1;   //月
  var d = date.getDate();      //日
  var h = date.getHours();     //小时
  var ml = date.getMinutes();   //分钟
  var s = date.getSeconds();   //秒
  //8-3.返回字符串 y-m-d h:ml:s
  if(m<10)m = "0"+m;
  if(d<10)d = "0"+d;
  return `${y}-${m}-${d} ${h}:${ml}:${s}`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
