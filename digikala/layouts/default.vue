<template>
    <div>
        <Navbar>
            <Menu/>
        </Navbar>
        <nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    components: {
         Footer:() => import('@/components/footer/Footer.vue'),
      Navbar:() => import('@/components/header/navbar.vue'),
      Menu:() => import('@/components/header/Menu.vue'),
    },
}

</script>