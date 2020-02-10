export default {
  changeProductAddOne (context, payload) {
    context.commit('CHANGE_PRODUCT_ADD_ONE', payload)
  },
  changeProductClear (context, payload) {
    context.commit('CHANGE_PRODUCT_CLEAR', payload)
  },
  changeProductEditOne (context, payload) {
    context.commit('CHANGE_PRODUCT_EDIT_ONE', payload)
  },
  changeProductDeleteOne (context, payload) {
    context.commit('CHANGE_PRODUCT_DELETE_ONE', payload)
  }
}
