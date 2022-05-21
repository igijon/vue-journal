export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/DaybookNoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/DaybookEntryView.vue')
        }
    ]
}