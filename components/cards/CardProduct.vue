<template lang="pug">
  n-link(
    to="/"
    class="flex flex-col rounded-md bg-white"
  )

    img(
      :src="img"
      class="w-full"
    )
    div(
      class="2xl:p-5 xl:py-5 xl:px-4 md:p-3"
    )
      //h1 {{type}}
      div(
        v-if="type"
        class="xl:text-3xl lg:text-xl text-base lg:mb-5 mb-2.5"
      ) {{type}}
      h4(
        class="2xl:text-xl xl:text-lg lg:text-base text-xs"
      ) {{title}}
      span(
        class="block font-bold text-text-dark 2xl:mt-5 mt-2.5 xl:text-3xl lg:text-xl text-base"
      ) {{price}}
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    type: {
      type: [String, Boolean],
      required: false,
    },
  },
  mounted() {
    console.log(this.type)
  },
}
</script>

<style scoped></style>
