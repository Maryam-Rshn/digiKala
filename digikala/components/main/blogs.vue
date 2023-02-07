<template>
  <div class="blogs-container">
    <div class="blogs-title">
        <p>خواندنی‌ها</p>
        <span>
            مطالب بیشتر در دیجی‌کالا مگ
            <svg style="width: 18px; height: 18px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
        </span>
    </div>
    <div class="blogs">
        <div class="blog" v-for="blog in blogs" :key="blog.title">
            <img :src="blog.img_url" alt="" width="315px">
            <span>{{ blog.title }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        blogs: Array,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.blogs-container {
    margin: 24px 64px 0;
    padding-bottom: 20px;
}
.blogs-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    direction: rtl;
    padding: 16px 20px;
    p {
        font-size: 16px;
        font-weight: 700;
        line-height: 2.15;
        color: $dark-blue-button;
    }
    span {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: $light-blue;
        font-weight: 700;
        line-height: 2.17;
        svg {
            fill: $light-blue;
            path {
                transform: scale(.8);
            }
        }
    }
}
.blogs {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    align-content: center;
    direction: rtl;
}
.blog {
    border: 1px solid #e0e0e6;
    width: 315px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    img {
        border-radius: 8px 8px 0 0;
    }
    span {
        margin: 8px 0 12px;
        padding: 0 16px;
        direction: rtl;
        font-size: 14px;
        line-height: 2.17;
        color: $dark-blue-button;
    }
}
</style>