import Vue from 'vue'

export default {
  'CHANGE_PRODUCT_ADD_ONE' (state, payload) {
    state.products.push(payload)
  },
  'CHANGE_PRODUCT_CLEAR' (state, payload) {
    state.products = []
  },
  'CHANGE_PRODUCT_EDIT_ONE' (state, payload) {
    const index = payload.index
    const product = payload.product

    Vue.set(state.products, index, product)
  },
  'CHANGE_PRODUCT_DELETE_ONE' (state, payload) {
    const index = payload.index
    state.products.splice(index, 1)
  }
}
