<template>
  <div class="section section-innovation">
    <div class="section-content">
      <h2>{{ innovation.title }}</h2>
      <div class="innovation-list row-large">
        <div
          v-for="(item, index) in innovation.content"
          :key="index"
          class="innovation-item"
        >
          <div class="col-inner">
            <div class="text">
              <h4>{{ item.title }}</h4>
              <p>{{ item.content }}</p>
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
    innovation: {
      type: Object,
      required: true,
    },
  },
  // setup(props) {
  //   console.log(props.innovation);
  // },
  //   created() {
  //     console.log(this.innovation);
  //   },
};
</script>

<style>
</style>