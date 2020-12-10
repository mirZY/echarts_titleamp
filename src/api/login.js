import fetch from '@/utils/fetch'
import fetch1 from '@/utils/fetch1'

export function login(data) {
    return fetch({
        url: 'users/teacher/login',
        method: 'POST',
        data
    })
}

export function GetUserInfo() {
    return fetch({
        url: 'users/teacher/index',
        method: 'GET',
    })
}

export function GetUserInfos() {
    return fetch1({
        url: '/dataauth/power/info',
        method: 'GET',
    })
}

//侧边栏权限
export function financetags(data) {
    return fetch1({
        url: '/dataauth/tag/has',
        method: 'POST',
        data
    })
}