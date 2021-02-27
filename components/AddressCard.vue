<template>
  <div class="card" :class="searchedAddress != '' ? 'display' : 'empty'">
    <template v-if="searchedAddress != ''">
      <div class="address loaded">
        <h2>ip address</h2>
        <p>{{ searchedAddress.ip }}</p>
      </div>

      <div class="location loaded dash ">
        <h2>location</h2>
        <p>
          {{ searchedAddress.location.city }},
          {{ searchedAddress.location.country }}
        </p>
      </div>

      <div class="timezone loaded dash">
        <h2>timezone</h2>
        <p>UTC {{ searchedAddress.location.timezone }}</p>
      </div>

      <div class="isp loaded dash">
        <h2>isp</h2>
        <p>{{ searchedAddress.isp }}</p>
      </div>
    </template>
    <template v-else>
      <div>
        <p>Loading...</p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.fetch();
  },

  computed: {
    ...mapState(["searchedAddress"])
  },

  methods: {
    ...mapActions(["fetch"])
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 327px;
  height: 294px;
  border-radius: 15px;
  background: white;
  padding: 26px 0;
  @extend %shadow;

  @include desktop {
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;
    width: 1110px;
    height: 161px;
    padding: 0 32px;
    padding-top: 37px;

    &.empty {
      justify-content: center;
      align-items: center;
      padding-top: 0px;
    }
  }
  .loaded {
    text-align: center;
    @include desktop {
      text-align: left;
      width: 213px;
    }
  }
}

.dash {
  position: relative;
  @include desktop {
    &::before {
      content: "";
      position: absolute;
      left: -32px;
      top: 6px;
      height: 75px;
      width: 1px;
      background: rgba($color: #000000, $alpha: 0.15);
    }
  }
}

h2 {
  text-transform: uppercase;
  font-size: 10px;
  color: var(--dark-gray);
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 1.45833px;
  margin-bottom: 7px;

  @include desktop {
    font-size: 12px;
    margin-bottom: 13px;
  }
}

p {
  font-size: 20px;
  color: var(--very-dark-gray);
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.178571px;

  @include desktop {
    font-size: 26px;
  }
}
</style>
