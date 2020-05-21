import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface RootState { data: object | undefined }

export default new Vuex.Store<RootState>({
  state: {
    data: undefined
  },
  mutations: {
    SET_DATA (state, value: object | undefined) {
      state.data = value
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
