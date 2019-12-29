/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import store from './store'

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         if (!auth.loggedIn()) {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}
//             })
//         } else {
//             next()
//         }
//     } else {
//         next() // make sure to always call next()!
//     }
// });

Vue.config.productionTip = false;

Vue.use(ArgonDashboard);
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
