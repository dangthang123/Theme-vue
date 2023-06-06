<template>
  <div class="section section-aboutTop">
    <div class="section-content">
      <div class="text">
        <h2>ABOUT US</h2>
      </div>
      <div class="row-list row">
        <div
          v-for="(item, index) in sectionAboutTop"
          :key="index"
          class="item-aboutTop"
        >
          <div class="col-inner">
            <div class="box">
              <div class="box-image">
                <img v-if="item.image" :src="item.image.sourceUrl" alt="imgg" />
              </div>
              <div class="box-text">
                <div class="box-text-inner">
                  <p>{{ item.firstTitle }}</p>
                  <p>{{ item.secondTitle }}</p>
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
    sectionAboutTop: {
      type: Array,
      required: true,
    },
  },
  // setup(props) {
  //   console.log(props.sectionAboutTop);
  // },
};
</script>

<style>
</style>