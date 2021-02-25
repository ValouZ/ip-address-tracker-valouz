import Vue from 'vue'

const components = {
  AddressCard: () => import('../..\\components\\AddressCard.vue' /* webpackChunkName: "components/address-card" */).then(c => c.default || c),
  AddressInput: () => import('../..\\components\\AddressInput.vue' /* webpackChunkName: "components/address-input" */).then(c => c.default || c),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Map: () => import('../..\\components\\Map.vue' /* webpackChunkName: "components/map" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
