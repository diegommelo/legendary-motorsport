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
    <div class="footer p-6 sm:text-base text-xs">
      <div class=" flex flex-wrap justify-between sm:w-8/12 mx-auto">
        <div class="text-white">
          <p class="sm:text-lg text-base pb-2">Our Company</p>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Fraud Awareness</a></li>
            <li><a href="https://www.rockstargames.com/V/" target="_blank">Visit Los Santos</a></li>
          </ul>
          <p class="pt-2">Designed by <a href="https://twitter.com/dieguitoo">@dieguitoo</a></p>
        </div>
        <div class="text-white">
          <p class="sm:text-lg text-base pb-2">Manufacturers</p>
          <div class="flex justify-between">
            <ul class="text-white mr-2">
              <li>Enus</li>
              <li>Dewbauchee</li>
              <li>Nagasaki</li>
              <li>Shitzu</li>
              <li>Principe</li>
              <li>Dinka</li>
              <li>Vapid</li>
              <li>Imponte</li>
              <li>Albany</li>
              <li>Coil</li>
            </ul>
            <ul class="text-white ml-4">
              <li>Benefactor</li>
              <li>Bravado</li>
              <li>Lampadati</li>
              <li>Hijak</li>
              <li>Pegassi</li>
              <li>Grotti</li>
              <li>Truffade</li>
              <li>Pfister</li>
              <li>Progen</li>
              <li>Ocelot</li>
            </ul>
          </div>            
        </div>
        <div class="text-white">
          <p class="sm:text-lg text-base pb-2">Our Partners</p>
          <ul>
            <li><a href="#">Southern San Andreas Super Autos</a></li>
            <li><a href="#">Elitás Travel</a></li>
            <li><a href="#">DockTease</a></li>
          </ul>
        </div>        
      </div>
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

