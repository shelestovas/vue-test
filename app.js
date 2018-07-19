require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';
import {mixins} from './helpers/mixins';
import Application from './components/ApplicationComponent.vue';
import {initialize} from './helpers/general';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

Vue.mixin(mixins);

const router = new VueRouter({
    routes,
    mode: 'history'
});

initialize(store, router);

const application = new Vue({
    el: '#application',
    router,
    store,
    components: {
        Application
    }
});

