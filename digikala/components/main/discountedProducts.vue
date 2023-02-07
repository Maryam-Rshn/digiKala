<template>
  <div class="discountedProducts-container">
    <div class="discountedProducts-title">
        <svg style="width: 24px; height: 24px;"><path fill-rule="evenodd" d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z" clip-rule="evenodd"></path></svg>
        <h3>منتخب محصولات تخفیف و حراج</h3>
    </div>
    <div class="discountedProducts">
        <div class="discountedProduct" v-for="product in discountedProducts" :key="product.key">
            <div class="discountedProduct-image">
                <img :src="product.gallery[0]" width="150px" height="150px" alt="">
            </div>
            <div class="product-prices">
                <div class="product-discounted-price">
                    <p>{{ calculateDiscount(product.price, product.discounted_price) }}%</p>
                    <span>
                        {{ product.discounted_price.toLocaleString("en-US") }}
                        <svg style="width: 16px; height: 16px;"><path fill-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd" ></path></svg>
                    </span>
                </div>
                <div class="product-price">
                    {{ product.price.toLocaleString("en-US") }}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        discountedProducts: Array,
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

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.discountedProducts-container {
    margin: 24px 64px 0;
    padding: 0 12px 20px;
    border: 1px solid #e0e0e6;
    border-radius: 16px;
}
.discountedProducts-title {
    margin-bottom: 8px;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    svg {
        fill: $red-bg;
    }
    h3 {
        font-size: 21px;
        line-height: 2.1;
        margin-right: 8px;
    }
}
.discountedProducts {
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: space-between;
    :first-child, :nth-child(7) {
        border-right-color: transparent; 
    }
}
.discountedProduct {
    padding: 12px 8px;
    border-right: 1px solid $gray-bg;
    border-bottom: 1px solid $gray-bg;
    display: flex;
    flex-direction: column;
    width: 213px;
}
.discountedProduct-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
}
.product-prices {
    margin-top: 4px;
}
.product-discounted-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    direction: rtl;
    height: 34px;
    p {
        background-color: $red-hover;
        padding: 0 4px;
        height: 20px;
        width: 34px;
        color: white;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
    }
    span {
        color: $dark-blue-title;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 2.15;
        font-weight: 700;
        gap: 4px;
    }
}
.product-price {
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 12px;
    color: #c3c3ce;
    text-decoration: line-through;
    line-height: 2.17;
}
</style>