<template>
  <form v-if="userDetail">
    <div class="field">
      <label class="label" for="user-id">ID</label>
      <div class="control">
        <input
          id="user-id"
          v-model="userDetail.id"
          class="input"
          type="text"
          placeholder="User ID"
          readonly="readonly"
        />
      </div>
    </div>

    <div class="columns">
      <div class="field column">
        <label class="label" for="first-name">First Name</label>
        <div class="control">
          <input
            id="first-name"
            v-model="userDetail.firstName"
            class="input"
            type="text"
            placeholder="First name"
            :readonly="isReadOnly"
          />
        </div>
      </div>

      <div class="field column">
        <label class="label" for="last-name">Last Name</label>
        <div class="control">
          <input
            id="last-name"
            v-model="userDetail.lastName"
            class="input"
            type="text"
            placeholder="Last name"
            :readonly="isReadOnly"
          />
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="field column">
        <label class="label" for="dob">Date of Birth</label>
        <div class="control">
          <input
            id="dob"
            v-model="userDetail.dob"
            class="input"
            type="date"
            placeholder="Date of birth (mm/dd/yyyy)"
            :readonly="isReadOnly"
          />
        </div>
      </div>

      <div class="field column">
        <label class="label" for="email">E-mail Address</label>
        <div class="control">
          <input
            id="email"
            class="input"
            type="email"
            v-model="userDetail.email"
            placeholder="User's email address"
            :readonly="isReadOnly"
          />
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox" for="active">
          <input
            id="active"
            type="checkbox"
            v-model="userDetail.active"
            :disabled="isReadOnly"
          />
          Active
        </label>
      </div>
    </div>

    <div class="is-flex is-flex-direction-row is-justify-content-flex-end">
      <button
        type="button"
        class="button is-danger mr-2"
        v-on:click="toggleReadOnly()"
      >
        Turn read-only {{ isReadOnly ? "OFF" : "ON" }}
      </button>
      <router-link :to="{ name: 'home' }" class="button is-primary">
        Close
      </router-link>
    </div>

    <br />
    <pre>{{ JSON.stringify(userDetail, null, 2) }}</pre>
  </form>
</template>

<script>
import UserService from "../services/UserService";
import UtilService from "../services/UtilService";

export default {
  name: "UserDetailsForm",
  props: {
    userId: {
      type: String,
    },
  },
  data() {
    return {
      userDetail: null,
      isReadOnly: true,
    };
  },
  mounted() {
    // console.log("userId: ", this.userId);
    this.getUserDetail(this.userId);
  },
  watch: {
    userId(newVal /* , oldVal */) {
      this.getUserDetail(newVal);
    },
  },
  methods: {
    getUserDetail(id) {
      if (UtilService.hasLength(id)) {
        UserService.getUserDetail(id).then(
          (resp) => {
            this.userDetail = resp;
          },
          (err) => {
            console.warn(err);
            this.userDetail = null;
          }
        );
      }
    },
    toggleReadOnly() {
      this.isReadOnly = !this.isReadOnly;
    },
  },
};
</script>

<style lang="scss">
.field {
  margin-bottom: 0.75rem;
}

.columns {
  margin-bottom: 0 !important;

  .field {
    margin-bottom: 0 !important;
  }
}
</style>