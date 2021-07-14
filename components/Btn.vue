<template lang="pug">
  div
    n-link(
      :to="btnAddress"
      v-if="btnAddress"
      tag="button"
      class="text-btn rounded-md lg:py-4 py-3 lg:px-10 px-8 uppercase 2xl:text-xl lg:text-base text-xs bg-btn"
    ) {{ btnName }}

    button(
      v-else
      class="text-btn rounded-md lg:py-4 py-3 lg:px-10 px-8 uppercase 2xl:text-xl lg:text-base text-xs bg-btn"
    ) {{ btnName }}
</template>

<script>
export default {
  name: 'Btn',
  props: {
    btnName: {
      type: String,
      required: true,
    },
    btnAddress: {
      type: [String, undefined],
      default: '',
    },
  },
}
</script>

<style scoped></style>
