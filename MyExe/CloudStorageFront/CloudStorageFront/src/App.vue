<script>
export default {
  name:"app",
  data() {
    return {
      userName:"",
    }

  }
}
</script>

<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<style scoped>
#app{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  border: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
}
</style>
