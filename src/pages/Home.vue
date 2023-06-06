<template>
  <div class="home-main">
    <loading v-if="loading" />
    <div v-else class="home-content">
      <banner />
      <innovation
        v-if="Object.keys(innovation).length > 0"
        :innovation="innovation"
      />
      <section-about-top
        v-if="sectionAboutTop && sectionAboutTop.length > 0"
        :sectionAboutTop="sectionAboutTop"
      />
      <section-about-bottom
        v-if="sectionAboutBottom && sectionAboutBottom.length > 0"
        :sectionAboutBottom="sectionAboutBottom"
      />
      <why-chose-us
        v-if="whyChoseUs && whyChoseUs.length > 0"
        :whyChoseUs="whyChoseUs"
      />
    </div>
  </div>
</template>

<script>
import "../assets/style/home.css";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import GET_DATA_HOME_PAGE from "../utils/gql/get_home_page";
import Banner from "../components/Ui/Home/Banner.vue";
import Innovation from "../components/Ui/Home/Innovation.vue";
import SectionAboutBottom from "../components/Ui/Home/SectionAboutBottom.vue";
import SectionAboutTop from "../components/Ui/Home/SectionAboutTop.vue";
import WhyChoseUs from "../components/Ui/Home/WhyChoseUs.vue";
import Loading from "../components/Common/Loading.vue";
export default {
  components: {
    Banner,
    Innovation,
    SectionAboutTop,
    SectionAboutBottom,
    WhyChoseUs,
    Loading,
  },

  setup() {
    const { result, loading } = useQuery(GET_DATA_HOME_PAGE);
    const items = computed(() => result.value?.page.homePage ?? []);
    const innovation = computed(
      () => result.value?.page.homePage.innovationForHealthyLiving ?? []
    );
    const sectionAboutTop = computed(
      () => result.value?.page.homePage.sectionAboutTop ?? []
    );
    const sectionAboutBottom = computed(
      () => result.value?.page.homePage.sectionAboutBottom ?? []
    );
    const whyChoseUs = computed(
      () => result.value?.page.homePage.whyChoseUs ?? []
    );
    // console.log(items);
    return {
      innovation,
      sectionAboutTop,
      sectionAboutBottom,
      whyChoseUs,
      items,
      loading,
    };
  },
};
</script>

<style>
</style>