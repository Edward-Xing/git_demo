import Cookies from 'js-cookie'

const app = {
  state: {
    language: Cookies.get('language') || 'en'
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      console.log('language222222',language);
      commit('SET_LANGUAGE', language)
    }
  }
}

export default app
