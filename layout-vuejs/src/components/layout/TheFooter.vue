<template>
  <div class="footer">
    © 2020 Copyright: <a href="#">JameTip</a>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
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
  components: {},
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  bottom:0;
  color: white;
  text-align: center;
  padding-top: 50px;
  height: 150px;
  background-color: #1b1b1b;
}
.footer p {
  text-align: justify;
}

.footer h5{
  padding-left: 10px;
  padding-bottom: 6px;
  margin-bottom: 20px;
  color:#ffffff;
  text-transform: uppercase;
}
.footer a {
  color: #ff5e00;
  text-decoration: none;
  background-color: transparent;
}
</style>
