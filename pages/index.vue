<template>
  <div class="container">
    <section class="top-section">
      <Header class="title" />
      <AddressInput />
      <AddressCard class="card" />
    </section>
    <section class="map">
      <Map />
    </section>
  </div>
</template>

<script>
export default {};
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
  height: 300px;
  width: 100%;
  padding-top: 26px;
}
.title {
  margin-bottom: 29px;
}
.card {
  position: absolute;
  top: calc(100% - 133px);
  z-index: 1;
}
.map {
  position: relative;
  z-index: 0;
  height: calc(100vh - 300px);
  width: 100%;
}
</style>
