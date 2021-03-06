export const state = () => {
  return {
    // 是否有侧栏
    isAsidePage: false,

    // 是否为移动端
    mobileLayout: false,

    // 移动端侧边栏
    mobileSidebar: false,

    // ua
    userAgent: '',

    // 博主信息
    adminInfo: {},

    // 网站信息
    option: {}
  }
}

export const mutations = {

  // 侧栏
  CHANGE_ASIDE_PAGE (state, data) {
    state.isAsidePage = data
  },

  // 设置UA
  SET_USER_AGENT (state, action) {
    state.userAgent = action
  },

  // 设置是否移动端状态
  SET_MOBILE_LAYOUT (state, action) {
    state.mobileLayout = action
  },

  // 设置是否移动端状态
  SET_MOBILE_SIDEBAR (state, action) {
    state.mobileSidebar = action
  },

  // 博主用户信息
  SET_ADMIN_INFO (state, data) {
    state.adminInfo = data
  },

  // 网站信息
  SET_WEB_OPTION (state, data) {
    state.option = data
  }
}

export const getters = {
  mobileLayout: state => state.mobileLayout
}
