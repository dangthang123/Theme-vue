<template>
  <div class="shop-content">
    <loading v-if="loading" />
    <div v-else class="product-list container">
      <div v-for="item in items" :key="item.id" class="product-item">
        <Product :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Common/Product.vue";
import Loading from "../components/Common/Loading.vue";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import GET_DATA_PRODUCT from "../utils/gql/get_product";
export default {
  components: {
    Product,
    Loading,
  },
  setup() {
    const { result, loading } = useQuery(GET_DATA_PRODUCT);

    const items = computed(() => result.value?.products.nodes ?? []);

    console.log(items);

    return { items, loading };
  },
};
</script>

<style>
.product-list {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>