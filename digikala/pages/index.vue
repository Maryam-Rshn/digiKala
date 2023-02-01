<template>
  <div>
    <Navbar>
      <Menu/>
    </Navbar>
    <main>
      <Carousel :optionsObject = "optionsObject">
        <div class="slides" v-for="item in carouselData" :key="item.id">
          <img :src="item.img_url" alt="">
        </div>
      </Carousel>
      <SurprisingOffer :discountedProducts = "discountedProducts"/>
      <marketOffer :marketProducts = "marketProducts"/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      optionsObject : {
        // breakpoint: 1200,
        itemsPerSlide: 1,
        itemsPerStep: 1,
        loop: true,
        dots: true,
        itemsMargin: null,
        arrows: true
      },
    }
  },
  computed: {
    carouselData(){
        return this.$store.state.test.carouselData;
    },
    discountedProducts(){
        return this.$store.state.products.products.filter((product) => {
          return product.discounted_price !== ''
        });
    },
    marketProducts(){
        return this.$store.state.products.products.filter((product) => {
          if(product.discounted_price !== '' && product.category_name === 'کالاهای سوپرمارکتی') {
            return product
          }
        });
    },
  },
  components: {
    Navbar:() => import('@/components/header/navbar.vue'),
    Menu:() => import('@/components/header/Menu.vue'),
    Carousel:() => import('@/components/main/Carousel.vue'),
    SurprisingOffer:() => import('@/components/main/surprisingOffer.vue'),
    marketOffer:() => import('@/components/main/marketOffer.vue')
  },
  async asyncData({store}) {
    await store.dispatch('test/getCategories')
    await store.dispatch('products/getProducts')
  },
  mounted() {
    console.log(this.carouselData, 'this is carousel data');
    console.log(this.marketProducts, 'market');
  }
}
</script>
<style lang="scss">
* {
  font-family: iranyekan,sans-serif;
}
body {
  margin: 0;
}
main {
  padding-top: 108px;
  z-index: 0;
}
</style>