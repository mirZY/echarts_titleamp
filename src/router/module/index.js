import Layout from '@/layout'

import home from '@/views/Home/home'
export default [
  
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        alwaysShow: true,
        children: [{
            path: 'home',
            name: 'home',
            component: home,
            meta: {
                title: '首页',
            }
        }]
    }, 
    {
        path: '/404',
        component: Layout,
        redirect: '/404/404',
        alwaysShow: true,
        children: [{
            path: '404',
            name: '404',
            component: () =>
                import ('@/views/404/404'),
            meta: {
                title: '404',
            }
        }]
    },


]