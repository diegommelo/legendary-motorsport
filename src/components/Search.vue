<template>
  <div class="bg-list-cars text-right search-component">
    <input v-model="search" type="search" placeholder="Search by car name" />
    <button
      @click="orderByPrice"
      class="bg-gradient-to-b from-red-700 via-red-800 to-red-900 rounded text-white p-2"
    >
      Order by price
      <span class="ml-4 text-bold" v-if="orderDirection === null"> ⬍</span>
      <span class="ml-4" v-else-if="orderDirection === true">🠹</span>
      <span class="ml-4" v-else>🠻</span>
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    orderByPrice: function() {
      this.orderCarsByPrice(!this.orderDirection);
    },
    ...mapActions(['searchByName', 'orderCarsByPrice']),
  },
  mounted() {
    this.search = this.carSearch;
  },
  watch: {
    search: function() {
      this.searchByName(this.search);
    },
  },
  computed: {
    ...mapState(['carSearch', 'orderDirection']),
  },
};
</script>

<style scoped>
@media screen and (min-width:640px) {
  .search-component input {
    width:350px;
  }
}
.search-component {
  display: flex;
  justify-content: space-between;
  padding:20px 15px 10px 15px;
}
.search-component input {
  border-radius: 10px;
  padding: 5px;
}
</style>
