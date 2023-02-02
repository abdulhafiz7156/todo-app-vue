import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register"
import Profile from "@/components/Profile/Profile";
import Todo from "@/components/Todo/Todo";
import Today from "@/components/Todo/Today/Today";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,

})

export default router
