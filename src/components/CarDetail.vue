<template>
  <div class="text-white">
    <div id="car-detail-wrapper" class="mx-auto bg-list-cars p-4 border-2 border-red-700 sm:w-7/12 w-10/12">
      <div class="flex flex-row justify-between mx-auto sm:text-2xl text-base">
        <div class="w-20 mt-2">
          <slot name="manufacturer-logo"></slot>
        </div>
        <div class="text-left w-10/12 pl-4 flex self-center">
          <slot name="car-name"></slot>
        </div>
        <div class="pt-4">
          $<slot name="car-price"></slot>
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-8 sm:text-base mx-auto mt-4 text-sm">
        <div class="col-span-3 p-2 sm:mt-6">
          <p>
            <slot name="car-description"></slot>
          </p>
        </div>
        <div class="col-span-5 p-2 sm:ml-2">
          <slot name="car-photos">sadfsdf</slot>
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-4 mt-6">
        <div class="col-span-2">
          <p class="mb-4 text-xl uppercase">Colors available</p>
          <div class="flex flex-row flex-wrap">
            <slot name="car-colors"></slot>
          </div>
        </div>
        <div class="col-span-2">
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