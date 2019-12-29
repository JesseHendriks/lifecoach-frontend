<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5">
                    <div class="btn-wrapper text-center">
                        <img src="img/brand/logo-text.png" class="mw-100">
                    </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                    <form action="#" @submit.prevent="login">
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="password">
                        </base-input>

                        <!--                        <base-checkbox class="custom-control-alternative">-->
                        <!--                            <span class="text-muted">Remember me</span>-->
                        <!--                        </base-checkbox>-->
                        <div class="text-center">
<!--                            <base-button type="primary" class="my-4">Sign in</base-button>-->
                            <button type="submit" class="btn-submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light"><small>Forgot password?</small></a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''

            }
        },
        methods: {
            login() {
                this.$store.dispatch('auth/retrieveToken', {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    this.$router.push({name:'dashboard'})
                })
            }
        }
    }
</script>
<style>
</style>
