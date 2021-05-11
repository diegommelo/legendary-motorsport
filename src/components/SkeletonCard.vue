<template>
  <div class="md:w-6/12 lg:w-4/12 md:p-4 md:text-base w-6/12 p-2 text-sm animate-pulse">
    <div class="border-2 border-gray-800 shadow-md">
      <div class="bg-gray-400 w-full sm:h-40 h-28 opacity-30"></div>
        <div class="card-footer bg-black flex sm:flex-nowrap flex-wrap items-center">
          <div class="w-full h-8 lg:max-w-lg flex justify-center sm:justify-start sm:ml-4 items-center">
            <div class="h-4 bg-gray-200 rounded w-8/12"></div>
          </div>
          <div class="sm:h-8 h-6 w-full flex justify-center sm:justify-end sm:pr-4 items-center md:w-6/12 bg-gradient-to-b from-red-700 via-red-800 to-red-900">
            <div class="h-4 bg-gray-200 rounded w-5/12 sm:w-8/12 "></div>
          </div>
        </div>    
    </div>
  </div>
</template>

<script>
export default {
  name:'SkeletonCard'
}
</script>

<style>

</style>