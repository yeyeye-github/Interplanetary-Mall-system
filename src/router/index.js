import VueRouter from 'vue-router'
import home from '../pages/home'
import register from '../pages/register'


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
            meta: { isRegister: false }
        },
        {
            path:'/register',
            name:'register',
            component:register,
            meta: { isRegister: true }
        }
    ]
})

export default router