<template>
  <div id="about-screen">
    <h1>This site was built with VueJS and Bulma!</h1>
    <HelloWorld></HelloWorld>

    <section
      id="bulma-info"
      class="is-flex is-flex-direction-column is-align-items-center"
    >
      <img
        class="bulma-logo"
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
      />

      <p>
        Styling provided by Bulma. Check out the
        <a href="https://bulma.io" target="_blank" rel="noopener"
          >Bulma documentation</a
        > for more information.
      </p>
    </section>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "About",
  components: { HelloWorld },
};
</script>

<style lang="scss">
@import "@/assets/_shared-styles.scss";

#about-screen {
  @include app-content;
  padding: 2rem;

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  a {
    color: $vue-color;
  }

  #bulma-info {
    width: 100%;

    .bulma-logo {
      margin: 3rem 0;
    }
  }
}
</style>