<template>
  <div>
    <div class="sm:w-7/12 mx-auto border-2 border-red-700 sm:-mt-14">
      <CarDetail v-if="loaded">
        <template v-slot:car-name>{{getCarDetails[0].name}}</template>
        <template v-slot:car-price>{{getCarDetails[0].attr.ct13.formatted_value}}</template>
        <template v-slot:manufacturer-logo>
            <img :src="`https://gtabase.com/images/gta-5/manufacturers/${getCarDetails[0].attr.ct2.value[0]}.png`" class="w-10 sm:w-20" :alt="getCarDetails[0].attr.ct2.value" />
        </template>
        <template v-slot:car-description>
          {{getCarDetails[0].description}}
        </template>
        <template v-slot:car-photos>
          <img :src="`https://gtabase.com/${getCarDetails[0].thumbnail}`" :alt="`${getCarDetails[0].name}`" />
        </template>
        <template v-slot:car-colors>
          <Color bg-color="bg-white" border-color="border-white" />
          <Color bg-color="bg-gray-700" border-color="border-gray-700" />
          <Color bg-color="bg-purple-800" border-color="border-purple-800" />
          <Color bg-color="bg-blue-800" border-color="border-blue-800" />
          <Color bg-color="bg-black" border-color="border-black" />
          <Color bg-color="bg-yellow-400" border-color="border-yellow-400" />
          <Color bg-color="bg-yellow-700" border-color="border-yellow-700" />
          <Color bg-color="bg-red-800" border-color="border-red-800" />
        </template>
        <template v-slot:car-stats>
          <StatsBar stats="speed" :value="getCarDetails[0].attr.ct6.formatted_value" />
          <StatsBar stats="acceleration" :value="getCarDetails[0].attr.ct7.formatted_value" />
          <StatsBar stats="braking" :value="getCarDetails[0].attr.ct8.formatted_value" />
          <StatsBar stats="handling" :value="getCarDetails[0].attr.ct9.formatted_value" />
        </template>
      </CarDetail>
      <ListCars :getData="getCarsByManufacturer" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CarDetail from '../components/CarDetail.vue'
import StatsBar from '../components/StatsBar.vue'
import Color from '../components/Color.vue'
import ListCars from '../components/ListCars.vue'

export default {
  components: { CarDetail, StatsBar, Color, ListCars },
  name:"CarPage",
  data() {
    return {
      carId: null
    }
  },
  methods: {
    ...mapActions([
      'actionCarDetails'
    ])
  },
  computed: {
    ...mapState([
      'loaded'
    ]),
    ...mapGetters([
      'getCarDetails',
      'getCarsByManufacturer'
    ])
  },
  mounted() {
    this.carId = this.$route.params.id;
    if(this.loaded){
      this.actionCarDetails(this.carId)  
    } else {
      console.log('Erro ao carregar dados do veículo')
    }
  },
  watch: {
    $route(to) {
      this.carId = to.params.id;
      this.actionCarDetails(this.carId)
    },
    loaded: function() {
      this.actionCarDetails(this.carId)
    }
  }
}
</script>

<style scoped>

</style>