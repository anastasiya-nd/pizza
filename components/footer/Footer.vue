<template lang="pug">
  div(
    class="bg-footer pt-10 pb-16 "
  )
    div(
      class="container flex justify-between flex-wrap relative"
    )
      Logo(
        class="order-1"
      )
      div(
        class="lg:w-2/3 lg:mt-0 mt-6 w-full flex justify-between md:flex-row flex-col lg:order-2 order-3"
      )
        div
          div(
            class="2xl:text-xl xl:text-lg text-base text-footer-category mb-3"
          ) Аксессуары
          ul(
            class="mr-10 xl:text-base text-xs"
          )
            n-link(
              tag="li"
              to="link.linkAddress"
              active-class="text-white"
              class="cursor-pointer transition-all duration-150"
              v-for="(link, index) in footerLinks1" :key="index"
            ) {{link.linkName}}
        div
          div(
            class="2xl:text-xl xl:text-lg text-base text-footer-category mb-3"
          ) Аксессуары
          div(
            class="flex"
          )
            ul(
              class="xl:mr-10 mr-5 xl:text-base text-xs"
            )
              n-link(
                tag="li"
                to="link.linkAddress"
                active-class="text-white"
                class="cursor-pointer transition-all duration-150"
                v-for="(link, index) in footerLinks2" :key="index"
              ) {{link.linkName}}
            ul(
              class="xl:text-base text-xs"
            )
              n-link(
                tag="li"
                to="link.linkAddress"
                active-class="text-white"
                class="cursor-pointer transition-all duration-150"
                v-for="(link, index) in footerLinks2" :key="index"
              ) {{link.linkName}}
        div(
          class="flex flex-col"
        )
          n-link(
            to="/"
            class="2xl:text-xl xl:text-lg text-base text-footer-category mb-3 cursor-pointer transition-all duration-150"
          ) Аксессуары
          n-link(
            to="/"
            class="2xl:text-xl xl:text-lg text-base text-footer-category mb-3 cursor-pointer transition-all duration-150"
          ) Аксессуары
          n-link(
            to="/"
            class="2xl:text-xl xl:text-lg text-base text-footer-category mb-3 cursor-pointer transition-all duration-150"
          ) Аксессуары

      div(
        class="flex lg:flex-col md:flex-row flex-col items-center lg:order-3 order-2 md:relative absolute right-0"
      )
        div(
          class="flex lg:mr-0 md:mr-5"
        )
          img(
            src="~assets/img/facebook.svg"
            class="lg:mr-5 mr-4"
          )
          img(
            src="~assets/img/facebook.svg"
            class="lg:mr-5 mr-4"
          )
          img(
            src="~assets/img/facebook.svg"
          )
        img(
          src="~assets/img/app-1.svg"
          class="mx-auto lg:mt-6 lg:mr-auto md:mt-0 md:mr-2.5 mt-6"
        )
        img(
          src="~assets/img/app-2.svg"
          class="mx-auto lg:mt-5 md:mt-0 mt-5"
        )

</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'Footer',
  components: { Logo },
  data: () => ({
    footerLinks1: [
      {
        linkName: 'Ooni Karu 12',
        linkAddress: '/',
      },
      {
        linkName: 'Ooni Koda 12',
        linkAddress: '/',
      },
      {
        linkName: 'Ooni Koda 16',
        linkAddress: '/',
      },
      {
        linkName: 'Ooni Fyra 12',
        linkAddress: '/',
      },
      {
        linkName: 'Ooni Pro 16',
        linkAddress: '/',
      },
    ],
    footerLinks2: [
      {
        linkName: 'Лопатки',
        linkAddress: '/',
      },
      {
        linkName: 'Чехлы',
        linkAddress: '/',
      },
      {
        linkName: 'Перчатки',
        linkAddress: '/',
      },
      {
        linkName: 'Весы',
        linkAddress: '/',
      },
      {
        linkName: 'Чугунная посуда',
        linkAddress: '/',
      },
      {
        linkName: 'И прочее',
        linkAddress: '/',
      },
    ],
    isMobile: false,
  }),
}
</script>

<style scoped></style>
