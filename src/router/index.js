import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import DeviceManage from '../views/DeviceManage.vue'
import Login from '../views/Login.vue'
import AddDevices from '../views/AddDevices.vue'


const history=createWebHistory();
const router=createRouter({
  history,
  routes:[
    {
      path:'/',
      component:DashBoard
    },
    {
      path:'/dashboard',
      component:DashBoard
    },
    {
      path:'/devicemanage',
      component:DeviceManage
    },
    {
      path:'/add/devices',
      component:AddDevices
    },
    {
      path:'/login',
      component:Login
    }
  ]
});

export default router;