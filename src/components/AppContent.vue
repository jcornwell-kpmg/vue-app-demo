<template>
  <div id="app-content-container">
    <router-view />
  </div>
</template>

<style lang="scss">
#app-content-container {
  display: flex;
  flex-direction: column;
  min-height: 1rem;
  width: 100%;
}
</style>