<template>
    <div class="page-content">
        <div class="content-wrapper">
            <div class="content d-flex justify-content-center align-items-center">
                <form class="login-form" @submit.prevent="authenticate">
                    <div class="card mb-0">
                        <div class="card-body">

                            <div class="text-center mb-3">
                                <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                <h5 class="mb-0">
                                    Авторизация в системе
                                </h5>
                            </div>

                            <template v-if="authError">
                                <div class="alert alert-danger">{{ authError }}</div>
                            </template>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input type="email" name="email" v-model="form.email" class="form-control"
                                       placeholder="E-mail">
                                <div class="form-control-feedback">
                                    <i class="icon-user text-muted"></i>
                                </div>
                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input type="password" v-model="form.password" class="form-control"
                                       placeholder="Пароль">
                                <div class="form-control-feedback">
                                    <i class="icon-lock2 text-muted"></i>
                                </div>
                            </div>

                            <div class="form-group login-options">
                                <div class="row">
                                    <div class="col-sm-6">

                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" v-model="form.remember" value="1" checked
                                                       class="form-check-input-styled">
                                                Запомнить меня
                                            </label>
                                        </div>

                                    </div>

                                    <div class="col-sm-6 text-right">
                                        <a href="/">Забыли пароль?</a>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Вход <i
                                        class="icon-arrow-right14 position-right"></i></button>
                            </div>


                            <div class="form-group text-center text-muted content-divider">
                                <span class="px-2">Нет аккаунта?</span>
                            </div>

                            <div class="form-group">
                                <a href="/auth/register" class="btn btn-light btn-block">Зарегистрироваться</a>
                            </div>

                            <span class="form-text text-center text-muted">Пользуясь сервисом вы даете согласие на обработку <a
                                    href="#" data-toggle="modal"
                                    data-target="#modal_policy">персональных данных</a></span>

                            <policy></policy>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Policy from './PolicyComponent.vue';
    import {login} from '../../helpers/auth';
    export default {
        name: 'login',
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    remember: 1
                },
                error: null
            };
        },
        components: {
            Policy
        },
        mounted: function () {
            $('.form-check-input-styled').uniform();
        },
        methods: {
            authenticate() {
                this.block('.login-form');

                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit('loginSuccess', res);
                        this.$router.push({'path': '/admin/dashboard'})
                    })
                    .catch((error) => {
                        this.$store.commit('loginFailed', {error});
                        this.unBlock('.login-form');
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
    }
</script>
