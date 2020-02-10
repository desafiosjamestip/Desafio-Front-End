<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal" ref="modal">
        <header class="modal-header">
          <slot name="header">
            <h2>
              Editing Product
            </h2>

            <button type="button" class="btn-close btn-right" @click="close" aria-label="Close modal">
              x
            </button>
          </slot>
        </header>

        <section class="modal-body">
          <form @submit.prevent="saveProduct">
          <div class="group1">
            <label for="">Category</label>
            <input type="text" v-model="category" id="category" placeholder="" disabled>

            <label for="">Name</label>
            <textarea type="text" v-model="name" id="name" placeholder="" maxlength="140" required></textarea>
          </div>

          <div class="group2">
            <label for="">Provider's Name</label>
            <input type="text" v-model="providerName" id="providerName" placeholder="" required>

            <label for="">Price</label>
            <input type="number" v-model="price" id="price" placeholder="" required>
          </div>

          <div class="modal-footer">
            <slot name="footer">
                <button type="submit" class="btn btn-green">Save</button>
            </slot>
          </div>
          </form>
        </section>

      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ModalProduct',
  props: {
    index: Number,
    product: {
      type: Object
    }
  },
  beforeCreate () {},
  created () {
    this.loadValues()
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      category: '',
      name: '',
      providerName: '',
      price: null
    }
  },
  components: {},
  computed: {
    ...mapGetters('ModuleProduct', [
      'products'
    ])
  },
  methods: {
    ...mapActions('ModuleProduct', [
      'changeProductEditOne'
    ]),
    success () {
      this.$alertify.success('Product Edit')
    },
    close (event) {
      this.$emit('close')
    },
    saveProduct () {
      const newProduct = {
        index: this.index,
        product: {
          productID: this.product.productID,
          productCategory: this.category,
          productName: this.name,
          productProvider: this.providerName,
          productPrice: this.price
        }
      }
      this.changeProductEditOne(newProduct)
      this.close()
      this.success()
    },
    loadValues () {
      this.category = this.product.productCategory
      this.name = this.product.productName
      this.providerName = this.product.productProvider
      this.price = this.product.productPrice
    }
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 460px;
  height: auto;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #ff5e00;
  justify-content: space-between;
}
.modal-footer {
  margin-top: 10px;
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  margin: 0 auto;
  padding: 20px 10px;
}
.group1 {
  display: grid;
}
.group2 {
  display: inline-grid;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #ff5e00;
  background: transparent;
}
.btn {
  color: white;
  background: #ff5e00;
  border: 1px solid #ff5e00;
  border-radius: 2px;
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}
label {
  margin: 10px 0;
  font-weight: 900
}
input {
  padding: 5px;
  border: 1px solid #ff5e00;
  border-radius: 4px;
  box-sizing: border-box;
  //margin-top: 6px;
  //margin-bottom: 16px;
}
input:focus{
  background: rgba(82, 138, 155, 0.486)
}
textarea {
  overflow: hidden;
  font-family: sans-serif;
  outline: none;
  min-height: 100px;
  max-height: 314px;
  height: auto;
  resize: none;
  width: 100%;
  border: 1px solid #ff5e00;
  border-radius: 4px;
  padding: 5px;
}
textarea:focus{
  background: rgba(82, 138, 155, 0.486)
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
@media screen and (min-width: 425px) {
  .group1 {
    display: inline-grid;
    margin-right: 12px;
  }
}
</style>
