import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLogin from '../views/UserLogin.vue'
import UserSignUp from '../views/UserSignUp.vue'
import UserAccount from '../views/User/UserAccount.vue'
import FundTransfer from '../views/User/FundTransfer.vue'
import UserAcountdetails from '../views/User/UserAcountdetails.vue'
import NotFound from '../components/NotFound.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/signup',
      name: 'UserSignUp',
      component: UserSignUp
    },
    {
      path: '/user/account',
      name: 'UserAccount',
      component: UserAccount
    },
    {
      path: '/user/send',
      name: 'FundTransfer',
      component: FundTransfer
    },
    {
      path: '/user/account/details',
      name: 'UserAcountdetails',
      component: UserAcountdetails
    },
    // {
    //   path: '*',
    //   name: 'not-found',
    //   component: NotFound
    // }
  
  ]
})

export default router
