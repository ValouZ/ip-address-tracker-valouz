<template>
  <div class="container-ip">
    <input
      class="input-ip"
      type="text"
      placeholder="Search for any IPv4 address or domain"
      v-model="inputAddress"
    />
    <button class="button-ip" @click="fetch(inputAddress)">
      <img src="@/assets/images/svg/icon-arrow.svg" alt="Valider l'adresse" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      inputAddress: ""
    };
  },
  methods: {
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
  @include desktop{
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
  &::placeholder{
    font-size: 12px;
    @include desktop{
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
  }
}
</style>
