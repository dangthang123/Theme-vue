<template>
  <div class="section section-aboutBottom">
    <div class="section-content">
      <div class="row">
        <div
          v-for="(item, index) in sectionAboutBottom"
          :key="index"
          class="item-aboutBottom row-content"
        >
          <div class="col-inner">
            <h2>{{ item.title }}</h2>
            <div class="box">
              <div class="box-image">
                <img v-if="item.image" :src="item.image.sourceUrl" alt="img" />
              </div>
              <div class="box-text">
                <div class="box-text-inner">
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionAboutBottom: {
      type: Array,
      required: true,
    },
  },
  // setup(props) {
  //   console.log(props.sectionAboutBottom);
  // },
};
</script>

<style>
</style>