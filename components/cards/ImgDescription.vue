<template lang="pug">
  div(
    class="bg-white rounded-md flex flex-col"
  )
    img(
      :src="img"
      class="w-full"
    )
    div(
      class="w-full 2xl:py-5 py-2.5 2xl:px-2 lg:px-12 md:px-3.5 flex items-center md:flex-row flex-col h-full"
    )
      div(
        v-html="text"
        class="font-bold text-title text-center xl:text-base text-xs"
      )

</template>

<script>
export default {
  name: 'ImgDescription',
  props: {
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
