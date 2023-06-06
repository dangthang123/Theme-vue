<template>
  <div class="about-main">
    <loading v-if="loading" />
    <div v-else class="about-content">
      <div v-if="itemsAboutTop" class="about-top-content section">
        <div class="about-top-left large-6">
          <img
            v-if="itemsAboutTop.image"
            :src="itemsAboutTop.image.sourceUrl"
          />
          <img v-else alt="img" />
        </div>
        <div
          v-html="itemsAboutTop.content"
          class="about-top-right large-6"
        ></div>
      </div>

      <div v-if="itemsAboutBottom" class="about-bottom-content">
        <div class="about-title container">
          <h4>
            <b></b>
            <span class="section-title-main">{{ itemsAboutBottom.title }}</span
            ><b></b>
          </h4>
        </div>

        <div class="about-title-content">
          <p>{{ itemsAboutBottom.titlecontent }}</p>
        </div>

        <div class="about-bottom-team container">
          <div
            v-for="item in itemsAboutBottom.team"
            :key="item.id"
            class="item-team"
          >
            <div class="item-team-inner">
              <div class="box-image">
                <img v-if="item.image" :src="item.image.sourceUrl" />
              </div>
              <div class="box-text">
                <h4>{{ item.name }}</h4>
                <p>{{ item.job }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import "../assets/style/about.css";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import GET_DATA_ABOUT_PAGE from "../utils/gql/get_about_page";
import Loading from "../components/Common/Loading.vue";
export default {
  components: {
    Loading,
  },
  setup() {
    const { result, loading } = useQuery(GET_DATA_ABOUT_PAGE);

    const itemsAboutTop = computed(
      () => result.value?.page.about.abouttop ?? []
    );

    const itemsAboutBottom = computed(
      () => result.value?.page.about.aboutbottom ?? []
    );
    // console.log(itemsAboutBottom);
    return { itemsAboutTop, itemsAboutBottom, loading };
  },
};
</script>

<style >
</style>