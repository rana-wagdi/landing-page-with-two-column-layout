<template>
  <header-items></header-items>

  <section class="container main_content">
    <div>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p class="main_content_items">
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
          :class="{error: validEmail == 'invalid'}"
          class="email"
        />
    
        
        <button>Get Started</button>
        <p v-if="validEmail === 'invalid'" class="error_email">
          Please check your email
         </p> 
      </form>
    </div>
    <div>
      <img class="main_img" src="../assets/illustration-1.svg" />
    </div>
  </section>
  <productive-items></productive-items>
  <footer-items></footer-items>
</template>
<script>
import HeaderItems from "./HeaderItems.vue";
import ProductiveItems from "./ProductiveItems.vue";
import FooterItems from "./FooterItems.vue";
export default {
  components: { HeaderItems, ProductiveItems, FooterItems },
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
