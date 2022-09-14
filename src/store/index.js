import Vue from 'vue'
import Vuex from 'Vuex'
import user from './user.js'
import search from './search.js'

Vue.use(Vuex)
export default new Vuex.Store({
   modules:{
    user,search
   }
})