import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";
// import './assets/main.css'
const app = createApp(App)
// app.use(Vuex)
app.use(router)
app.mount('#app')

let store=new Vuex.Store({
       state:{
           userName:"",
       },
       mutations:{
           setUserName(state,username){
               state.userName=username;
           }
       }
})
