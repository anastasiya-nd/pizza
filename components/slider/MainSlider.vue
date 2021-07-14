<template lang="pug">
  div.relative
    Swiper(
      :options="sliderOptions"
      ref="slider"
      style="margin-left: 0 !important;"
      class="2xl:h-160 xl:h-136 lg:h-120 md:h-96 sm:h-80 h-72"
    )
      SwiperSlide(
        v-for="(slide, index) in slides" :key="index"
      )
        MainSlide(
          :img="slide.img"
          :title="slide.title"
          :text="slide.text"
          :btnName="slide.btnName"
          :btnAddress="slide.btnAddress"
        )
    .container.relative
      div.swiper-pagination-1.z-10(
        slot="pagination"
      )
</template>

<script>
import MainSlide from '~/components/slider/MainSlide'
export default {
  name: 'MainSlider',
  components: { MainSlide },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sliderOptions: {
      keyboard: true,
      speed: 1000,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination-1',
      },
    },
  }),
}
</script>

<style scoped></style>
