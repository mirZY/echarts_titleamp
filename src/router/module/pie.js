import Layout from '@/layout'

export default [
    {
        path: '/Pie',
        component: Layout,
        redirect: '',
        alwaysShow: true,
        children: [{
            path: 'pie_one',
            name: 'pie1',
            component: () =>
                import ('@/views/Pie/pie_one'),
            meta: {
                title: '饼图（一）',
            },
        },
        {
            path: 'pie_two',
            name: 'pie2',
            component: () =>
                import ('@/views/Pie/pie_two'),
            meta: {
                title: '饼图（二）',
            },
        },
        {
            path: 'pie_three',
            name: 'pie3',
            component: () =>
                import ('@/views/Pie/pie_three'),
            meta: {
                title: '饼图（三）',
            },
        },
        {
            path: 'pie_four',
            name: 'pie4',
            component: () =>
                import ('@/views/Pie/pie_four'),
            meta: {
                title: '饼图（四）',
            },
        },
        {
            path: 'pie_five',
            name: 'pie5',
            component: () =>
                import ('@/views/Pie/pie_five'),
            meta: {
                title: '饼图（五）',
            },
        },
        {
            path: 'pie_six',
            name: 'pie6',
            component: () =>
                import ('@/views/Pie/pie_six'),
            meta: {
                title: '饼图（六）',
            },
        },
        {
            path: 'pie_seven',
            name: 'pie7',
            component: () =>
                import ('@/views/Pie/pie_seven'),
            meta: {
                title: '饼图（七）',
            },
        },
        {
            path: 'pie_eight',
            name: 'pie8',
            component: () =>
                import ('@/views/Pie/pie_eight'),
            meta: {
                title: '饼图（八）',
            },
        },{
            path: 'pie_nine',
            name: 'pie9',
            component: () =>
                import ('@/views/Pie/pie_nine'),
            meta: {
                title: '饼图（九）',
            },
        },
    ]
    },


]