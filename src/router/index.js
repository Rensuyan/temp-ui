import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},

{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},

{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    name: '概览',
    component: () => import('@/views/dashboard/index'),
    meta: {
      title: '概览',
      icon: 'el-icon-monitor'
    }
  }]
},
{
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  name: '页面',
  meta: {
    title: '页面',
    icon: 'el-icon-tickets'
  },
  children: [{
    path: 'table',
    name: 'table',
    component: () => import('@/views/example/table'),
    meta: {
      title: '搜索分页表格',
      icon: ''
    }
  },
  {
    path: 'form',
    name: 'form',
    component: () => import('@/views/example/form'),
    meta: {
      title: '表单',
      icon: ''
    }
  },
  {
    path: 'panels',
    name: 'panels',
    component: () => import('@/views/example/panels'),
    meta: {
      title: '卡片面板',
      icon: ''
    }
  },
  {
    path: 'list',
    name: 'list',
    component: () => import('@/views/example/list'),
    meta: {
      title: '列表',
      icon: ''
    }
  },
  {
    path: 'tree',
    name: 'tree',
    component: () => import('@/views/example/tree'),
    meta: {
      title: '树',
      icon: ''
    }
  }
  ]
},
{
  path: '/charts',
  component: Layout,
  children: [{
    path: 'charts',
    name: 'charts',
    component: () => import('@/views/charts/index'),
    meta: {
    title: '图表',
    icon: 'el-icon-pie-chart'
  }
  }]
},
{
  path: '/map',
  component: Layout,
  name: 'map',
  meta: {
    title: '地图',
    icon: 'el-icon-map-location'
  },
  children: [{
    path: 'bmap',
    name: 'bmap',
    component: () => import('@/views/map/bmap'),
    meta: {
      title: '百度地图',
      icon: ''
    }
  },
  {
    path: 'amap',
    name: 'amap',
    component: () => import('@/views/map/amap'),
    meta: {
      title: '高德地图',
      icon: ''
    }
  }
  ]
},
// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
