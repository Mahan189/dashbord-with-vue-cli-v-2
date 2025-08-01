
import { createRouter, createWebHistory } from 'vue-router';
import SetingComp from '../components/SetingComp.vue'
import TemplatSeting from '../components/TemplatSeting.vue'
import HomeM  from '@/HomeM.vue'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '@/components/SignupPage.vue';



   const routes = [
    {path: '/',  component: HomeM},
    {path: '/login',  component: LoginPage},
    {path: '/signup',  component: SignupPage},


  {
    path: '/SetingComp',  name: 'TemplatSeting',  component: TemplatSeting,children: [
        {
            path: '/setiing',  name: 'SetingCom',  component: SetingComp
        }
    ]
  },
   

]



const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;
