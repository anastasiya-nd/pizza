<template lang="pug">
  n-link(
    tag="div"
    to="/"
    active-class="text-white"
    class="relative overflow-hidden rounded-md cursor-pointer transition-all duration-150"
  )
    img(
        :src="img"
        class="h-full md:max-h-full max-h-32 w-full object-cover"
      )
    h4(
      class="absolute 2xl:right-10 md:right-5 md:bottom-5 right-2.5 bottom-2.5 font-bold xl:text-3xl lg:text-xl text-base"
    ) {{ title }}
</template>

<script>
export default {
  name: 'ImgTitle',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
