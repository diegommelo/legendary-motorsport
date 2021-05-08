<template>
  <div>
    <!-- {{getCarDetails}} -->
    <CarDetail v-if="loaded">
      <template v-slot:car-name>{{getCarDetails[0].name}}</template>
      <template v-slot:car-price>{{getCarDetails[0].attr.ct13.formatted_value}}</template>
      <template v-slot:manufacturer-logo>
          <img :src="`https://gtabase.com/images/gta-5/manufacturers/${getCarDetails[0].attr.ct2.value[0]}.png`" class="w-10 sm:w-20" />
      </template>
    </CarDetail>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CarDetail from '../components/CarDetail.vue'
export default {
  components: { CarDetail },
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
      console.log('ainda não carregou o bagulho e agora')
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

<style>

</style>