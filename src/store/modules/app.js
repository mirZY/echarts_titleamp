import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    sidebar: {
        opened: window.localStorage.getItem('sidebarStatus') ? !!+window.localStorage.getItem('sidebarStatus') : true,
        withoutAnimation: false
    },
    userinfo: window.localStorage.getItem('userinfo') ? JSON.parse(window.localStorage.getItem('userinfo')) : false, //字符串提取的时候要转json对象
    device: 'desktop'
}

const mutations = {
    // 控制侧边栏展开和隐藏
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        if (state.sidebar.opened) {
            window.localStorage.setItem('sidebarStatus', 1)
        } else {
            window.localStorage.setItem('sidebarStatus', 0)
        }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        window.localStorage.setItem('sidebarStatus', 0)
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
    },
    SAVE_USERINFO: (state, data) => {
        window.localStorage.setItem('userinfo', JSON.stringify(data)); //本地存储只能存字符串 
    },
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    },
    SaveUserInfo({ commit }, data) {
        commit('SAVE_USERINFO', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}