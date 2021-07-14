<template lang="pug">
  div.bg-body
    div(
      class="2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8"
    )
      section.padding
        .container(
          class=""
        )
          h2(
            class="title  text-title"
          ) Контакты
          div(
            class="grid md:grid-cols-2 grid-cols-1 xl:gap-x-10 gap-x-5"
          )
            div
              div(
                class="rounded-md bg-white 2xl:text-xl xl:text-lg lg:text-base text-sm p-5"
              ) Если вам нужен вкус пиццы на дровах или максимальное удобство, работающее на газе, - добро пожаловать в печь для пиццы, которая делает пиццу еще лучше. Какой-то текст про контакты
              div(
                class="rounded-md bg-white p-5 mt-10"
              )
                div(
                  class="font-bold text-title xl:text-3xl lg:text-xl md:text-base text-xs mb-1.5"
                ) Москва
                div(
                  class="2xl:text-xl xl:text-lg lg:text-base text-xs mb-1"
                ) Краснопресненская наб., 12
                div(
                  class="2xl:text-xl xl:text-lg lg:text-base text-xs mb-2.5"
                ) +7 495 191 10 15
                n-link(
                  :to="item.socialAddress"
                  class="block text-text-dark 2xl:text-xl xl:text-lg lg:text-base text-xs"
                  :class="{'pb-2.5': index !== socials.length}"
                  v-for="(item, index) in socials" :key="index"
                ) {{item.socialName}}

</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        socialName: 'Telegram ',
        socialAddress: '/',
      },
      {
        socialName: 'Viber ',
        socialAddress: '/',
      },
      {
        socialName: 'WhatsApp',
        socialAddress: '/',
      },
      {
        socialName: 'Instagram',
        socialAddress: '/',
      },
    ],
  }),
}
</script>
