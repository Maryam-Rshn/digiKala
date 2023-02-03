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
      <Banners>
        <div class="banner" v-for="banner in firstBanner" :key="banner.url">
          <img :src="banner.url" :width="banner.width" alt="">
        </div>
      </Banners>
      <Categories :categories ="categories"/>
      <Banners>
        <div class="banner" v-for="banner in secondBanner" :key="banner.url">
          <img :src="banner.url" :width="banner.width" alt="">
        </div>
      </Banners>
      <DigikalaOffer :digikalaOffers="digikalaOffers"  />
      <popularBrand :popularBrands="popularBrands"  />
      <Banners>
        <div class="banner" v-for="banner in thirdBanner" :key="banner.url">
          <img :src="banner.url" :width="banner.width" alt="">
        </div>
      </Banners>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      optionsObject : {
        itemsPerSlide: 1,
        itemsPerStep: 1,
        loop: true,
        dots: true,
        itemsMargin: null,
        arrows: true
      },
      firstBanner: [
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/16754df29710cedcbb75c2c001f518cfe7f5af09_1674633358.jpg?x-oss-process=image/quality,q_95', width: '314px'},
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/3b329d6f1826df61ca90e5ee71790ab23bc53347_1674847346.jpg?x-oss-process=image/quality,q_95', width: '314px'},
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/2492ce832541980e22e27e8a9ed582f86b7ef003_1674914519.jpg?x-oss-process=image/quality,q_95', width: '314px'},
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/68e429afedae46fc1d0f151d84663b307f0b4c35_1674848296.jpg?x-oss-process=image/quality,q_95', width: '314px'}
      ],
      secondBanner: [
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b7aa86fb7e6a4411f93241dbe9246a08efeeba67_1674847601.jpg?x-oss-process=image/quality,q_95', width: '644px'},
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/04b9f74a3e7a9800e46edc7c6788afd97e0f271d_1674896265.jpg?x-oss-process=image/quality,q_95', width: '644px'}
      ],
      thirdBanner: [
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b2440fd28e00b20d23107b067b8ee418a8ac9396_1674636606.jpg?x-oss-process=image/quality,q_95', width: '644px'},
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/95519d402c9db4c317e06d0f70e2870ad11ced7f_1674847897.jpg?x-oss-process=image/quality,q_95', width: '644px'}
      ]
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
    categories(){
      return this.$store.state.test.categories;
    },
    digikalaOffers(){
      return this.$store.state.test.sub_categories.filter((category) => {
        return category.digi_offer === true
      })
    },
    popularBrands(){
      return this.$store.state.products.products.filter((product) => {
        return product.most_popular === true
      });
    },
  },
  components: {
    Navbar:() => import('@/components/header/navbar.vue'),
    Menu:() => import('@/components/header/Menu.vue'),
    Carousel:() => import('@/components/main/Carousel.vue'),
    SurprisingOffer:() => import('@/components/main/surprisingOffer.vue'),
    marketOffer:() => import('@/components/main/marketOffer.vue'),
    Banners:() => import('@/components/main/Banners.vue'),
    Categories:() => import('@/components/main/Categories.vue'),
    DigikalaOffer:() => import('@/components/main/digikalaOffer.vue'),
    popularBrand:() => import('@/components/main/popularBrand.vue'),

  },
  async asyncData({store}) {
    await store.dispatch('test/getCategories')
    await store.dispatch('products/getProducts')
  },
  mounted() {
    console.log(this.popularBrands, 'popularBrands');
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