<template>
  <div class="home">
    <input v-model="search" />
    <div class="sm:w-8/12 mx-auto sm:-mt-10 border-2 border-red-700">
      <ListCars :getData="getFilteredCars" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions, mapState} from 'vuex'
import ListCars from '@/components/ListCars.vue'

export default {
  name: 'Home',
  components: {
    ListCars
  },
  data: function () {
    return {
      search:''
    }
  },
  methods: {
    ...mapActions([
      'searchByName'
    ])
  },
  mounted(){
    this.search = this.carSearch;
  },
  watch: {
    search: function () {
     this.searchByName(this.search);
    },
  },
  computed: {
    ...mapState([
      'carSearch'
    ]),
    ...mapGetters([
      'getFilteredCars',
    ])
  }
}
</script>
