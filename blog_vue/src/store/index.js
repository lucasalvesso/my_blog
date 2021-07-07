import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    login: async (context, params) => {
      try {
        const response = await fetch('http://localhost:3009/user/login', {
          body: JSON.stringify(params),
          headers: new Headers({
            Authorization: 'lalalalalla',
            'Content-Type': 'application/json',
          }),
          method: 'post',
        });

        if (response.ok) {
          const json = await response.json();
          context.commit('setCredentials', json);
        }
      } catch (e) {
        console.log(e);
      }
    },
    signup: async (context, params) => {
      try {
        const response = await fetch('http://localhost:3009/user/signup', {
          body: JSON.stringify(params),
          headers: new Headers({
            Authorization: 'lalalalalla',
            'Content-Type': 'application/json',
          }),
          method: 'post',
        });

        if (response.ok) {
          // const json = await response.json();
          // alert(json);
        }
      } catch (e) {
        console.log(e);
      }
    },
    verifyToken: async (context, params) => {
      try {
        const response = await fetch('http://localhost:3009/user/verifytoken', {
          body: JSON.stringify(params),
          headers: new Headers({
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'application/json',
          }),
          method: 'post',
        });

        const json = await response.json();
        context.commit('setUserToken', json);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getUserCredentials: state => state.userCredentials,
  },
  modules: {
  },
  mutations: {
    setCredentials: (state, payload) => {
      if (payload && payload.user) {
        localStorage.setItem('user_id', payload.user.id);
        localStorage.setItem('token', payload.user.token);
      }
    },
    setUserToken: (state, payload) => {
      if (payload) {
        state.userCredentials = payload && !payload.error;
      }
    },
  },
  state: {
    userCredentials: null,
  },
});
