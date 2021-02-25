<template>
  <div class="container-ip">
    <input
      class="input-ip"
      type="text"
      placeholder="XXX.XXX.XXX.XXX"
      v-model="address"
    />
    <button class="button-ip" @click="addAddress(address)">
      <img src="@/assets/images/svg/icon-arrow.svg" alt="Valider l'adresse" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      address: ""
    };
  },
  methods: {
    ...mapMutations(["addAddress"])
  }
};
</script>

<style lang="scss" scoped>
.container-ip {
  display: flex;
  width: 327px;
  height: 58px;
}

.input-ip {
  width: calc(100% - 58px);
  height: 100%;
  border: none;
  border-radius: 15px 0 0 15px;
  padding-left: 24px;
  font-size: 18px;
  outline: none;
}

.button-ip {
  width: 58px;
  height: 100%;
  background: black;
  color: white;
  border: none;
  border-radius: 0 15px 15px 0;
  transition: 0.1s;
  &:hover {
    background: lighten($color: #000000, $amount: 20);
  }
}
</style>
