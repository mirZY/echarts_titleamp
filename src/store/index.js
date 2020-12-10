import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
// import user from './modules/user'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : false,
        userinfo: window.localStorage.getItem('userinfo') ? JSON.parse(window.localStorage.getItem('userinfo')) : false, //字符串提取的时候要转json对象
        hostname: 0,
        uploadinfo: false,
        ispreview: false,
        pagesize: 20,
        Sidebar: window.localStorage.getItem('Sidebar') ? JSON.parse(window.localStorage.getItem('Sidebar')) : false,
        role: window.localStorage.getItem('role') ? JSON.parse(window.localStorage.getItem('role')) : false,
    },
    mutations: {
        Login(state, data) {
            window.localStorage.setItem('token', data);
            state.token = window.localStorage.getItem('token', data);
        },
        LogOut(state) {
            state.token = "";
            state.wxopenid = "";
            window.localStorage.setItem('token', '');
            state.uploadLs = false;
            window.localStorage.setItem('wxopenid', '');
            window.localStorage.setItem('userinfo', '');
            window.localStorage.setItem('Sidebar', '');
            window.localStorage.setItem('role', '');
        },

        SaveUserInfo(state, data) {
            window.localStorage.setItem('userinfo', JSON.stringify(data.data)); //本地存储只能存字符串 
            state.userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
        },

        SetuploadLs(state, data) {
            state.uploadinfo = data
        },

        SaveSidebar(state, data) {
            window.localStorage.setItem('Sidebar', JSON.stringify(data)); //本地存储只能存字符串 
            state.Sidebar = JSON.parse(window.localStorage.getItem('Sidebar'));
        },

        Saverole(state, data) {
            window.localStorage.setItem('role', JSON.stringify(data)); //本地存储只能存字符串 
            state.role = JSON.parse(window.localStorage.getItem('role'));
        },

    },
    modules: {
        app,
        settings,
        // user
    },
    getters
})

export default store