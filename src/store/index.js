import Vue from 'vue';
import Vuex from 'vuex'
import createLogger from '../plugins/logger'
import auth from './modules/auth'
import health from './modules/health'
import fit from './modules/fit'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        auth,
        fit,
        health
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
