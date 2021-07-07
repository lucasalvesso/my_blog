<template>
  <v-app id="app">
    <v-app-bar
      app
      color="topAppBar"
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      floating
      :permanent="drawer"
      app
      dark
      color="sideMenuColor"
    >
      <drawer />
    </v-navigation-drawer>

    <v-main class="mt-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import Drawer from './components/Drawer';
  export default {
    name: 'App',
    components: { Drawer },
    data: () => ({
      drawer: false,

    }),
    computed: {
      getUserCredentials () {
        return this.$store.getters.getUserCredentials;
      },
      routesWithoutToken () {
        return this.$router.getRoutes().filter(opt => !['/login', '/signup'].includes(opt.path));
      },
    },
    watch: {
      getUserCredentials (val) {
        if (val === false) {
          this.$router.push('/login');
        }
      },
    },
    mounted () {
    },
    created () {
      this.$store.dispatch('verifyToken');
    },
  };
</script>

<style>
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
</style>
