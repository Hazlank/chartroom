const getters = {
  theme: state => {
    return state.theme
  },
  barPosition: state => {
    return state.barPosition
  },
  wrapper: state => {
    return state.wrapper
  },
  speekingNum: state => {
    return state.speekingNum
  },
  userList: state => {
    return state.userList
  },
  messagecontent: state => {
    const list = state.userList
    return [].concat(list.map((d, _) => d.messagecontent))[state.speekingNum]
  }
}

export default getters
