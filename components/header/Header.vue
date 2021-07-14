<template lang="pug">
  div
    header(
      class="bg-header lg:py-4 py-2 relative"
    )
      .container(
        class="flex justify-between items-center"
      )
        Logo
        div(
          class="lg:hidden w-16 h-10 flex justify-end items-center"
          @click="menuOpen = !menuOpen"
        )
          button(
            v-if="!menuOpen"
          )
            img(
              alt="whopper"
              src="~assets/img/menu.svg"
            )
          button(
            v-else
            class="z-50 relative"
          )
            img(
              alt="cross"
              src="~assets/img/menu-close.svg"
            )
        Menu(
          :active="menuOpen"
          @closeMenu="menuOpen = false"
        )
</template>

<script>
import Logo from '~/components/Logo'
import Menu from '~/components/header/Menu'
export default {
  name: 'Header',
  components: { Menu, Logo },
  data: () => ({
    menuOpen: false,
    active: false,
  }),
}
</script>

<style scoped></style>
