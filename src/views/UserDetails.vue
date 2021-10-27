<template>
  <div id="user-details-screen">
    <div class="app-content__fixed-width__sm">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><router-link :to="{ name: 'home' }" class="navbar-item">
          Home
        </router-link></li>
          <li class="is-active"><a href="#" aria-current="page">User Details</a></li>
        </ul>
      </nav>
      <UserDetailsForm :user-id="id"></UserDetailsForm>
    </div>
  </div>
</template>

<script>
import UserDetailsForm from "@/components/UserDetailsForm.vue";
export default {
  name: "UserDetails",
  components: { UserDetailsForm },
  props: ["id"],
};
</script>

<style lang="scss">
@import "@/assets/_shared-styles.scss";

#user-details-screen {
  @include app-content;
  padding: 2rem;
}
</style>