<template>
<div>
<h1>1213232</h1>
  <el-button @click="login">111</el-button>
</div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$store.state.username = 'xiajiayu';
      // eslint-disable-next-line
      alert(this.$store.state.username);
    },
  },
  data() {
    // eslint-disable-next-line
    alert(this.$store.state.username);
  },
};
</script>
