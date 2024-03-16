import {createWebHistory, createRouter} from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';

const routes = [
    {
        path: "/home",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage
    },
    {
        path: "/",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router