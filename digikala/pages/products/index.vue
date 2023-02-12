<template>
  <div>
    <Navbar>
      <Menu/>
    </Navbar>
    <products :categoryProducts="categoryProducts"/>
  </div>
</template>

<script>
export default {
    components: {
      Navbar:() => import('@/components/header/navbar.vue'),
      Menu:() => import('@/components/header/Menu.vue'),
      products:() => import('@/components/products/ProductsTemplate.vue'),
    },
    computed: {
      categoryProducts() {
        return this.$store.state.products.products.filter((product) => {
          return product.category_name === this.$route.params.category
        });
      }
    },
    created() {
      console.log(this.$route.params.category, 'this is params')
    },

}
</script>

<style>

</style>