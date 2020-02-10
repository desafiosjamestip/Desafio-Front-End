<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 nopadding">
        <Navbar/>
      </div>
    </div>

    <div class="row">
      <div class="content">
        <router-view/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 nopadding">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/TheNavBar'
import Footer from '@/components/layout/TheFooter'

export default {
  name: 'App',
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
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
  },
  methods: {
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
.content {
  min-height: 609px;
  border-radius: 5px;
  padding: 20px;
}
@media screen and (min-width: 425px) {
  .content {
    min-height: 684px;
  }
}
@media screen and (min-width: 768px) {
  .content {
    min-height: 684px;
  }
}
@media screen and (min-width: 1024px) {
  .content {
    min-height: 717px;
  }
}
@media screen and (min-width: 1440px) {
  .content {
    min-height: 752px;
  }
}
@media screen and (min-width: 1600px) {
  .content {
    min-height: 865px;
  }
}
</style>
