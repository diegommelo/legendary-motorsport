<template>
  <span href="#" :class="[classes, bgColor, borderColor]"></span>
</template>

<script>
export default {
  name:'Color',
  props: ['bgColor','borderColor'],
  data() {
    return {
      classes:'inline-block rounded-full border-4 w-10 h-10 m-2 text-xs font-bold'
    }
  }
}
</script>

<style>

</style>