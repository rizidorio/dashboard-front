<template>
  <v-app class="back">
    <v-container app class="container">
      <router-view />
    </v-container>
  </v-app>
</template>

<style scoped>
  .container {
    max-width: unset; 
    padding: 0
  }
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}

a {
  color: #000 !important;
}

.back {
  background-color: #F8F8F1;
}
</style>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
}
</script>
