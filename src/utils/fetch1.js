import axios from 'axios'
import {
    Message
} from 'element-ui'
import store from '@/store'
import qs from 'qs'
import {
    AjaxUrl
} from '../../configurl'
import Layout from '@/layout'
import router from '../router'

const service = axios.create({
    // baseURL: AjaxUrl,    
    baseURL: process.env.VUE_APP_BASE_API ,
    timeout: 100000,
    transformRequest: [function(data) {
        data = qs.stringify(data)
        return data
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})

// 拦截器
service.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers['Authorization'] = store.state.token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(

    response => {
        const res = response.data

        if (res.code == 10001 || res.code == 401) {

            Message({
                message: res.err_msg,
                type: 'error',
                duration: 5 * 1000
            })

            store.commit('LogOut');
            
            window.location.href = `http://${window.location.hostname}/dataauth/ldap/logout?program=sixclass`

        }

        return res

    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })

        if(error.response.status == 400){
            store.commit('LogOut');
            window.location.href = `http://${window.location.hostname}/dataauth/ldap/logout?program=sixclass`
        }

        return Promise.reject(error)
    }
)

export default service