const signup = {
    component: () => import(/* webpackChunkName: "Common" */ './Signup.vue'),
    meta: {
        icon: 'manage_accounts',
        label: 'SignUp',
        order: 0,
    },
    path: '/signup',
};

export default signup;
