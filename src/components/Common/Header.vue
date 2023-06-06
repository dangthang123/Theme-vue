<template>
  <header class="header-main">
    <div class="container header-inner">
      <div class="header-logo">
        <router-link to="/">
          <img
            src="https://i0.wp.com/norwaypharmatech.com/wp-content/uploads/2023/05/logo.png?fit=337%2C82&ssl=1"
          />
        </router-link>
      </div>
      <nav class="header-nav">
        <p v-if="error">{{ error }}</p>
        <p v-if="loading">Loading....</p>
        <ul v-else class="header-menu nav">
          <li class="header-search">
            <span class="btn-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </li>
          <li class="header-item" v-for="item in items" :key="item.id">
            <router-link :to="`${item.uri}`" class="header-link">{{
              item.label
            }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="header-cart">
        <ul class="header-cart-nav nav">
          <li class="header-divider"></li>
          <li class="cart-item">
            <div class="header-button">
              <router-link to="/" class="header-cart-link button">
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
              </router-link>
            </div>
            <ul class="nav-dropdown"></ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import "../../assets/style/header.css";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import GET_DATA_MENU from "../../utils/gql/get_menu";

const { result, loading, error } = useQuery(GET_DATA_MENU);

const items = computed(() => result.value?.menu.menuItems.nodes ?? []);

// console.log(items);
</script>
<style scoped>
</style>

