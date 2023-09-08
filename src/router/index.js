import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/main/HomePage/HomeView.vue'
import LayoutView from '../views/LayoutView'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LayoutView",
    icon:"el-icon-sunset",
    component: LayoutView,
    children: [
      {
        path: "",
        name: "Home",
        icon: "el-icon-house",
        component: HomeView,
        meta: {
          title:'主页',
          isLoginView: true
        }
      },
      {
        path: "petinfo",
        name: "petinfo",
        icon: "el-icon-moon",
        component: () => import('../views/main/Pet/PetInfo/index'),
        meta: {
          title:'待领养宠物信息',
          isLoginView: true
        }
      },
      {
        path: "consdetail",
        name: "consdetail",
        icon: "el-icon-notebook-1",
        component: () => import('../views/main/Pet/PetConsDetail/index'),
        meta: {
          title:'诊室信息',
          isLoginView: true
        }
      },
      {
        path: "pettreatdetail",
        name: "pettreatdetail",
        icon: "el-icon-magic-stick",
        component: () => import('../views/main/Pet/PetTreatDetail/index'),
        meta: {
          title:'宠物治疗信息',
          isLoginView: true
        }
      },
      {
        path: "petregister",
        name: "petregister",
        icon: "el-icon-s-order",
        component: () => import('../views/main/Pet/PetRegister/index'),
        meta: {
          title:'预约挂号',
          isLoginView: true
        }
      },
      {
        path: "adpetregister",
        name: "adpetregister",
        icon: "el-icon-document-checked",
        component: () => import('../views/main/Pet/AdPetRegister/index'),
        meta: {
          title:'预约挂号管理',
          isLoginView: true
        }
      },
      {
        path: "petadopt",
        name: "petadopt",
        icon: "el-icon-umbrella",
        component: () => import('../views/main/Pet/PetAdopt/index'),
        meta: {
          title:'宠物领养',
          isLoginView: true
        }
      },
      {
        path: "pettips",
        name: "pettips",
        icon: "el-icon-collection",
        component: () => import('../views/main/Pet/PetTips/index'),
        meta: {
          title:'宠物小tips',
          isLoginView: true
        }
      },
      {
        path: "strayanim",
        name: "strayanim",
        icon: "el-icon-sunny",
        component: () => import('../views/main/Pet/StrayAnim/index'),
        meta: {
          title:'流浪宠物救助',
          isLoginView: true
        }
      },
      {
        path: "docinfo",
        name: "docinfo",
        component: () => import('../views/main/DocInfo'),
        meta: {
          title:'医生信息',
          isLoginView: true
        }
      },
      {
        path: "docconsdetail",
        name: "docconsdetail",
        icon: "el-icon-postcard",
        component: () => import('../views/main/Doc/DocConsDetail/index'),
        meta: {
          title:'医生诊室信息',
          isLoginView: true
        }
      },
      {
        path: "docperinfo",
        name: "docperinfo",
        icon: "el-icon-user-solid",
        component: () => import('../views/main/Doc/DocPerInfo/index'),
        meta: {
          title:'医生个人信息',
          isLoginView: true
        }
      },
      {
        path: "docworkinfo",
        name: "docworkinfo",
        component: () => import('../views/main/Doc/DocWorkInfo/index'),
        meta: {
          title:'医生排班信息',
          isLoginView: true
        }
      },
      {
        path: "userinfo",
        name: "userinfo",
        icon: "el-icon-user",
        component: () => import('../views/main/UserInfo'),
        meta: {
          title:'用户信息',
          isLoginView: true
        }
      },
      {
        path: "perinfo",
        name: "pereinfo",
        icon: "el-icon-coffee-cup",
        component: () => import('../views/main/UserInfo/PerInfo/index'),
        meta: {
          title:'个人中心',
          isLoginView: true
        }
      },

    ]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
