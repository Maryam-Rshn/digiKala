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
      <SurprisingOffer :SurprisingProducts = "SurprisingProducts"/>
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
      <mostVisited>
        <div class="sub-category" v-for="category in fristMostVisited" :key="category.category_name">
          <h4>{{ category.sub_category_name }}</h4>
          <p>بر اساس بازدیدهای شما</p>
          <div class="sub-category-gallery">
            <div class="sub-category-image" v-for="image in category.gallery" :key="image">
              <img :src="image" alt="">
            </div>
          </div>
          <div class="seeAll">
            <span>مشاهده</span>
            <svg style="width: 18px; height: 18px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
          </div>
        </div>
      </mostVisited>
      <specialDelivery :specialDeliveries="specialDeliveries" />
      <digiclub :digiClub="digiClub"/>
      <mostVisited>
        <div class="sub-category" v-for="category in secondMostVisited" :key="category.category_name">
          <h4>{{ category.sub_category_name }}</h4>
          <p>بر اساس بازدیدهای شما</p>
          <div class="sub-category-gallery">
            <div class="sub-category-image" v-for="image in category.gallery" :key="image">
              <img :src="image" alt="">
            </div>
          </div>
          <div class="seeAll">
            <span>مشاهده</span>
            <svg style="width: 18px; height: 18px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
          </div>
        </div>
      </mostVisited>
      <bestSelling :bestSelling="bestSelling" />
      <Banners>
        <div class="banner" v-for="banner in fourthBanner" :key="banner.url">
          <img :src="banner.url" :width="banner.width" alt="">
        </div>
      </Banners>
      <discountedProducts :discountedProducts="discountedProducts" />
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
      ],
      fourthBanner: [
        {url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/a99fae011b87c8315f36486129126d041357055a_1675262625.jpg?x-oss-process=image/quality,q_95', width: '1310px'}
      ],
      digiClub: [
        {
          svg_path: '<path fill-rule="evenodd" d="M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z" clip-rule="evenodd"></path>',
          text: 'چرخ و بخت',
          img_url: 'https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg'
        },
        {
          svg_path: '<path fill-rule="evenodd" d="M18.994 1.888l.006.114v3h3c.813 0 1.256.898.848 1.534l-.065.089-.076.084-3 3a1 1 0 01-.576.284l-.131.009h-3.586l-3.707 3.707a1 1 0 01-1.497-1.32l.083-.094L14 8.586V5.002a1 1 0 01.206-.608l.087-.1 3-3c.575-.574 1.523-.252 1.684.486l.017.108zm-6.493 2.239a9 9 0 107.375 7.376l-2.037-.001A7 7 0 1112.5 6.163V4.127zm-.205 4.045A5 5 0 1016 13.002l-.01-.307a4.984 4.984 0 00-.137-.9l-.024-.087-1.888 1.89a3.001 3.001 0 11-3.536-3.537l1.89-1.889zM16 5.416l1-1v1.586l.007.117.02.112a1 1 0 00.973.771h1.584l-1 1H16V5.416z" clip-rule="evenodd"></path>',
          text: 'ماموریت ها',
          img_url: 'https://www.digikala.com/statics/img/png/digiclub/missions.png'
        },
        {
          svg_path: '<path fill-rule="evenodd" d="M10 4h10a3 3 0 013 3v10a3 3 0 01-3 3H10a1 1 0 01-1-1 1 1 0 10-2 0 1 1 0 01-1 1H4a3 3 0 01-3-3V7a3 3 0 013-3h2a1 1 0 011 1 1 1 0 002 0 1 1 0 011-1zM8 8a3.001 3.001 0 01-2.83-2H4a1 1 0 00-1 1v10a1 1 0 001 1h1.17a3.001 3.001 0 015.66 0H20a1 1 0 001-1V7a1 1 0 00-1-1h-9.17A3.001 3.001 0 018 8zm5.5 2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6.848-.03l1.696 1.06 5-8-1.696-1.06-5 8zM7 15v-2h2v2H7zm0-6v2h2V9H7z" clip-rule="evenodd"></path>',
          text: 'جایزه ها',
          img_url: 'https://www.digikala.com/statics/img/png/digiclub/awards.png'
        }
      ]
    }
  },
  computed: {
    carouselData(){
      return this.$store.state.test.carouselData;
    },
    SurprisingProducts(){
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
    fristMostVisited(){
      return this.$store.state.test.sub_categories.filter((category) => {
        return category.most_visited === true
      }).slice(0,4)
    },
    specialDeliveries(){
      return this.$store.state.products.products.filter((product) => {
        return product.special_delivery === true
      }).slice(0,12)
    },
    secondMostVisited(){
      return this.$store.state.test.sub_categories.filter((category) => {
        return category.most_visited === true
      }).slice(4)
    },
    bestSelling(){
      return this.$store.state.products.products.filter((product) => {
        return product.best_selling === true
      })
    },
    discountedProducts(){
      return this.$store.state.products.products.filter((product) => {
        return product.discounted_price !== ''
      }).slice(0,12)
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
    mostVisited:() => import('@/components/main/mostVisited.vue'),
    specialDelivery:() => import('@/components/main/specialDelivery.vue'),
    digiclub:() => import('@/components/main/digiclub.vue'),
    bestSelling:() => import('@/components/main/bestSelling.vue'),
    discountedProducts:() => import('@/components/main/discountedProducts.vue'),


  },
  async asyncData({store}) {
    await store.dispatch('test/getCategories')
    await store.dispatch('products/getProducts')
  },
  mounted() {
    console.log(this.discountedProducts, 'discountedProducts');
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