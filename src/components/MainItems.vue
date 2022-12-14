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
      <form>
        <input type="email" placeholder="Enter your email..."/>
        <button>Get Started</button>
        <p class="error_email"></p>
      </form>
    </div>
    <div>
      <img src="../assets/illustration-1.svg" width="700" height="500"/>
    </div>
  </section>
</template>
<script>
import HeaderItems from "./HeaderItems.vue";

export default {
  components: { HeaderItems },
};
</script>
