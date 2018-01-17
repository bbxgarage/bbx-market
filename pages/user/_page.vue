<template lang="html">
  <main>
    {{$store.state.user}}
    <FormUser></FormUser>
  </main>
</template>

<script>
import FormUser from '@/components/FormUser.vue'

export default {
  layout: 'firebase',
  middleware: ['auth'],
  components: {
    FormUser
  }
}
</script>

<style lang="css">
</style>
