<template>
  <div class="adblock">
    <div class="remove">
      <img src="@/assets/images/svg/block.svg" alt="You can't go further" />
      <h3>Please disable Adblock if you want to use our IP Address Tracker</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.adblock {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background: rgba($color: #000, $alpha: 0.7);
}

.remove {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 350px;
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  @extend %shadow;

  @include desktop{
    height: 450px;
  }

  img {
    width: 50%;
    max-width: 200px;
    @include desktop{
      max-width: 300px;
    }
  }

  h3 {
    font-size: 18px;
    color: #a01111;
    @include desktop{
      font-size: 25px;
    }
  }
}
</style>
