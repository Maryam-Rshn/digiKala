<template>
  <div class="digiclub-container">
    <img class="digiclub-logo" src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg" width="119px" height="33px" alt="">
    <div class="digiclub-links">
        <div class="digiclub-link" v-for="link in digiClub" :key="link.text">
            <div class="text">
                <svg v-html="link.svg_path" style="width: 20px; height: 20px;"></svg>
                <span>{{ link.text }}</span>
            </div>
            <img :src="link.img_url" width="168px" height="60px" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        digiClub: Array,
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.digiclub-container {
    margin: 8px 64px 0;
    padding: 12px 16px;
    border-radius: 16px;
    background: linear-gradient(76.02deg,#35a6c8 33.32%,#007295 71.55%),radial-gradient(21.29% 87.33% at 50% 50.67%,#7cf2f6 0,#35a6c8 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    direction: rtl;
}
.digiclub-logo {
    margin-right: 24px;
}
.digiclub-links {
    display: flex;
    align-items: center;
    gap: 4px;
    :first-child {
        border-radius: 0 8px 8px 0;
    }
    :last-child {
        border-radius: 8px 0 0 8px;
    }
}
.digiclub-link {
    display: flex;
    align-items: center;
    background-color: white;
    .text {
        margin-right: 16px;
        display: flex;
        align-items: center;
        svg {
            fill: $light-blue;
            :only-child {
                transform: scale(.8);
            }
        }
        span {
            font-size: 12px;
            color: $dark-blue-button;
            font-weight: 700;
            margin-right: 8px;
        }
    }
}
</style>