<template>
  <div>
    <product :categoryProduct="categoryProduct" />
  </div>
</template>

<script>
export default {
    components: {
      product:() => import('@/components/products/product.vue'),
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