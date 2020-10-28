import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DateItem from '@/model/date'
import Cate from '@/model/category'
import dataAction from '@/store/dataAction'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const P=new DateItem(1,'好好学习',Cate.study)
new dataAction('test').addData(P)
