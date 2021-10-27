<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppContent></AppContent>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppContent from '@/components/AppContent.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
  },
};
</script>

<style lang="scss">
/* Reference the shared SCSS variables and mixins */
@import "@/assets/_shared-styles.scss";

/* Reference the Bulma SCSS library styles */
$primary: $vue-color;
@import "../node_modules/bulma/bulma.sass";

* {
  box-sizing: border-box;
}

html,
body {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Adding this to account for overflow-y: scroll set by the Bulma library */
html {
  overflow: auto;
}

body {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $app-text-color;
  padding: 0;
  margin: 0;

  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 1rem;

    #app-header {
      flex: 0 0 auto;
    }

    #app-content-container {
      flex: 1 1 auto;
    }
  }
}
</style>
