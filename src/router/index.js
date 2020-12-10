import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin'
import Login from '../components/Adminz/Login'
import Dashboard from '../components/Adminz/Dashboard/Dashhome'
import Dashmain from '../components/Adminz/Dashboard/Dashmain'
import CreateAdmin from '../components/Adminz/Dashboard/CreateAdmin'
import Quotes from '../components/Adminz/Dashboard/Quotes'
import Updateservices from '../components/Adminz/Dashboard/Updateservices'
import Manageservices from '../components/Adminz/Dashboard/Manageservices'
import AdminManagement from '../components/Adminz/Dashboard/AdminManagement'
import Settings from '../components/Adminz/Dashboard/Settings'
import Paystack from '../views/Paystack'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/user/Landing.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/user/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/user/Contact.vue')
  },
  {
    path: '/quote',
    name: 'Quote',
    component: () => import('../views/user/Quote.vue')
  },
  {
    path: '/road-work-single',
    name: 'RoadWorkSingle',
    component: () => import('../views/user/RoadWorkSingle.vue')
  },
  {
    path: '/road-work',
    name: 'RoadWork',
    component: () => import('../views/user/RoadWork.vue')
  },
  {
    path: '/roofing',
    name: 'Roofing',
    component: () => import('../views/user/Roofing.vue')
  },
  {
    path: '/alternative-power',
    name: 'AlternativePower',
    component: () => import('../views/user/AlternativePower.vue')
  },
  {
    path: '/building-construction',
    name: 'BuildingConstruction',
    component: () => import('../views/user/BuildingConstruction.vue')
  },
  {
    path: '/interior-furnishing',
    name: 'InteriorFurnishing',
    component: () => import('../views/user/InteriorFurnishing.vue')
  },
  {
    path: '/automobile-sales',
    name: 'AutomobileSales',
    component: () => import('../views/user/AutomobileSales.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/user/Checkout.vue')
  },
  {
    path: '/paystack',
    name: 'Paystack',
    component: Paystack
  },
  {
    path: '/admin',
    name: '',
    component: Admin,
    children: [
      {
        path: '',
        name: '',
        component: Login
      },
      {
        path: 'dashboard',
        name: '',
        component: Dashboard,

        beforeEnter: (to, from, next) => {
          // ...
          const admin = JSON.parse(localStorage.getItem('admin'))
          const timeOut = localStorage.getItem('timeOut')
          if ((admin && admin.token) && timeOut) next()
          else next('/admin')
        },
        children: [
          {
            path: '',
            name: '',
            component: Dashmain
          },
          {
            path: 'createadmin',
            name: 'CreateAdmin',
            component: CreateAdmin
          },
          {
            path: 'quotes',
            name: 'Quotes',
            component: Quotes
          },
          {
            path: 'updateservice',
            name: 'Updateservices',
            component: Updateservices
          },
          {
            path: 'manageservice',
            name: 'Manageservices',
            component: Manageservices
          },
          {
            path: 'adminmanage',
            name: 'adminmanage',
            component: AdminManagement
          },
          {
            path: 'settings',
            name: 'settings',
            component: Settings
          },
        ]

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
