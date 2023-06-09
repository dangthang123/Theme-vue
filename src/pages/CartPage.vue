<template>
  <div>
    <h1>cart</h1>
    <div v-for="item in cartItems" :key="item.id">
      {{ item.name }}---{{ item.quantity }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  created() {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(this.cartItems);
  },
};
</script>

<style>
</style>