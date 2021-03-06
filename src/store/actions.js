const actions = {
  barDisply ({ commit }) {
    commit('barDisply')
    commit('wrapperDisply')
  },
  wrapperDisply ({ commit }) {
    commit('wrapperDisply')
  },
  themeChange ({ commit }) {
    commit('themeChange')
  },
  speekingNumChange ({ commit }, num) {
    commit('speekingNumChange', num)
  },
  updateUsertalk ({ commit }) {
    commit('updateUsertalk')
  },
  updateLocalStorage ({ commit }) {
    commit('updateLocalStorage')
  },
  scrollRemove ({ commit }, e) {
    commit('scrollRemove', e)
  },
  boxDisplay ({ commit }) {
    commit('boxDisplay')
    commit('wrapperDisply')
  },
  boxType ({ commit }, type) {
    commit('boxType', type)
  },
  searchAnimation ({ commit }) {
    commit('searchAnimation')
  }
}

export default actions
