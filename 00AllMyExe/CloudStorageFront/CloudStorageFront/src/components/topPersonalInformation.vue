
<script >
export default{
  name:"topPersonalInformation",
  props:{
    loginName: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <header class="p-3 text-bg-dark">
  <div class="container" >
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <div class="text-end">
    <button @click="" class="btn btn-warning">{{loginName}}</button>
      </div>
      </div>
  </div>
  </header>
</template>
