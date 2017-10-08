<template lang="html">
    <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Todomsr-Fancy
        </h1>
        <h2 class="subtitle">
        </h2>
      </div>
      <a class="button is-light" @click="signout">Signout</a>
    </div>
  </section>

</template>

<script>
export default {
  methods: {
    signout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
