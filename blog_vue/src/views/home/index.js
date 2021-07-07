const home = {
    component: () => import(/* webpackChunkName: "Common" */ './Home.vue'),
    meta: {
        icon: 'home',
        label: 'Home',
        order: 0,
    },
    path: '/',
}

export default home