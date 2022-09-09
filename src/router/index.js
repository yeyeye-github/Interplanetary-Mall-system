import VueRouter from 'vue-router'
import home from '../pages/home'


const router = new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:home
        }
    ]
})

export default router