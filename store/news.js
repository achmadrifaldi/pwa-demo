const NEWS_API_KEY = '299946e04850460e833a598059b77f53'
const NEWS_API_URL = 'https://newsapi.org/v2/'

export const state = () => ({
  isLoading: false,
  topHeadlines: []
})

export const getters = {
  isLoading: state => {
    return state.isLoading
  },
  topHeadlines: state => {
    return state.topHeadlines
  }
}

export const mutations = {
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload
  },
  SET_TOP_HEADLINES(state, payload) {
    state.topHeadlines = payload
  }
}

export const actions = {
  fetchTopHeadlines({ commit }) {
    commit('SET_IS_LOADING', true)

    return this.$axios
      .$get(
        `${NEWS_API_URL}/top-headlines?sources=google-news&apiKey=${NEWS_API_KEY}`
      )
      .then(response => {
        commit('SET_TOP_HEADLINES', response)

        return response
      })
      .catch(error => {
        throw error
      })
      .finally(() => commit('SET_IS_LOADING', false))
  }
}
