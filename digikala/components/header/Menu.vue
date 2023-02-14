<template>
  <div class=" hamburgerMenu dir-rtl">
    <div class="menu-categories">
      <div v-for="category in categories" :key="category.id" @mouseover="showProduct(category.id)"  class="dir-rtl category">
        <NuxtLink :to="{name: 'products', params: {category: category.name } }" class="nuxtLink">
          <svg v-html="category.svg_path" style="width: 18px; height: 18px; "></svg>
          <span>{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>
    <div v-for="category in selectedCategory" :key="category.id" class="menu-product" >
      <div class="allProducts">
        <p>همه محصولات {{ category.name }}</p>
        <svg style="width: 16px; height: 16px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
      </div>
      <div class="products">
        <div v-for="(sub_category, index) in category.sub_categories" :key="index">
          <h2>
            {{ sub_category.title }}
            <svg style="width: 16px; height: 16px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
          </h2>
          <ul v-for="(text, index) in sub_category.subtitle" :key="index">
            <li>{{ text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      selectedCategory: [],
    }
  },
  computed: {
    categories(){
        return this.$store.state.test.categories;
    },
  },
  methods: {
    showProduct(e) {
      this.selectedCategory = this.categories.filter((category) => {
        return category.id === e
      })
      console.log("🚀 ~ file: Menu.vue:49 ~ this.selectedCategory=this.categories.filter ~ this.selectedCategory", this.selectedCategory)
      console.log("this.categories", this.categories)
      
    }
  },
  mounted() {
    console.log();
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.hamburgerMenu {
  display: flex;
  border-radius: 0 0 8px 8px;
  height: 100%;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 30%);
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 16px;
    background-color: #c3c3ce;
  }
  ::-webkit-scrollbar-track {
    background-color: $gray-bg;
  }
}
.dir-rtl {
  direction: rtl;
}
.menu-categories {
  height: 100%;
  width: 210px;
  overflow: auto;
  direction: ltr;
}
.category {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 8px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    span {
      color: $red-hover;
    }
    svg {
      fill: $red-hover;
    }
    background-color: rgb(241, 242, 244, .5);
  }
  svg {
    margin-left: 8px;
    fill: $dark-blue-title;
    path {
      transform: scale(.8);
    }
  }
  span {
    color: $dark-blue-title;
    font-size: 12px;
    font-weight: 700;
    line-height: 2.17;
  }
}
.menu-product {
  padding: 20px;
  overflow: auto;
  border-right: 1px solid #e0e0e6;
  .allProducts {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    p {
      font-size: 12px;
      font-weight: 700;
      color: $dark-blue-title;
      cursor: pointer;
    }
    svg {
      margin-right: 8px;
      margin-bottom: 4px;
      fill: $dark-blue-title;
      path {
        transform: scale(.8);
      }
    }
  }
  .products {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 440px;
    width: 868px;
    h2 {
      font-size: 14px;
      font-weight: 700;
      color: $dark-blue-button;
      margin-top: 4px;
      height: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: $red-hover;
      }
      svg {
        margin-right: 4px;
        margin-bottom: 3px;
        fill: $dark-blue-button;
        path {
          transform: scale(.8);
        }
      }
      &:before {
        content: "";
        display: block;
        width: 2px;
        height: 14px;
        margin-left: 8px;
        background-color: $red-hover;
      }
    }
    li {
      font-size: 12px;
      color: $gray-subtitle;
      font-weight: 700;
      list-style: none;
      margin-top: 4px;
      height: 26px;
      cursor: pointer;
      &:hover {
        color: $red-hover;
      }
    }
  }
}
</style>