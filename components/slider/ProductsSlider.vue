<template lang="pug">
  div.relative
    Swiper(
      :options="sliderOptions"
      ref="slider"
      style="margin-left: 0 !important;"
      class="2xl:h-160 xl:h-136 lg:h-120 md:h-96 sm:h-80 h-72"
    )
      SwiperSlide(
        v-for="(product, index) in products" :key="index"
      )
        CardProduct(
          :img="product.img"
          :title="product.title"
          :price="product.price"
          class="w-40"
        )
</template>

<script>
import CardProduct from '~/components/cards/CardProduct'
export default {
  name: 'ProductsSlider',
  components: { CardProduct },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sliderOptions: {
      speed: 1000,
      spaceBetween: 0,
      slidesPerView: 'auto',
    },
  }),
}
</script>

<style scoped></style>
