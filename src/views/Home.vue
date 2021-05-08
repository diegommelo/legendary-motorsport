<template>
  <div class="home">
    <ListCars msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCars from '@/components/ListCars.vue'

export default {
  name: 'Home',
  components: {
    ListCars
  },
  methods: {
    
  },
  mounted () {
    this.$store.dispatch('getAllData');
  }
}
</script>
