<template lang="html">
  <section>
    <h2>Register</h2>
    <RegisterLogin></RegisterLogin>
  </section>
</template>

<script>
import RegisterLogin from '@/components/RegisterLogin.vue'

export default {
  layout: 'firebase',
  components: {
    RegisterLogin
  }
}
</script>

<style lang="css">
</style>
