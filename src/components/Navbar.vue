<template lang="">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="/dashboard/products">產品列表</router-link>
          <router-link class="nav-link" to="/dashboard/orders">訂單列表</router-link>
          <router-link class="nav-link" to="/dashboard/coupons">優惠券</router-link>
          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  },
  created () {
    console.log('router name', this.$route)
  }
}
</script>
<style lang="">

</style>
