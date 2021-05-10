<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="header">
      <router-link to="/">
        <img src="./assets/logo.png" class="logo" />
      </router-link>
    </div>    
    <router-view/>
    <div class="footer">
      
    </div>
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

