import VueRouter from 'vue-router'
import home from '../pages/home'
import register from '../pages/register'
import login from '../pages/login'
import search from '../pages/search'
import detail from '../pages/detail'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:home,
            meta: { isRegister: false, islogin:false }
        },
        {
            path:'/register',
            name:'register',
            component:register,
            meta: { isRegister: true },
        },
        {
            path:'/login',
            name:'login',
            component:login,
            meta: { islogin: true },
        },
        {
            path:'/search',
            name:'search',
            component:search,
        },
        {
            path:'/detail',
            name:'detail',
            component:detail,
        }
    ]
})

export default router