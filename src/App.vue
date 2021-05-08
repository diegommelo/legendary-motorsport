<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default{
  name:'App',
  created() {
    this.$store.dispatch('getAllData');
  }
}
</script>


<style>
#nav {
  text-align: center;
  padding:20px;
}
</style>

