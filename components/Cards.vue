<template lang="pug">
  div(
    class="grid md:grid-cols-2 grid-cols-1 xl:gap-10 gap-5"
  )
    ImgTitle(
      v-for="(card, index) in cards" :key="index"
      :img="card.img"
      :title="card.title"
      class="h-full"
    )
</template>

<script>
import ImgTitle from '~/components/cards/ImgTitle'
export default {
  name: 'Cards',
  components: { ImgTitle },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
