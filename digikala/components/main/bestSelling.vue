<template>
  <div class="bestSelling-container">
    <div class="bestSelling-title">
        <span>
            <svg style="width: 24px; height: 24px;"><path fill-rule="evenodd" d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z" clip-rule="evenodd"></path></svg>
            پرفروش‌ترین کالاها
        </span>
        <p>مشاهده همه</p>
    </div>
    <div class="bestSelling-products">
        <div class="product" v-for="(product, index) in bestSelling" :key="product.id">
            <img :src="product.gallery[0]" width="86px" height="86px" alt="">
            <span>{{ index + 1 }}</span>
            <p>{{ product.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        bestSelling: Array,
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.bestSelling-container {
    margin: 24px 64px 0;
    padding: 16px 0;
    border: 1px solid #e0e0e6;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.bestSelling-title {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    direction: rtl;
    span {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $dark-blue-button;
        font-size: 21px;
        line-height: 2.1;
        font-weight: 700;
        svg {
            fill: #f9a825;
        }
    }
    p {
        color: $light-blue;
        font-size: 14px;
        line-height: 2.15;
        font-weight: 700;
        position: absolute;
        left: 20px;
    }
}
.bestSelling-products {
    margin-top: 28px;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    flex-flow: row-reverse wrap;
    row-gap: 20px;
    .product {
        width: 306.5px;
        display: flex;
        align-items: center;
        direction: rtl;
        justify-content: flex-start;
        img {
            border-radius: 0;
        }
        span {
            margin: 0 12px;
            font-size: 26px;
            color: $light-blue;
        }
        p {
            font-size: 12px;
            color: $dark-blue-title;
            font-weight: 700;
        }
    }
}
</style>