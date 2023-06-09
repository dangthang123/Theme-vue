<template>
  <div class="product-inner">
    <div class="sale-container">
      <div class="callout-sale">
        <div class="on-sale">
          <span class="percent-sale"
            ><span class="percent-sale"
              >-{{
                Math.floor(100 - (item.salePrice / item.regularPrice) * 100)
              }}%</span
            >
          </span>
        </div>
      </div>
    </div>

    <div class="product-small">
      <div class="box-product-image">
        <div class="image-fade">
          <router-link :to="`/product/${item.slug}`">
            <img :src="item.featuredImage.node.sourceUrl" alt="img" />
            <img
              v-if="
                item.galleryImages.nodes[0] &&
                item.galleryImages.nodes[0].sourceUrl
              "
              :src="item.galleryImages.nodes[0].sourceUrl"
              alt="img"
              class="image-gallery show-on-hover"
            />
          </router-link>
        </div>
        <div class="btn-wishlist-icon show-on-hover">
          <div class="wishlist-icon">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>

        <div class="btn-quick-view show-on-hover">
          <div class="quick-views">Quick View</div>
        </div>
      </div>

      <div class="box-product-content">
        <div class="title-wrapper">
          <router-link to="#">
            <h3>{{ item.name }}</h3>
          </router-link>
        </div>
        <div class="price-wrapper">
          <div v-if="item.reviews.averageRating == 0" class="star-rating">
            <i class="fa-sharp fa-solid fa-star"></i>
          </div>
          <div v-else class="star-rating">
            <i
              v-for="start in item.reviews.averageRating"
              :key="start"
              class="fa-sharp fa-solid fa-star"
            ></i>
          </div>
          <div class="price">
            <span v-if="item.regularPrice" class="regularPrice">{{
              formatPrice(item.regularPrice)
            }}</span>
            <span v-if="item.salePrice" class="salePrice">{{
              formatPrice(item.salePrice)
            }}</span>
          </div>
        </div>

        <router-link
          to="/cart"
          class="add-to-cart-button"
          @click="addToCartClicked(item)"
        >
          Add to cart
        </router-link>
      </div>
    </div>
  </div>
</template>

<script >
import "../../assets/style/product.css";
import { mapActions } from "vuex";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  created() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems && cartItems.length > 0) {
      this.$store.commit("setCartItems", cartItems);
    }
  },
  methods: {
    ...mapActions(["addToCart"]),

    addToCartClicked(product) {
      this.addToCart(product);
    },
    formatPrice(price) {
      if (typeof price === "string") {
        price = parseFloat(price);
      }
      if (typeof price === "number" && !isNaN(price)) {
        const formattedPrice = price.toFixed(2);
        return `${formattedPrice} $`;
      }
      return price;
    },
  },
};
</script>

<style>
</style>