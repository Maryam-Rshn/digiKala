<template>
  <div>
    <product :categoryProduct="categoryProduct" :productComments="productComments"/>
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
      },
      productComments() {
        return this.$store.state.comments.comments.filter((comment) => {
          return comment.product_id === this.$route.params.id
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