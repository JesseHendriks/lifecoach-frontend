import $axios from "../axios-instance";

const state = {
    token: localStorage.getItem('access_token') || null,
};

const getters = {
    loggedIn(state) {
        return state.token !== null
    },
};

const actions = {
    retrieveToken(context, credentials) {
        return new Promise((resolve, reject) => {
            $axios.post('/login', {
                email: credentials.email,
                password: credentials.password
            }).then(response => {
                const token = response.data.access_token;

                localStorage.setItem('access_token', token);
                context.commit('retrieveToken', token);

                resolve(response);
            }).catch(error => {
                reject(error);
            })
        })
    },
    destroyToken(context) {
        if (context.getters.loggedIn()) {
            return new Promise((resolve, reject) => {
                $axios.post('logout').then(response => {
                    localStorage.removeItem('access_token');
                    context.commit('destroyToken');

                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
};

const mutations = {
    retrieveToken(state, token) {
        state.token = token;
    },
    destroyToken(state){
        state.token = null;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
