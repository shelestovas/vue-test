import Login from './components/Auth/LoginComponent.vue';
import Dashboard from './components/Admin/DashboardComponent.vue';

export const routes = [
    {
        path: '/auth/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            requiresAuth: true
        }
    }
];