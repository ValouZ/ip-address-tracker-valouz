export const state = () => ({
  searchedAddress: []
});

export const mutations = {
  addAddress(state, address) {
    state.searchedAddress = address;
  },
};

export const actions = {
  async fetch(context, inputAddress = "") {
    let ipAddress = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_DhEPRdhWsMzrv1mtqt3Nmk6oIY0kM&ipAddress=${inputAddress}`
    ).then(res => res.json());
    context.commit('addAddress', ipAddress);
  }
};
