<template>
  <div class="text-white">
    <div id="car-detail-wrapper" class="bg-list-cars p-4">
      <div class="flex flex-row justify-between mx-auto sm:text-3xl text-base">
        <div class="w-20 mt-2 sm:ml-2">
          <slot name="manufacturer-logo"></slot>
        </div>
        <div class="text-left w-10/12 sm:pl-4 flex self-center text-lg sm:text-2xl">
          <slot name="car-name"></slot>
        </div>
        <div class="sm:pt-6 sm:pr-2 pt-2 text-lg sm:text-2xl">
          $<slot name="car-price"></slot>
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-8 sm:text-base mx-auto mt-4 text-sm">
        <div class="col-span-3 p-2 sm:mt-6">
          <p>
            <slot name="car-description"></slot>
          </p>
        </div>
        <div class="col-span-5 p-2 sm:ml-2 shadow">
          <slot name="car-photos"></slot>
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-4 mt-6">
        <div class="col-span-2">
          <p class="mb-4 text-xl uppercase pl-2">Colors available</p>
          <div class="flex flex-row flex-wrap w-8/12 sm:w-8/12 mb-4 sm:justify-between">
            <slot name="car-colors"></slot>
          </div>
        </div>
        <div class="col-span-2 space-y-2 mr-2">
          <p class="text-xl uppercase mb-4">Technical Specs</p>
          <slot name="car-stats"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CarDetail"
}
</script>

<style>

</style>