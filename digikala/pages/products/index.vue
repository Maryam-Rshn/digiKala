<template>
  <div>
    <Navbar>
      <Menu/>
    </Navbar>
    <products />
  </div>
</template>

<script>
export default {
    components: {
      Navbar:() => import('@/components/header/navbar.vue'),
      Menu:() => import('@/components/header/Menu.vue'),
      products:() => import('@/components/main/ProductsTemplate.vue'),
    }

}
</script>

<style>

</style>