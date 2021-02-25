<template>
  <div id="map-wrap" class="map">
    <client-only>
      <l-map :zoom="13" :center="[48.82104, 2.27718]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[48.82104, 2.27718]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  //@/assets/images/svg/icon-location.svg
};
</script>

<style lang="scss" scoped>
.map {
  height: 100%;
  width: 100%;
}
</style>
