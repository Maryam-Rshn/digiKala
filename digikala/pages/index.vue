<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    Navbar:() => import('@/components/header/navbar.vue')
  }
}
</script>
<style>
* {
  font-family: iranyekan,sans-serif;
}
body {
  margin: 0;
}
</style>