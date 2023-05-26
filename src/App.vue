<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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