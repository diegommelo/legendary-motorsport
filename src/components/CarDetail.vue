<template>
  <div class="text-white">
    <div id="car-detail-wrapper" class="mx-auto bg-list-cars p-4 border-2 border-red-700 sm:w-6/12 w-10/12">
      <div class="flex flex-row justify-between mx-auto  sm:text-2xl text-base">
        <div class="w-20 mt-2">
          <slot name="manufacturer-logo"></slot>
        </div>
        <div class="text-left w-10/12 pl-4 pt-4">
          <slot name="car-name"></slot>
        </div>
        <div class="pt-4">
          $<slot name="car-price"></slot>
        </div>
      </div>
      <div class="grid grid-cols-2 mx-auto mt-4">
        <div class="">
          <slot name="car-description">asdfasdf</slot>
          <slot name="car-colors"></slot>
          <slot name="car-stats"></slot>
        </div>
        <div>
          <slot name="car-photos">sadfsdf</slot>
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