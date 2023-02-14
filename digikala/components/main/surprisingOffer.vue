<template>
  <div class="discount-container">
    <div class="slider-wrapper">
        <button class="prev" v-if="innerPosition != 1820" @click="switchToPrev()">
            <svg style="width: 24px; height: 24px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
        </button>
        <button class="next" v-if="innerPosition != 0" @click="switchToNext()">
            <svg style="width: 24px; height: 24px;"><path d="M12.583 12L8.29 16.293l1.414 1.414 5-5a1 1 0 000-1.414l-5-5L8.29 7.707 12.583 12z"></path></svg>
        </button>
        <div class="inner" ref="inner">
            <div class="box-title">
                <img src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" width="92px" height="77px" alt="">
                <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" width="145px" height="115px" alt="" class="mt-8">
                <span>
                    مشاهده همه 
                    <svg style="width: 18px; height: 18px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
                </span>
            </div>
            <div class="products-container">
                <div class="box-product" v-for="product in SurprisingProducts" :key="product.id">
                    <NuxtLink :to="{name: 'products-id', params: {id: product.id } }" class="nuxtLink">
                        <img :src="product.gallery[0]" alt="" height="150px" width="150px">
                        <div class="discounted-price">
                            <span>
                                {{ product.discounted_price.toLocaleString("en-US") }}
                                <svg style="width: 16px; height: 16px;"><path fill-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd" ></path></svg>
                            </span>
                            <div class="discount-percent-calculator">
                                {{ calculateDiscount(product.price, product.discounted_price) }}%
                            </div>
                        </div>
                        <div class="price">
                            {{ product.price.toLocaleString("en-US") }}
                        </div>
                    </NuxtLink>
                </div>
                <div class="seeAll">
                    <div class="arrow">
                        <svg style="width: 20px; height: 20px;"><path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></svg>
                    </div>
                    <p>مشاهده همه</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        SurprisingProducts: Array,
    },
    data() {
        return {
            innerPosition: 0,
            stepSize: 182,
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
.discount-container {
    margin: 24px 63px 0 63px;
    padding: 20px 2px;
    border-radius: 16px;
    background: linear-gradient(to top,$red-bg,$red-hover);
    display: flex;
    align-items: center;
}
.slider-wrapper {
//   width: 100%;
  overflow: hidden;
  height: 100%;
  position: relative;
}
.inner {
    display: flex;
    direction: rtl;
    align-items: center;
    z-index: 1;
}
.box-title {
    padding: 0 20px 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mt-8 {
        margin-top: 8px;
    }
    span {
        margin-top: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 800;
        color: white;
        svg {
            fill: white;
            path {
                transform: scale(.8);
            }
        }
    }
}
.products-container {
    display: flex;
    border-radius: 8px;
    background-color: white;

}
.box-product {
    padding: 12px 16px 24px 16px;
    border-left: 2px solid $red-bg;
}
.discounted-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 11px;
    span {
        color: $dark-blue-title;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 2px;
        svg {
            fill: $dark-blue-title;
        }
    }
    .discount-percent-calculator {
        height: 20px;
        width: 34px;
        color: white;
        background-color: $red-hover;
        border-radius: 16px;
        padding: 0 4px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.price {
    display: flex;
    justify-content: flex-end;
    padding-left: 20px;
    font-size: 12px;
    margin-top: 12px;
    color: #c3c3ce;
    text-decoration: line-through;
}
.seeAll {
    width: 192px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .arrow {
        border: 1px solid $light-blue;
        padding: 12px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        svg {
            fill: $light-blue;
            path {
                transform: scale(.8);
            }
        }
    }
    p {
        color: $dark-blue-title;
        margin-top: 12px;
        font-size: 14px;
        font-weight: 800;
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