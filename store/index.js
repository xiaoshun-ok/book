import Vue from 'vue'
import Vuex from 'vuex'
import chat from './module/chat.js'
import app from './module/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	    //
	  },
	  mutations: {
	    //
	  },
	  actions: {
	    //
	  },
	  modules: {
	    chat,app
	  }
})
