<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";
import Footer from "./components/Common/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style >
.btn {
  border-radius: 10px;
  padding: 5px;
  border: 0;
}
.btn-clear {
  background: red;
  color: #fff;
}
</style>