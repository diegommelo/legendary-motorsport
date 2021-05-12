<template>
  <div class="md:w-4/12 md:p-3 md:text-base w-6/12 p-2 text-sm">
    <div class="border-2 border-gray-800 shadow-md">
      <div class="card-photo">
        <div class="relative">
          <div class="car-image">
            <slot name="car-image"></slot>
          </div>
          <div class="md:w-10 md:h-10 w-5 h-5 absolute left-0 top-0 ml-2 mt-2 shadow-md">
            <slot name="manufacturer-logo"></slot>
          </div>
        </div>
      </div>
      <div class="card-footer bg-black flex sm:flex-nowrap flex-wrap sm:justify-between">
        <div class="car-name flex sm:justify-start justify-center items-center m-2 truncate">
          <p class="sm:text-left text-white ">
            <slot name="car-name"></slot>
          </p>
        </div>
        <div class="car-price sm:h-10 h-8 p-2 flex items-center justify-center bg-gradient-to-b from-red-700 via-red-800 to-red-900">
          <p class="sm:text-right text-gray-200 truncate">
            <slot name="car-price"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Card'
}
</script>

<style scoped>
  @media only screen and (max-width: 640px) {
    .car-price {
      width:100%;
    }
    .car-name {
      width: 100%;
    }
  }
  .car-image {
    min-height: 95px;
  }
 
</style>