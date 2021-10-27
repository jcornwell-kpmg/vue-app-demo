<template>
  <header id="app-header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item">
          <h1>Vue V3 Demo App</h1>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="navbar-end">
              <div class="navbar-item">
                <router-link :to="{ name: 'about' }"> About </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import "@/assets/_shared-styles.scss";

#app-header {
  padding: 0 32px;
  background-color: $app-header-bg;

  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.5rem;
    color: $app-header-color;
  }

  nav {
    background-color: $app-header-bg;

    .navbar-item a {
      color: $app-header-color;
      text-transform: uppercase;
    }
  }
}
</style>
