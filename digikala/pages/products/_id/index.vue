<template>
  <div>
    <Navbar>
      <Menu/>
    </Navbar>
    <product :categoryProduct="categoryProduct" />
    <Footer />
  </div>
</template>

<script>
export default {
    components: {
      Navbar:() => import('@/components/header/navbar.vue'),
      Menu:() => import('@/components/header/Menu.vue'),
      product:() => import('@/components/products/product.vue'),
      Footer:() => import('@/components/footer/Footer.vue'),
    },
    computed: {
      categoryProduct() {
        return this.$store.state.products.products.filter((product) => {
          return product.id === this.$route.params.id
        });
      }
    },
    created() {
      console.log(this.$route.params.id, 'this is params')
    },

}
</script>

<style>

</style>