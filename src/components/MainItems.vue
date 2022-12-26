<template>
  <header-items></header-items>

  <section class="container main_content">
    <div>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <form @submit.prevent="isValidEmail" novalidate>
        <input
          type="email"
          name="userEmail"
          v-model.trim="userEmail"
          placeholder="Enter your email..."
        />
        <button>Get Started</button>
        <p v-if="validEmail === 'invalid'" class="error_email">
          Please check your email
        </p>
      </form>
    </div>
    <div>
      <img src="../assets/illustration-1.svg" width="700" height="500" />
    </div>
  </section>
  <productive-items></productive-items>
</template>
<script>
import HeaderItems from "./HeaderItems.vue";
import ProductiveItems from "./ProductiveItems.vue";
export default {
  components: { HeaderItems, ProductiveItems },
  data() {
    return {
      userEmail: null,
      validEmail: "padding",
    };
  },
  methods: {
    isValidEmail() {
      let testEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(this.userEmail);
      console.log("email",testEmail)
      if (!testEmail) {
        this.validEmail = "invalid";
      }else {
        this.validEmail = "valid";
      }
    },

  },

};

</script>
