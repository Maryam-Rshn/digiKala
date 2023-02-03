<template>
  <div class="poplarBrand-container">
    <div class="popular-brand-title">
      <svg style="width: 24px; height: 24px;"><path d="M7.278 6.192L4.5 3.414 5.914 2l2.778 2.778-1.414 1.414z"></path><path fill-rule="evenodd" d="M14.497 4.675l1.028 3.162h3.325c2.034 0 2.88 2.603 1.234 3.799l-2.69 1.954 1.028 3.163c.628 1.934-1.586 3.543-3.232 2.347l-2.69-1.954L9.81 19.1c-1.646 1.196-3.86-.413-3.232-2.348l1.028-3.162-2.69-1.954c-1.646-1.196-.8-3.799 1.234-3.8h3.325l1.028-3.161c.629-1.935 3.365-1.935 3.994 0zm-3.641 5.162a.1.1 0 00.095-.07l1.454-4.474a.1.1 0 01.19 0l1.454 4.475a.1.1 0 00.095.069h4.706a.1.1 0 01.058.18l-3.806 2.767a.1.1 0 00-.036.111l1.453 4.476a.1.1 0 01-.153.111l-3.807-2.765a.1.1 0 00-.118 0l-3.807 2.765a.1.1 0 01-.153-.111l1.453-4.476a.1.1 0 00-.036-.111l-3.806-2.766a.1.1 0 01.058-.181h4.706z" clip-rule="evenodd"></path><path d="M19.167 15.244l3.333 2.222 1.11-1.664-3.334-2.223-1.11 1.665zM5.833 15.244L2.5 17.466l-1.11-1.664 3.334-2.223 1.11 1.665zM11.5 20v3h2v-3h-2zM18.192 6.192l2.778-2.778L19.556 2l-2.778 2.778 1.414 1.414z"></path></svg>
      <p>محبوب‌ترین برندها</p>
    </div>
    <div class="slider-wrapper">
      <button class="prev" v-if="innerPosition != 393" @click="switchToPrev()">
          <svg style="width: 24px; height: 24px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
      </button>
      <button class="next" v-if="innerPosition != 0" @click="switchToNext()">
          <svg style="width: 24px; height: 24px;"><path d="M12.583 12L8.29 16.293l1.414 1.414 5-5a1 1 0 000-1.414l-5-5L8.29 7.707 12.583 12z"></path></svg>
      </button>
      <div class="inner" ref="inner">
        <div class="brands-container">
          <div class="brand-box" v-for="product in popularBrands" :key="product.id">
            <img :src="product.brand_logo" alt="" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popularBrands: Array,
  },
  data() {
      return {
          innerPosition: 0,
          stepSize: 131,
          isSwitchToPrevAllowed: true,
          isSwitchToNextAllowed: false
      }
  },
  methods: {
      switchToNext() {
          this.innerPosition = 0
          this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
          console.log(this.innerPosition);
      },

      switchToPrev() {
          this.innerPosition += this.stepSize
          this.$refs.inner.style.cssText = `transform: translateX(+${ this.innerPosition }px)`;
          console.log(this.innerPosition,'innerposition');
      },
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
  },
  mounted() {
      console.log(this.calculateDiscount(7358000, 2575300),'this is discount number ');
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

* {
    font-family: iranyekan,sans-serif;
}
.poplarBrand-container {
  margin: 24px 64px 0;
  padding: 24px 0;
  border: 1px solid #e0e0e6;
  border-radius: 16px;
}
.popular-brand-title {
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  gap: 8px;
  height: 44px;
  svg {
    fill: #f9bc00;
  }
  p {
    color: $dark-blue-button;
    font-size: 21px;
    font-weight: 700;
  }
}
.slider-wrapper {
//   width: 100%;
  overflow: hidden;
  height: 100%;
  position: relative;
  margin-top: 12px;
}
.inner {
    display: flex;
    direction: rtl;
    align-items: center;
    z-index: 1;
}

.brands-container {
    display: flex;
    background-color: white;

}
.brand-box {
    padding: 4px 16px;
    border-left: 1px solid $gray-bg;
    width: 142px;
    height: 142px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
}

button {
    background-color: white;
    height: 40px;
    width: 40px;
    border: 1px solid #c3c3ce;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      fill: $dark-blue-title;
    }
}
.prev {
    position: absolute;
    left: 8px;
    top: 45%;
    z-index: 2;
}
.next {
    position: absolute;
    right: 8px;
    top: 45%;
    z-index: 2;
}
</style>