import Vue from 'vue'

export default {
  SET_USER: (state, user) => {
    state.user = user
    // Vue.set(state.user, id, user || false) /* false means user not found */
  }
}
