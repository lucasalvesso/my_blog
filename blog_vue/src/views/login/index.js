const login = {
    component: () => import(/* webpackChunkName: "Common" */ './Login.vue'),
    meta: {
        icon: 'login',
        label: 'Login',
        order: 0,
    },
    path: '/login',
}

export default login