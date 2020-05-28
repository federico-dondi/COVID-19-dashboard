import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

interface Country {
  Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: Date;
}

interface RootState {
  Global: Global;
  Countries: Country[];
}

export default new Vuex.Store<RootState>({
  state: {
    Global: {
      NewConfirmed: 0,
      TotalConfirmed: 0,
      NewDeaths: 0,
      TotalDeaths: 0,
      NewRecovered: 0,
      TotalRecovered: 0
    },
    Countries: []
  },
  mutations: {
    SET_GLOBAL (state, value: Global) {
      state.Global = value
    },
    SET_COUNTRIES (state, value: Country[]) {
      state.Countries = value
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
