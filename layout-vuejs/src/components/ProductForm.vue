<template>
    <div class="row productform">
      <form @submit.prevent="addNewProduc">
          <div>
            <label># Product code</label>
            <input
              v-model="code"
              type="text"
              name="productCode"
              id="productCode"
              placeholder="Nome"
              disabled
            />
          </div>

          <div>
            <label>Category</label>
            <select v-model="categorySelected" id="category" name="category" required>
              <option value="category.name" disabled>Choose a category</option>
              <option
                v-for="(category, index) in categories"
                :key="index"
                :value="category.name"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <div>
            <label>Product Name</label>
            <input
              required
              v-model="name"
              type="text"
              name="productName"
              id="productName"
              placeholder="Insert product name..."
            />
          </div>

          <div>
            <label>Provider's name</label>
            <input
              v-model="providerName"
              type="text"
              name="providerName"
              id="providerName"
              placeholder="Provider's name..."
              required
            />
          </div>

          <div>
            <label>Price</label>
            <span class="input-group-addon">R$</span>
            <input
              v-model="price"
              type="number"
              name="price"
              min="1"
              step="any"
              id="productPrice"
              placeholder="Price"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { randomID } from '../helpers/numbers'
export default {
  name: 'ProductForm',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.randonNumber()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      code: '',
      name: '',
      providerName: '',
      price: 0,
      categorySelected: null,
      categories: [
        { name: 'Eletronic' },
        { name: 'Computer & Office' },
        { name: 'Cellphones & Telecom' },
        { name: 'Health and Hygiene' },
        { name: "Men's Clothing" },
        { name: 'Home & Garden' },
        { name: 'Shoes' }
      ]
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
      'changeProductAddOne'
    ]),
    success: function () {
      this.$alertify.success('Product Created')
    },
    async randonNumber () {
      this.code = await randomID()
    },
    async addNewProduc () {
      const newProduct = {
        productID: this.code,
        productName: this.name,
        productCategory: this.categorySelected,
        productProvider: this.providerName,
        productPrice: this.price
      }
      this.changeProductAddOne(newProduct)
      this.success()
      this.resetForm()
    },
    resetForm () {
      this.randonNumber()
      this.code = ''
      this.name = ''
      this.categorySelected = null
      this.providerName = ''
      this.price = null
    }
  },
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.productform {
  margin-top: 20px;
  background-color: #cccc;
  padding: 10px;
  text-align: left;
}
input[type="text"],
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ff5e00;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}
.productform button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  margin: 0px auto;
}
input[type="submit"]:hover {
  background-color: #45a049;
}
input[type="number"] {
  width: 25%;
  padding: 12px;
  border: 1px solid #ff5e00;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-left: 5px;
}
label {
  display: block;
  margin: 3px 0;
}
</style>
