<template>
  <div class="product-inner">
    <div class="sale-container">
      <div class="callout-sale">
        <div class="on-sale">
          <span class="percent-sale"
            ><span class="percent-sale"
              >-{{
                Math.floor(
                  100 -
                    (item.salePrice.slice(1) / item.regularPrice.slice(1)) * 100
                )
              }}%</span
            >
          </span>
        </div>
      </div>
    </div>

    <div class="product-small">
      <div class="box-product-image">
        <div class="image-fade">
          <router-link to="#">
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
              item.regularPrice
            }}</span>
            <span v-if="item.salePrice" class="salePrice">{{
              item.salePrice
            }}</span>
          </div>
        </div>

        <div class="add-to-cart-button">Add to cart</div>
      </div>
    </div>
  </div>
</template>

<script >
import "../../assets/style/product.css";

export default {
  props: {
    item: {
      type: Object,
    },
  },
  created() {
    // console.log(this.item);
  },
};
</script>

<style>
</style>