<template lang="pug">
  div.relative.h-full
    img(
      :src="img"
      class="w-full h-full object-cover"
    )
    div(
      class="w-full absolute lg:top-20 md:top-16 sm:top-12 top-8 left-0 "
    )
      div(
        class="container"
      )
        div(
          class="font-bold text-white 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl 2xl:mb-9 md:mb-5 mb-2.5"
          v-html="title"
        )
        div(
          class="text-white 2xl:text-xl xl:text-lg lg:text-base text-xs xl:mb-12 lg:mb-10 sm:mb-7 mb-6"
          v-html="text"
        )
        Btn(
          :btnName="btnName"
          :btnAddress="btnAddress"
        )
</template>

<script>
import Btn from '~/components/Btn'
export default {
  name: 'MainSlide',
  components: { Btn },
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    btnName: {
      type: String,
      required: true,
    },
    btnAddress: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
