<template>
  <div>
    <Navbar>
      <Menu/>
    </Navbar>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    Navbar:() => import('@/components/header/navbar.vue'),
    Menu:() => import('@/components/header/Menu.vue')
  },
  async asyncData({store}) {
    await store.dispatch('test/getCategories')
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
</style>