<template>
<topPersonalInformation :login-name="this.$root.$data.userName"/>
</template>

<script >
import topPersonalInformation from "../components/topPersonalInformation.vue";
export default {
  name: "Home",
  components: {topPersonalInformation},
  data(){
    return {
      globalUserName: this.$root.$data.userName
    }
  }
}
</script>

<style scoped>

</style>