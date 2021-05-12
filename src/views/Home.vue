<template>
  <div class="home">
    <div class="sm:w-8/12 mx-auto sm:-mt-10 border-2 border-red-700">
      <ListCars :getData="getData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import ListCars from '@/components/ListCars.vue'

export default {
  name: 'Home',
  components: {
    ListCars
  },
  computed: {
    ...mapGetters([
      'getData'
    ])
  }
}
</script>
