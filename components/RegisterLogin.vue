<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      :rules="passwordRules"
      :counter="18"
      :append-icon="e1 ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (e1 = !e1)"
      :type="e1 ? 'password' : 'text'"
      required
    ></v-text-field>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      register
    </v-btn>
    <div>
      <v-alert v-show="success" color="success" icon="check_circle" value="true">
        {{successMessage}}
      </v-alert>
      <v-alert v-show="error" color="error" icon="warning" value="true">
        {{errorMessage}}
      </v-alert>
    </div>
  </v-form>
</template>

<script>
import { register } from '../api'

export default {
  data: () => ({
    e1: true,
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => v && v.length <= 18 || 'Password must be less than 18 characters',
      (v) => v && v.length >= 6 || 'Password must be more than 6 characters'
    ],
    success: false,
    error: false,
    errorMessage: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        register(this.email, this.password).then((res) => {
          this.error = false
          this.successMessage = 'register successful'
          this.success = true
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // ...
          this.error = true
          this.errorMessage = errorMessage
          this.success = false
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
