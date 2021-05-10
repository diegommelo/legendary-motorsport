<template>
  <div>
    <!-- {{getCarDetails}} -->
    <CarDetail v-if="loaded">
      <template v-slot:car-name>{{getCarDetails[0].name}}</template>
      <template v-slot:car-price>{{getCarDetails[0].attr.ct13.formatted_value}}</template>
      <template v-slot:manufacturer-logo>
          <img :src="`https://gtabase.com/images/gta-5/manufacturers/${getCarDetails[0].attr.ct2.value[0]}.png`" class="w-10 sm:w-20" />
      </template>
      <template v-slot:car-description>
        {{getCarDetails[0].description}}
      </template>
      <template v-slot:car-photos>
        <img :src="`https://gtabase.com/${getCarDetails[0].thumbnail}`" :alt="`${getCarDetails[0].name}`" />
      </template>
      <template v-slot:car-colors>
        <span href="#" class="inline-block rounded-full bg-white border-4 border-white w-10 h-10 m-2 text-xs font-bold"></span>
        <span href="#" class="inline-block rounded-full bg-black border-4 border-black w-10 h-10 m-2 text-xs font-bold"></span>
        <span href="#" class="inline-block rounded-full bg-gray-400 border-4 border-gray-400 w-10 h-10 m-2 text-xs font-bold"></span>
        <span href="#" class="inline-block rounded-full bg-purple-400 border-4 border-purple-400 w-10 h-10 m-2 text-xs font-bold"></span>        
        <span href="#" class="inline-block rounded-full bg-blue-700 border-4 border-blue-700 w-10 h-10 m-2 text-xs font-bold"></span>
        <span href="#" class="inline-block rounded-full bg-yellow-400 border-4 border-yellow-400 w-10 h-10 m-2 text-xs font-bold"></span>
        <span href="#" class="inline-block rounded-full bg-yellow-700 border-4 border-yellow-700 w-10 h-10 m-2 text-xs font-bold"></span>
        <span href="#" class="inline-block rounded-full bg-red-400 border-4 border-red-400 w-10 h-10 m-2 text-xs font-bold"></span>
      </template>
      <template v-slot:car-stats>
          <StatsBar stats="speed" :value="getCarDetails[0].attr.ct6.formatted_value" />
          <StatsBar stats="acceleration" :value="getCarDetails[0].attr.ct7.formatted_value" />
          <StatsBar stats="braking" :value="getCarDetails[0].attr.ct8.formatted_value" />
          <StatsBar stats="handling" :value="getCarDetails[0].attr.ct9.formatted_value" />
      </template>
    </CarDetail>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CarDetail from '../components/CarDetail.vue'
import StatsBar from '../components/StatsBar.vue'

export default {
  components: { CarDetail, StatsBar },
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
      'getCarDetails'
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