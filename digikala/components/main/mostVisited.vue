<template>
  <div class="most-visited-container">
    <slot></slot>
    <!-- <div class="sub-category" v-for="category in fristMostVisited" :key="category.category_name">
        <h4>{{ category.sub_category_name }}</h4>
        <p>بر اساس بازدیدهای شما</p>
        <div class="sub-category-gallery" v-for="image in category.gallery" :key="image">
        <img :src="image" alt="">
        </div>
    </div> -->
    <!-- 125.88 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.most-visited-container {
    margin: 24px 64px 0;
    border: 1px solid #e0e0e6;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    :first-child {
        border-right-color: transparent;
    }
}
.sub-category {
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid $gray-bg;
    h4 {
        color: #23254e;
        font-size: 16px;
        line-height: 2.15;
    }
    p {
        color: $gray-subtitle;
        font-size: 11px;
        line-height: 2.17;
        font-weight: 600;
    }
}
.sub-category-gallery {
    display: flex;
    direction: rtl;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 4px;
    margin-top: 4px;
    :first-child {
        border-right-color: transparent;
    }
    :nth-child(3) {
        border-right-color: transparent;
        border-bottom-color: transparent;
    }
    :last-child {
        border-bottom-color: transparent;
    }
}
.sub-category-image {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid $gray-bg;
    border-bottom: 1px solid $gray-bg;
    img {
        width: 125.88px;
        height: 125.88px;
    }
}
.seeAll {
    margin: 4px 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        font-size: 12px;
        font-weight: 700;
        color: $light-blue;
    }
    svg {
        fill: $light-blue;
        path {
            transform: scale(.8);
        }
    }
}
</style>