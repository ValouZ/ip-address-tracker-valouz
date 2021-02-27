<template>
  <div class="container-ip">
    <input
      class="input-ip"
      type="text"
      placeholder="Search for any IPv4 address or domain"
      v-model="inputAddress"
    />
    <button
      class="button-ip"
      :class="inputAddress.match(ipReg) ? 'correct' : 'wrong'"
      :disabled="inputAddress.match(ipReg) ? false : true"
      @click="
        () => {
          fetch(inputAddress);
          resetInput();
        }
      "
    >
      <img src="@/assets/images/svg/icon-arrow.svg" alt="Valider l'adresse" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      inputAddress: "",
      ipReg: /^(?!127\.0{1,3}\.0{1,3}\.0{0,2}1$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    };
  },
  methods: {
    resetInput() {
      this.inputAddress = "";
    },
    ...mapActions(["fetch"])
  }
};
</script>

<style lang="scss" scoped>
.container-ip {
  display: flex;
  width: 327px;
  height: 58px;
  @extend %shadow;
  border-radius: 15px;
  @include desktop {
    width: 555px;
  }
}

.input-ip {
  width: calc(100% - 58px);
  height: 100%;
  border: none;
  border-radius: 15px 0 0 15px;
  padding-left: 24px;
  font-size: 18px;
  outline: none;
  &::placeholder {
    font-size: 12px;
    @include desktop {
      font-size: 18px;
    }
  }
}

.button-ip {
  width: 58px;
  height: 100%;
  background: black;
  color: white;
  border: none;
  border-radius: 0 15px 15px 0;
  transition: 0.1s;
  outline: none;
  &:hover {
    background: lighten($color: #000000, $amount: 20);
    cursor: pointer;
  }
  &.wrong {
    opacity: 0.5;
    background: #610a0a;
    &:hover {
      background: #610a0a;
      cursor: initial;
    }
  }
}
</style>
