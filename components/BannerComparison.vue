<template lang="pug">
  div(
    class="bg-block flex md:items-center md:flex-row flex-col relative rounded-md overflow-hidden xl:p-12 lg:py-7 lg:px-10 md:px-7 md:py-6 p-5"
  )
    div(
      class="relative xl:pr-0 xl:pr-10 md:pr-5 md:w-auto w-3/4 text-white z-10"
    )
      h2(
        class="text-white title xl:mb-5 md:mb-2.5 mb-1.5"
      ) Сравните печи
      p(
        class="2xl:text-xl xl:text-md lg:text-base text-xs font-normal"
      ) Какая печь для пиццы Ooni подходит именно вам?
        br
      Btn(
        btnName="Сравнить"
        btnAddress="/"
        class="xl:mt-10 mt-5"
      )
    img(
      src="~assets/img/banner-img-1.svg"
      class="xl:w-1/2 lg:w-2/3 md:w-7/12 w-full md:mt-0 mt-5"
    )
</template>

<script>
import Btn from '~/components/Btn'
export default {
  name: 'BannerComparison',
  components: { Btn },
}
</script>

<style scoped></style>
