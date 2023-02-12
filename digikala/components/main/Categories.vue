<template>
  <div class="categories-container">
    <h3>دسته‌بندی‌های دیجی‌کالا</h3>
    <div class="categories">
        <span v-for="category in categories" :key="category.id">
            <NuxtLink :to="{name: 'products', params: {category: category.name } }" class="nuxtLink">
                <img :src="category.img_url" width="170px" height="170px" alt="">
                <p>{{ category.name }}</p>
            </NuxtLink>
        </span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        categories: Array,
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

* {
  font-family: iranyekan,sans-serif;
}
.categories-container {
    margin: 24px 64px 0;
    padding: 16px 16px 40px;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    h3 {
        text-align: center;
        font-size: 21px;
        margin-bottom: 36px;
    }
}
.categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
    // height: 450px;
    row-gap: 10px;
    span {
        width: 212px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            color: $dark-blue-button;
            font-size: 12px;
            font-weight: 700;
            line-height: 2.17;
            text-align: center;
            margin-top: 8px;
        }
    }
}

</style>