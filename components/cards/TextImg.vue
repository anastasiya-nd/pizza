<template lang="pug">
  div(
    class="bg-white rounded-md flex md:flex-row flex-col"
    :class="{'md:flex-row-reverse' : reverse}"
  )
    div(
      class="2xl:w-2/5 md:w-1/3 md:h-auto h-36"
    )
      img(
        :src="img"
        class="w-full h-full object-cover"
      )
    div(
      class="2xl:w-3/5 md:w-2/3 flex flex-col justify-center 2xl:px-16 xl:px-10 lg:px-5 2xl:py-16 xl:py-12 lg:py-9 p-5"
    )
      h3(
        class="xl:mb-5 mb-2.5 font-bold text-title xl:text-3xl lg:text-xl text-base"
      ) {{title}}
      div(
        v-html="text"
        class="xl:text-base text-xs"
      )
</template>

<script>
export default {
  name: 'TextImg',
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
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped></style>
