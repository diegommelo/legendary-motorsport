<template>
  <div class="md:w-6/12 lg:w-4/12 md:p-4 md:text-base w-6/12 p-2 text-sm">
    <div class="card-wrapper border-2 border-gray-800 shadow-md">
      <div class="card-photo">
        <div class="relative">
          <div>
            <slot name="car-image"></slot>
          </div>
          <div class="md:w-10 md:h-10 w-5 h-5 absolute left-0 top-0 ml-2 mt-2 shadow-md">
            <slot name="manufacturer-logo"></slot>
          </div>
        </div>
      </div>
      <div class="card-footer bg-black flex sm:flex-nowrap flex-wrap sm:justify-between">
        <div class="w-full lg:max-w-lg">
          <p class="sm:text-left text-center text-white content-center sm:p-2 p-2 truncate">
            <slot name="car-name"></slot>
          </p>
        </div>
        <div class="w-full md:w-6/12 lg:w-5/12">
          <p class="p1 sm:p-2 sm:text-right text-center text-gray-200 bg-gradient-to-b from-red-700 via-red-800 to-red-900 truncate">
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

<style>

</style>