import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    }
  ]
})

router.beforeEach(function(to,from,next){
  let cookie=getCookie("isLogin");
  if(to.path==="/Login"){
     if(cookie){
       return next("/Home");
     }else{
       return next();
     }
  }else{
      if (cookie){
         return next();
      }else{
        return next("/Login");
      }
  }
})

function getCookie(name){
   let cookieList=document.cookie.split(";");
   for(let i=0;i<cookieList.length;i++){
    let keyValueList=cookieList[i].split("=");
    let key=keyValueList[0];
    let value=keyValueList[1];
     if (key==name){
       return value;
     }
   }
   return "";
}
export default router