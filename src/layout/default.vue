<template>
  <div>
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header/user.vue";
import Footer from "../components/footer/user.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>
