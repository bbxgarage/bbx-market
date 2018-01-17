<template lang="html">
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar app>
      <v-toolbar-title>Firebase</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/user">User</v-btn>
        <v-btn flat to="/login">Login</v-btn>
        <v-btn flat to="/register">Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
