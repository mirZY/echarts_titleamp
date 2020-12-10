import Layout from '@/layout'

export default [
    {
        path: '/Line',
        component: Layout,
        redirect: '/Line/ProgresDetail',
        alwaysShow: true,
        children: [{
            path: 'line_one',
            name: 'Line1',
            component: () =>
                import ('@/views/Line/line_one'),
            meta: {
                title: '折线图（一）',
            },
        },
        {
            path: 'line_two',
            name: 'Line2',
            component: () =>
                import ('@/views/Line/line_two'),
            meta: {
                title: '折线图（二）',
            },
        },
        {
            path: 'line_three',
            name: 'Line3',
            component: () =>
                import ('@/views/Line/line_three'),
            meta: {
                title: '折线图（三）',
            },
        },
        {
            path: 'line_four',
            name: 'Line4',
            component: () =>
                import ('@/views/Line/line_four'),
            meta: {
                title: '折线图（四）',
            },
        },
        {
            path: 'line_five',
            name: 'Line5',
            component: () =>
                import ('@/views/Line/line_five'),
            meta: {
                title: '折线图（五）',
            },
        },
        {
            path: 'line_six',
            name: 'Line6',
            component: () =>
                import ('@/views/Line/line_six'),
            meta: {
                title: '折线图（六）',
            },
        },
        {
            path: 'line_seven',
            name: 'Line7',
            component: () =>
                import ('@/views/Line/line_seven'),
            meta: {
                title: '折线图（七）',
            },
        },
        {
            path: 'line_eight',
            name: 'Line8',
            component: () =>
                import ('@/views/Line/line_eight'),
            meta: {
                title: '折线图（八）',
            },
        },
    ]
    },


]