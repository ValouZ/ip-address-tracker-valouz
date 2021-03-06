export { default as Adblock } from '../..\\components\\Adblock.vue'
export { default as AddressCard } from '../..\\components\\AddressCard.vue'
export { default as AddressInput } from '../..\\components\\AddressInput.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Map } from '../..\\components\\Map.vue'

export const LazyAdblock = import('../..\\components\\Adblock.vue' /* webpackChunkName: "components/adblock" */).then(c => c.default || c)
export const LazyAddressCard = import('../..\\components\\AddressCard.vue' /* webpackChunkName: "components/address-card" */).then(c => c.default || c)
export const LazyAddressInput = import('../..\\components\\AddressInput.vue' /* webpackChunkName: "components/address-input" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyMap = import('../..\\components\\Map.vue' /* webpackChunkName: "components/map" */).then(c => c.default || c)
