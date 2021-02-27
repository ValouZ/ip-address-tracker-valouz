<template>
  <div class="map">
    <client-only>
        <l-map :zoom="14" :center="[searchedAddress.location.lat, searchedAddress.location.lng]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[searchedAddress.location.lat, searchedAddress.location.lng]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  //@/assets/images/svg/icon-location.svg
  computed: {
    ...mapState(["searchedAddress"])
  }
};
</script>

<style lang="scss" scoped>
.map {
  height: 100%;
  width: 100%;
}
</style>
