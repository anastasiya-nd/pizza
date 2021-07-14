<template lang="pug">
  n-link(
    to="linkAddress"
    class="block"
  )
    div(
      class="bg-white rounded-md"
    )
      img(
        :src="img"
        class="w-full"
      )
      div(
        class="flex items-center xl:p-5 py-3 px-2.5  2xl:text-xl xl:text-lg lg:text-base text-xs"
        v-html="title"
      )
</template>

<script>
export default {
  name: 'RecipesBlock',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    linkAddress: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
