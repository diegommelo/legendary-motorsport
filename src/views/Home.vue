<template>
  <div class="home">
    <ListCars />
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
    
  }
}
</script>
