<template lang="pug">
  div(
    class="z-0 w-full absolute lg:bg-transparent bg-menu lg:relative left-0  lg:pt-0 transition-all duration-750 "
    :class="{'top-full z-50 transform translate-y-0': active, 'top-0 transform -translate-y-full': !active}"
  )
    ul(
      class="flex lg:flex-row flex-col lg:justify-end lg:py-0 pt-10 pb-16 menu-container"
    )
      n-link(
        tag="li"
        v-for="(link, index) in menuLinks" :key="index"
        :to="link.linkAddress"
        active-class="text-white"
        class="2xl:text-xl xl:text-lg text-base xl:ml-9 lg:ml-7 lg:text-white text-mobile-menu cursor-pointer transition-all duration-150"
        :class="{'lg:pt-0 pt-4': index !==  0}"
      ) {{link.linkName}}
</template>

<script>
export default {
  name: 'Menu',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    menuLinks: [
      {
        linkName: 'Печи Ooni',
        linkAddress: '/catalog',
      },
      {
        linkName: 'Аксессуары',
        linkAddress: '/accessories',
      },
      {
        linkName: 'Рецепты',
        linkAddress: '/recipes',
      },
      {
        linkName: 'Где купить',
        linkAddress: '/shops',
      },
      {
        linkName: 'Контакты',
        linkAddress: '/contacts',
      },
    ],
    isMobile: false,
  }),
  watch: {
    active() {
      if (this.active) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  },
  mounted() {
    this.isMobile = self.innerWidth <= 1024
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    closeMenu() {
      this.$emit('close')
    },
    handleResize() {
      this.isMobile = self.innerWidth <= 1024
    },
  },
}
</script>
