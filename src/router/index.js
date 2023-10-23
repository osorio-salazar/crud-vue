import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// crud routes
import CreateUser from '../components/CreateUser.vue'
import EditUser from '../components/EditUser.vue'
import ListUser from '../components/ListUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, // crud routes
  {
    path: '/create',
    name: 'create-user',
    component: CreateUser
  },
  {
    path: '/edit/:id',
    name: 'edit-user',
    component: EditUser
  },
  {
    path: '/list',
    name: 'list-user',
    component: ListUser
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
