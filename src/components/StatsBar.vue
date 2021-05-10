<template>
  <div>
    <span class="uppercase">{{stats}}</span>
    <div class="stats-bar-background">
      <div class="stats-bar-value" :style="{width:`${value}%`}"></div>
      <div class="stats-bar-separators">
        <div class="stats-bar-separator"></div>
        <div class="stats-bar-separator"></div>
        <div class="stats-bar-separator"></div>
        <div class="stats-bar-separator"></div>
        <div class="stats-bar-separator"></div>
      </div>
    </div>  
  </div>  
</template>

<script>
export default {
  name:'StatsBar',
  props:['stats','value']
}
</script>

<style scoped>
  .stats-bar-background {
    position:relative;
    width:100%;
    height: 12px;
    background-color: rgba(255,255,255,0.3);
  }
  .stats-bar-value {
    position:absolute;
    top:0;
    left:0;
    max-width: 100%;
    height: 100%;
    background-color:#fff;
    display: block;
    width:0;
  }
  .stats-bar-separators {
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background:transparent;
    overflow:hidden;
  }
  .stats-bar-separator {
    width:20%;
    height: 100%;
    float:left;
    border-right: 3px solid #333;
    box-sizing: border-box;
  }
</style>