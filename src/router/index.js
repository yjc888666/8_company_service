import {createRouter,createWebHistory} from 'vue-router'
// import Login from '../view/login.vue';
const routes=[
  {
    path:'/',
    name:'Login',
    component:()=>import('../view/login.vue')
  },
  // {
  //   path:'/',
  //   name:'Login',
  //   component:()=>import('../view/login2.vue')
  // },
  {
    path:'/home',
    name:'home',
    component:()=>import('../components/Home.vue'),
    children:[
      {
        path:'/homePage',
        name:'homePage',
        component:()=>import('../view/HomePage.vue')
      },
      {
        path:'/goods',
        name:'goods',
        component:()=>import('../view/GoodsManage.vue')
      },
      {
        path:'/seller',
        name:'seller',
        component:()=>import('../view/SellerManage.vue')
      },
      {
        path:'/goodsPromotion',
        name:'goodsPromotion',
        component:()=>import('../view/GoodsPromotion.vue')
      },
      {
        path:'/admanage',
        name:'admanage',
        component:()=>import('../view/AdManage.vue')
      },
      {
        path:'/invitation',
        name:'invitation',
        component:()=>import('../view/InvitationManage.vue')
      },
      {
        path:'/complain',
        name:'complain',
        component:()=>import('../view/ComplainManage.vue'),
        children:
          [
            {path:'/',redirect:'/application'},
            {
              path:'/application',
              name:'application',
              component:()=>import('../components/complain/ComplainApplication.vue')
           },
           {
            path:'/details',
            name:'details',
            component:()=>import('../components/complain/ComplainDetails.vue')
         },
          ]
      }
     
    ],
   
  },


]
const router=createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})
export {
  router
} 