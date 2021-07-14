<template lang="pug">
  div
    Header
    Nuxt
    Footer
</template>
<script>
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
export default {
  components: { Footer, Header },
}
</script>
