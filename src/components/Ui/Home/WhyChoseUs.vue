<template>
  <div class="section section-whychose">
    <div class="section-content">
      <div
        v-for="(item, index) in whyChoseUs"
        :key="index"
        class="item-whychose row row-list"
      >
        <div class="col-image">
          <div class="img-inner">
            <img v-if="item.image" :src="item.image.sourceUrl" alt="img" />
          </div>
        </div>
        <div v-html="item.content" class="col-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    whyChoseUs: {
      type: Array,
      required: true,
    },
  },
  // setup(props) {
  //   console.log(props.whyChoseUs);
  // },
};
</script>

<style>
</style>