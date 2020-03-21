import Vue from 'vue'
import App from './App'
// 以上2行管不着
// 以下2行不会管
Vue.config.productionTip = false
App.mpType = 'app'

// APP时用别人的websocket
// #ifdef APP-PLUS
import socket from './common/plus-websocket.js'
Object.assign(uni, socket)
// #endif

//VUEX加载
import store from './store'
Vue.prototype.$store = store

//自定义全局组件
import faIcon from './components/fa-icon/fa-icon.vue'
Vue.component('fa-icon',faIcon)
import bottomNav from "./components/botton-nav/botton-nav.vue"
Vue.component('bottom-nav',bottomNav)


const app = new Vue({
	store,
	...App
})
app.$mount()
