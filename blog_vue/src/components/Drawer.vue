<template>
  <v-card
    height="100%"
    width="256"
    class="mx-auto"
    color="sideMenuColor"
    dark
  >
    <v-list
      dense
      dark
      color="sideMenuColor"
    >
      <template>
        <v-list dense>
          <v-list-item
            class="justify-center align-center"
            :class="$vuetify.breakpoint.mobile ? 'mb-n2' : ''"
          >
            {{ '' }}
          </v-list-item>
        </v-list>
      </template>
      <template v-for="route in routesInApp">
        <v-list-item
          :key="route.order"
          :to="route.path"
          class=""
        >
          <v-list-item-action>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="text-h6 pa-6">
              {{ route.meta.label }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'Drawer',
    tag: 'drawer',
    data: () => ({
    }),

    computed: {
      routesInApp () {
        return this.$router.options.routes;
      },
    },

    created () {
    },

    mounted () {
      // console.log(this.$router)
    },

    methods: {
    },
  };
</script>

<style scoped>

</style>
