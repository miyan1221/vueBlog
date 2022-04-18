import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlodEdit.vue'
import BlogDetail from '../views/BlodDetail.vue'

Vue.use(VueRouter)

const routes = [       //配置路由规则
  {
    path: '/',  //斜杠就是主页，此处也可使用重定向
    name: 'index',
    redirect: { name: 'Blogs' }
  },
  {
    path: '/blog',  //斜杠就是主页，此处也可使用重定向
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/add',
    name: 'BlogEdit',
    component: BlogEdit
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',   //冒号就是动态传参，可以从后端接收到
    name: 'BlogEdit',
    component: BlogEdit
  }

]

const router = new VueRouter({   //创建对象
  routes
})

export default router
