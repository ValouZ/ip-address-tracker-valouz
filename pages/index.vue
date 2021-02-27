<template>
  <div class="container">
    <section class="top-section">
      <Header class="title" />
      <AddressInput />
      <AddressCard class="card" />
    </section>
    <section v-if="searchedAddress.location" class="map">
      <Map />
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["searchedAddress"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}

.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: center center / cover url("@/assets/images/png/pattern-bg.png");
  height: var(--top-section-height);
  width: 100%;
  padding-top: 26px;

  @include desktop{
    padding-top: 33px;
  }
}
.title {
  margin-bottom: 29px;
}
.card {
  position: absolute;
  top: calc(100% - 133px);
  z-index: 1;

  @include desktop{
    top: calc(100% - 80px);
  }
}
.map {
  position: relative;
  z-index: 0;
  height: calc(100vh - var(--top-section-height));
  width: 100%;
}
</style>
