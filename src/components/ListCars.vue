<template>
    <div class="bg-list-cars list-cars text-right">
      <div v-if="!loaded" class="flex flex-wrap mt-2">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard class="sm:block hidden"/>  
      </div>
      <div class="flex flex-wrap mt-2">
        <p class="text-white text-2xl p-4" v-if="getData.length==0">
          Car not found
        </p>
        <Card v-for="car in getData" :key="car.id">
          <template v-slot:car-name>
            <router-link :to="{name:'CarPage', params: {id:car.id}}">
              {{car.name}}
            </router-link>
          </template>
          <template v-slot:car-image>
            <router-link :to="{name:'CarPage', params: {id:car.id}}">
              <img :src="`https://gtabase.com/${car.thumbnail}`" :alt="car.name" />
            </router-link>
          </template>
          <template v-slot:manufacturer-logo>
            <img :src="`https://gtabase.com/images/gta-5/manufacturers/${car.attr.ct2.value[0]}.png`" />
          </template>
          <template v-slot:car-price>
            ${{car.attr.ct13.formatted_value}}
          </template>
        </Card>
      </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import Card from './Card.vue';
import SkeletonCard from './SkeletonCard.vue';

export default {
  components: { Card, SkeletonCard },
  name: 'ListCars',
  props: ['getData'],
  methods: {
    orderByPrice: function () {
      this.orderCarsByPrice(!this.orderDirection)
    },
    ...mapActions([
      'orderCarsByPrice'
    ])
  },
  computed: {
    ...mapState([
      'orderDirection',
      'loaded'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
