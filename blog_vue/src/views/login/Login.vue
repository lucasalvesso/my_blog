<template>
  <v-container class="mt-12">
    <v-card
      :width="$vuetify.breakpoint.mobile ? '80%' : '50%'"
      class="mx-auto justify-center align-center text-center"
      elevation="10"
    >
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          prepend-icon="login"
          label="E-mail"
        />
        <v-text-field
          v-model="password"
          prepend-icon="password"
          label="Password"
          type="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="login()"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      email: null,
      password: null,
    }),
    methods: {
      login () {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
      },
    },
  };
</script>

<style scoped>

</style>
