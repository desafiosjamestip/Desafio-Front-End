<template>
  <div class="nav">
    <router-link :to="{ name: 'HomeView' }">Home</router-link> |
    <router-link :to="{ name: 'ProductView' }">Producs</router-link>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 10px;
  text-decoration: none;
  font-size: 17px;
}

.nav a.router-link-exact-active {
  background-color: #ff5e00;
  color: white;
}
</style>
