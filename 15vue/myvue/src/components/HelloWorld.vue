<template>
  <div>
    <h1>{{ name }}</h1>
    <button ref="btn" @click="show">点我获取信息</button>
  </div>
</template>

<script>

export default {
  name: "Hello",
  data() {
    return {
      name: "你好啊",
    };
  },
  methods: {
    show() {
      console.log(this);
      console.log(this.$refs);
    },
  },
};
</script>

<style>
h1{
  color: azure;
  background-color: blue;
}
</style>