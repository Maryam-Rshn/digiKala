<template>
  <div class="digikala-offer-container">
    <h2>پیشنهاد دیجی‌کالا</h2>
    <div class="digi-offers">
        <div class="digi-offer" v-for="category in digikalaOffers" :key="category.category_name">
            <div class="digi-image">
                <img :src="category.img_url" width="60px" height="60px" alt="">
            </div>
            <h4>{{ category.offer_name }}</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        digikalaOffers: Array,
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.digikala-offer-container {
    margin: 24px 64px 0;
    h2 {
        padding: 16px 0;
        text-align: center;
        color: $dark-blue-button;
        font-size: 21px;
        line-height: 2.1;
    }
}
.digi-offers {
    margin-top: 8px;
    border: 1px solid #e0e0e6;
    border-radius: 16px;
    display: flex;
    flex-flow: row-reverse wrap;

}
.digi-offer {
    padding: 16px 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 187px;
    border-right: 1px solid $gray-bg;
    border-bottom: 1px solid $gray-bg;
    .digi-image {
        padding: 12px;
        border-radius: 50%;
        background-color: $gray-bg;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            mix-blend-mode: darken;
        }
    }
    h4 {
        margin-top: 8px;
        font-size: 14px;
        color: $dark-blue-button;
        line-height: 2.15;
        text-align: center;
    }
}
</style>