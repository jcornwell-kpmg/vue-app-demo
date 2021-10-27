<template>
  <div class="table-container">
    <table class="table is-bordered is-striped is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" v-bind:key="user.id">
          <th>
            <router-link class="has-text-primary has-text-weight-normal"
              :to="{ name: 'user-details', params: { id: user.id } }"
            >
              <span>{{ user.id }}</span>
            </router-link>
          </th>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.dob }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "UsersList",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    UserService.getUsers().then((resp) => {
      this.users = resp && Array.isArray(resp.items) ? resp.items : [];
    });
  },
};
</script>

<style lang="scss">
</style>