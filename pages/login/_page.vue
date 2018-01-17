<template lang="html">
  <section>
    <h2>Login</h2>
    <FormLogin></FormLogin>
  </section>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue'

export default {
  layout: 'firebase',
  components: {
    FormLogin
  }
}
</script>

<style lang="css">
</style>
