<template>
  <div id="product" class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10">
    <input v-model="search" type="text" id="myInput" placeholder="Search for names.." title="Type in a name">
    <div class="wrapper-table">
      <table v-if="products.length >=1" class="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Provider Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in filterProducts" :key="index">
            <td>{{ product.productID }}</td>
            <td>{{ product.productCategory }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productProvider }}</td>
            <td>{{ product.productPrice | moneyFormat(currency) }}</td>
            <td class="group-buttons">
                <button class='edit-product-btn' id="show-modal"  @click="openModal(product, index)">Edit</button>
                <button class='delete-product-btn' @click="removeProduct(index)">Delete</button>
            </td>
          </tr>
          <ModalProduct
          v-show="showModal"
          v-if="showModal"
          :index="index"
          :product="editedProduct"
          @close="showModal = false"/>
        </tbody>
      </table>
      <p v-else>Nothing Stored yet</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalProduct from '../components/ModalProduct'
export default {
  name: 'ProductView',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      index: null,
      showModal: false,
      editedProduct: null,
      search: '',
      currency: 'R$'
    }
  },
  components: {
    ModalProduct
  },
  computed: {
    ...mapGetters('ModuleProduct', [
      'products'
    ]),
    filterProducts: function () {
      return this.products.filter(product => {
        return product.productName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions('ModuleProduct', [
      'changeProductDeleteOne'
    ]),
    removeProduct (index) {
      this.$alertify.confirm(
        'Do you really want to delete this item?',
        () => this.$alertify.warning('Product Deleted', this.changeProductDeleteOne(index)),
        () => this.$alertify.error('cancel')
      )
    },
    openModal (product, index) {
      this.showModal = !this.showModal
      this.editedProduct = Object.assign({}, product)
      this.index = index
    }
  },
  filters: {
    moneyFormat (value, currency) {
      const newValue = parseInt(value, 10).toFixed(2)
      return `${currency} ${newValue}`
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
input[type=text], select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ff5e00;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}
.wrapper-table {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
thead {
  background: #1b1b1b;
  color: #ff5e00;
}

th {
  text-align: center;
}

th, td {
  padding: 8px;
}

tr {
  border: 1px solid #ddd;
}
.edit-product-btn {
  margin-bottom: 8px;
  background: #75e87585;
  cursor: pointer;
  border: none;
  padding: 7px;
  outline:none;
  border-radius: 10px;
}
.delete-product-btn {
  background: #f9b0b0;
  cursor: pointer;
  border: none;
  padding: 7px;
  outline:none;
  border-radius: 10px;
}
</style>
