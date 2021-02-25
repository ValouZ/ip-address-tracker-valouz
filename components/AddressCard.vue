<template>
  <div class="card" @onload="addAddress(ipAddress[0])">
    <!-- <template v-if="searchedAddress != ''"> -->
    <div class="adress">
      <h2>ip address</h2>
      <p>{{ ipAddress.ip }}</p>
    </div>

    <div class="location">
      <h2>location</h2>
      <p>{{ ipAddress.location.city }}, {{ ipAddress.location.country }}</p>
    </div>

    <div class="timezone">
      <h2>timezone</h2>
      <p>UTC {{ ipAddress.location.timezone }}</p>
    </div>

    <div class="isp">
      <h2>isp</h2>
      <p>{{ ipAddress.isp }}</p>
    </div>
    <!-- </template> -->
    <!-- <template v-else>
      <div class="empty">
        Waiting for a research...
      </div>
    </template> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  //  https://geo.ipify.org/api/v1
  mounted() {
    console.log("Component has been created!");
  },
  data() {
    return {
      ipAddress: []
    };
  },
  watch: {
    "$route.query": "$fetch"
  }, // censé écouter les changements de requetes pour refaire le fetch quand il y a un changement
  async fetch() {
    this.ipAddress = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_DhEPRdhWsMzrv1mtqt3Nmk6oIY0kM&ipAddress=${this.searchedAddress}` // searchedAddress est le problème
    ).then(res => res.json());
  },
  computed: {
    ...mapState(["searchedAddress"])
  },
  methods: {
    ...mapMutations(["addAddress"])
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
  div {
    text-align: center;
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
}

p {
  font-size: 20px;
  color: var(--very-dark-gray);
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.178571px;
}
</style>
