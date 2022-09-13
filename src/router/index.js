import VueRouter from 'vue-router'
import home from '../pages/home'
import register from '../pages/register'
import login from '../pages/login'
import search from '../pages/search'


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
        }
    ]
})

export default router