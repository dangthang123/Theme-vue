<template>
  <div class="detailpage-content">
    <h1>{{ this.product.name }}</h1>
    <img
      v-if="this.product.featuredImage && this.product.featuredImage.node"
      :src="this.product.featuredImage.node.sourceUrl"
      alt="img"
    />
    <div @click="increaseQuantity">+</div>
    <div>{{ this.quantity }}</div>
    <div @click="decrementQuantity">-</div>

    <router-link
      to="/cart"
      class="add-to-cart-button"
      @click="addToCartClicked"
    >
      Add to cart
    </router-link>
  </div>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import GET_DATA_PRODUCT from "../utils/gql/get_product";
import { onMounted, ref, watchEffect } from "vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      product: [],
      quantity: 1,
    };
  },
  setup() {
    const { result, loading } = useQuery(GET_DATA_PRODUCT);
    const items = ref([]);
    onMounted(() => {
      watchEffect(() => {
        items.value = result.value?.products.nodes ?? [];
      });
    });

    return { items, loading };
  },
  created() {
    let productId = this.$route.params.slug;
    // console.log(this.$route);
    if (productId) {
      this.getContent(productId);
    }
  },
  methods: {
    ...mapActions(["addToCart"]),

    getContent(productId) {
      watchEffect(() => {
        if (this.items.length > 0) {
          const thisProduct =
            this.items.find((product) => String(product.slug) === productId) ||
            {};
          // console.log(thisProduct);
          if (thisProduct) {
            this.product = thisProduct;
          } else {
            console.log("error");
          }
        }
      });
    },

    increaseQuantity() {
      this.quantity++;
    },

    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    addToCartClicked() {
      const productToAdd = { ...this.product, quantity: this.quantity };
      // console.log(productToAdd);
      this.addToCart(productToAdd);
    },
  },
};
</script>

<style>
</style>