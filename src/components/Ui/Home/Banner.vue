<template>
  <div class="banner-inner">
    <div class="banner-bg">
      <div class="bg" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
        <img :src="imageUrl" />
      </div>
    </div>
    <div class="banner-content container">
      <div class="text-box">
        <h4>SPECIALIZED TEAM</h4>
        <p>We have a specialized team of scientists and product developers</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://cdn-jbohj.nitrocdn.com/eMwJYceWaIHipawjdEwdARbnNvTgpQvo/assets/images/source/rev-a47f8ae/wp-content/uploads/2023/05/banner-1-min.png",
    };
  },
};
</script>

<style>
</style>