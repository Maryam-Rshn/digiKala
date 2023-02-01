<template>
  <div class="banners-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
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