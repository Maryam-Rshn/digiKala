<template>
  <div class="special-deliveries">
    <div class="digiplus-banner">
        <img src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg" alt="">
        <p>خدمات ویژه برای اعضای دیجی‌پلاس</p>
        <span class="digiplus-membership">
            عضویت
            <svg style="width: 24px; height: 24px;"><path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></svg>
        </span>
    </div>
    <div class="special-deliveries-products">
        <div class="title">
            <div class="quick-delivery">
                <svg style="width: 24px; height: 24px;"><path fill-rule="evenodd" d="M11.539 1.083l.224-.054a1 1 0 01.452-.006A6.098 6.098 0 0117 6.98v2.486l2.555 1.703a1 1 0 01.394.516l2 6a1 1 0 01-1.145 1.297L15.9 18H8.099l-4.903.98a1 1 0 01-1.145-1.296l2-6a1 1 0 01.394-.516L7 9.465V6.979a6.104 6.104 0 014.539-5.896zM7 11.868v4.312l-2.507.501 1.346-4.039L7 11.868zM15 10v6H9V6.979a4.099 4.099 0 012.839-3.9L12 3.03l.178.054A4.099 4.099 0 0115 6.98V10zm2 6.18l2.506.501-1.346-4.039-1.16-.773v4.311zM10 9a2 2 0 114 0 2 2 0 01-4 0zm0 13v-3H8v3h2zm6-3v3h-2v-3h2zm-3 4v-4h-2v4h2z" clip-rule="evenodd"></path></svg>
                <h4>ارسال فوری</h4>
            </div>
            <span class="deliver-all">
                مشاهده همه
                <svg style="width: 20px; height: 20px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </span>
        </div>
        <div class="digiplus-products">
            <div class="digiplus-product" v-for="product in specialDeliveries" :key="product.id">
                <img :src="product.gallery[0]" width="116px" height="116px" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        specialDeliveries: Array,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.special-deliveries {
    margin: 24px 64px 0;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    direction: rtl;
    background-color: #941b80;
}
.digiplus-banner {
    margin-left: 12px;
    padding-right: 24px;
    padding-top: 24px;
    background-image: url("https://www.digikala.com/statics/img/png/digiplus/plus-widget.png");
    background-size: 372px 279px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 416px;
    min-width: 392px;
    p {
        margin-top: 4px;
        font-size: 14px;
        line-height: 2.15;
        color: white;
        display: flex;
        align-items: center;
        font-weight: 700;
    }
}
.digiplus-membership {
    margin-top: 12px;
    padding: 4px 16px;
    color: white;
    border: 1px solid white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 2.17;
    gap: 8px;
    svg {
        fill: white;
    }
}
.special-deliveries-products {
    width: 868px;
    border-radius: 8px;
    background-color: white;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
    }
}
.quick-delivery {
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
        fill: #a63489;
    }
    h4 {
        font-size: 16px;
        font-weight: 700;
        line-height: 2.15;
        color: $dark-blue-button;
    }
}
.deliver-all {
    display: flex;
    align-items: center;
    color: #a63489;
    font-size: 12px;
    line-height: 2.17;
    font-weight: 700;
    svg {
        fill: #a63489;
        path {
            transform: scale(.8);
        }
    }
}
.digiplus-products {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    padding-bottom: 20px;
}
</style>