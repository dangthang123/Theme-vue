<template>
  <header class="header">
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading....</p>
    <div v-else class="container">
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__item" v-for="item in items" :key="item.id">
            <router-link :to="`${item.uri}`" class="header__link">{{
              item.label
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import GET_DATA_MENU from "../../utils/get_menu";

const { result, loading, error } = useQuery(GET_DATA_MENU);

const items = computed(() => result.value?.menu.menuItems.nodes ?? []);

console.log(items);
</script>
<style scoped>
li {
  list-style: none;
}

.container {
  width: 1600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  box-shadow: 0px 35px 60px rgba(0, 0, 0, 0.25);
  background: #fff;
}

.header__logo {
  text-transform: uppercase;
}

.header__menu {
  display: flex;
  column-gap: 54px;
}

.header__link {
  font-size: 20px;
  text-transform: uppercase;
  color: #6a6a6a;
  text-decoration: none;
  position: relative;
}

.header__link::after {
  content: "";
  width: 0px;
  height: 2px;
  background: blue;
  position: absolute;
  bottom: -5px;
  left: 0;
  transition: 0.3s ease;
}

.header__link:hover::after {
  width: 100%;
  transition: 0.3s ease;
}
</style>

