import fetch1 from '@/utils/fetch1'
// import fetch2 from '@/utils/fetch2'

export function GetProgresList(data) {
    return fetch1({
        url: 'dataoperation/teacher/list',
        method: 'GET',
        params:data
    })
}

