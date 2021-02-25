export const state = () => ({
  searchedAddress: ""
});

export const mutations = {
  addAddress(state, address) {
    state.searchedAddress = address;
  }
};
