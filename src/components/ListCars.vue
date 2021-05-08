<template>
  <div>
    <div class="flex flex-wrap place-items-stretch justify-around px-2 sm:w-8/12 w-11/12 mx-auto bg-list-cars">
      <Card v-for="car in getData" :key="car.id">
        <template v-slot:car-name>
          {{car.name}}
        </template>
        <template v-slot:car-image>
          <img :src="`https://gtabase.com/${car.thumbnail}`" :alt="car.name" />
        </template>
        <template v-slot:manufacturer-logo>
          <img :src="`https://gtabase.com/images/gta-5/manufacturers/${car.attr.ct2.value[0]}.png`" />
        </template>
        <template v-slot:car-price>
          $ {{car.attr.ct13.formatted_value}}
        </template>
      </Card>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import Card from './Card.vue';

export default {
  components: { Card },
  name: 'ListCars',
  props: {
    
  },
  computed: {
    ...mapGetters([
      'getData'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-list-cars{
  background-color:#220101;
}
</style>
