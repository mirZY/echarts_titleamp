import Layout from '@/layout'

export default [
    {
        path: '/Bar',
        component: Layout,
        redirect: '',
        alwaysShow: true,
        children: [{
            path: 'bar_one',
            name: 'bar1',
            component: () =>
                import ('@/views/Bar/bar_one'),
            meta: {
                title: '柱状图（一）',
            },
        },
        {
            path: 'bar_two',
            name: 'bar2',
            component: () =>
                import ('@/views/Bar/bar_two'),
            meta: {
                title: '柱状图（二）',
            },
        },
        {
            path: 'bar_three',
            name: 'bar3',
            component: () =>
                import ('@/views/Bar/bar_three'),
            meta: {
                title: '柱状图（三）',
            },
        },
        {
            path: 'bar_four',
            name: 'bar4',
            component: () =>
                import ('@/views/Bar/bar_four'),
            meta: {
                title: '柱状图（四）',
            },
        },
        {
            path: 'bar_five',
            name: 'bar5',
            component: () =>
                import ('@/views/Bar/bar_five'),
            meta: {
                title: '柱状图（五）',
            },
        },
        {
            path: 'bar_six',
            name: 'bar6',
            component: () =>
                import ('@/views/Bar/bar_six'),
            meta: {
                title: '柱状图（六）',
            },
        },
        {
            path: 'bar_seven',
            name: 'bar7',
            component: () =>
                import ('@/views/Bar/bar_seven'),
            meta: {
                title: '柱状图（七）',
            },
        },
        {
            path: 'bar_eight',
            name: 'bar8',
            component: () =>
                import ('@/views/Bar/bar_eight'),
            meta: {
                title: '柱状图（八）',
            },
        },
    ]
    },


]