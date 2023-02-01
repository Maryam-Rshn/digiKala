<template>
  <div class="banners-container">
    <div class="banner" v-for="banner in firstBanner" :key="banner">
        <img :src="banner.url" :width="banner.width" alt="">
    </div>
  </div>
</template>

<script>
export default {
    props: {
        firstBanner: Array,
    },
}
</script>

<style scoped>
.banners-container {
    margin: 24px 64px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
}
img {
    /* width: 314px; */
    border-radius: 16px;
}
</style>