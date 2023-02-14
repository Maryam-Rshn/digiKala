<template>
  <div class="market-offer-container">
    <div class="label">
        <img src="https://www.digikala.com/statics/img/png/amazing/fresh.png" width="62px" height="62px" alt="">
        <img src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" width="250px" height="28px"  alt="" class="title">
        <p>تا ۳۷٪ تخفیف</p>
    </div>
    <div class="market-product-container">
        <img class="background-image" src="https://www.digikala.com/statics/img/svg/typography/freshPattern.svg" alt="">
        <div class="products">
            <div class="product" v-for="product in marketProducts" :key="product.id">
                <NuxtLink :to="{name: 'products-id', params: {id: product.id } }" class="nuxtLink">
                    <img :src="product.gallery[0]" alt="" height="58px" width="58px">
                    <div class="discount-percent">
                        {{ calculateDiscount(product.price, product.discounted_price) }}%
                    </div>
                </NuxtLink>
            </div>
        </div>
        <NuxtLink :to="{name: 'products', params: {category: 'کالاهای سوپرمارکتی' } }" class="nuxtLink">
            <div class="show-all-products">
                <span>بیش از ۹۰ کالا</span>
                <svg style="width: 20px; height: 20px;"><path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></svg>
            </div>
        </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        marketProducts: Array,
    },
    methods: {
        calculateDiscount(mainPrice, discountPrice) {
            //remove last two numbers from main price
            const stringMain = mainPrice.toString()
            const removeMain = stringMain.slice(0, -2)
            const numberMain = parseInt(removeMain)

            //divide both numbers and rounding the answer
            const calculateDiscount = discountPrice / numberMain
            const roundedNumber = Math.round(calculateDiscount)

            //getting discount number
            const result = 100 - roundedNumber

            return result
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
* {
    font-family: iranyekan,sans-serif;
}

.market-offer-container {
    padding: 16px 40px 12px;
    display: flex;
    position: relative;
    align-items: center;
    direction: rtl;
    margin: 8px 64px 0;
    background: rgba(235,240,237);
    border-radius: 16px;
    justify-content: space-between;
}
.background-image {
    position: absolute;
    top: 0;
    left: 0px;
    height: 100%;
    z-index: 0;
}
.label {
    display: flex;
    align-items: center;
    .title {
        margin: 0 20px;
    }
    p {
        padding: 0 12px;
        background-color: $light-green;
        color: white;
        font-size: 14px;
        font-weight: 700;
        line-height: 2.17;
        border-radius: 9999px;
    }
}
.market-product-container {
    display: flex;
    align-items: center;
    gap: 8px;
}
.products {
    display: flex;
    align-items: center;
    gap: 8px;
}
.product {
    padding: 8px;
    position: relative;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
        border-radius: 50%;
    }
}
.discount-percent {
    height: 20px;
    width: 34px;
    color: white;
    padding: 0 4px;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 16px;
    background-color: $red-hover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.show-all-products {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 9999px;
    color: $light-green;
    background: white;
    z-index: 1;
    span {
        font-size: 12px;
        font-weight: 700;
        line-height: 2.17;
        color: $light-green;
    }
    svg {
        fill: $light-green;
        path {
            transform: scale(.8);
        }
    }
}
.nuxtLink {
    z-index: 4;
}
</style>