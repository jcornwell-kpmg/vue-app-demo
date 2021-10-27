<template>
  <div id="home-screen"> 
    <h1>Users</h1>
    <UsersList></UsersList>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue';

export default {
  name: "Home",
  components: { UsersList }
};
</script>

<style lang="scss">
@import "@/assets/_shared-styles.scss";

#home-screen {
  @include app-content;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
