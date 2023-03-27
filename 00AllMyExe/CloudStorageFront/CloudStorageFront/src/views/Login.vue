<template>
   <div id="mainPanel">
     <div class="form-control">
       <label class="form-label ">登录</label>
         <div class="input-group mb-3">
           <span class="input-group-text">账号</span>
         <input type="text" class="form-control" :value="username" @change="(event)=>username=event.target.value" placeholder="请输入账号">
         </div>
         <div class="input-group mb-3">
           <span class="input-group-text">密码</span>
         <input type="password" class="form-control" :value="password" @change="(event)=>password=event.target.value" placeholder="请输入密码">
         </div>
         <div class="btn-group mb-3">
         <button type="submit" class="btn btn-primary align-middle"  @click="loginEvent">登录</button>
         </div>
     </div>
   </div>
</template>
<script>
// import alert from "../components/customAlert.vue"

export default {
  name: "Login",
  props:{
    username:String,
    password:String,
  },
  methods:{
    loginEvent:function(){
      if(this.username==undefined||this.password==undefined){
        alert("please input your username and passowrd");
        return;
      }
      document.cookie="isLogin="+this.$props.username;
      alert("登录成功");
      this.$root.$data.userName=this.$props.username;
      this.$router.push("/Home");
    }
  }
}
</script>

<style scoped>
 #mainPanel{
  position:absolute;
  top: 100px;
  right:250px;
}
</style>