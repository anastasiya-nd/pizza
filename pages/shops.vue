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
          ) Где купить
          div(
            class="grid md:grid-cols-2 grid-cols-1 xl:gap-x-10 gap-x-5"
          )
            div(
              class="rounded-md bg-white p-5"
            )
              div(
                :class="{'xl:mt-8 md:mt-5 mt-4': index !== 0}"
                v-for="(item, index) in info" :key="index"
              )
                div(
                  class="font-bold text-title xl:text-3xl lg:text-xl md:text-base text-xs mb-1.5"
                ) {{item.city}}
                div(
                  class="2xl:text-xl xl:text-lg lg:text-base text-xs mb-1"
                ) {{item.address}}
                div(
                  class="2xl:text-xl xl:text-lg lg:text-base text-xs"
                ) {{item.phone}}

</template>

<script>
export default {
  data: () => ({
    info: [
      {
        city: 'Москва',
        address: 'Краснопресненская наб., 12',
        phone: '+7 495 191 10 15',
      },
      {
        city: 'Самара',
        address: 'Краснопресненская наб., 12',
        phone: '+7 495 191 10 15',
      },
      {
        city: 'Нижний Новгород',
        address: 'Краснопресненская наб., 12',
        phone: '+7 495 191 10 15',
      },
      {
        city: 'Санкт-Петербург',
        address: 'Краснопресненская наб., 12',
        phone: '+7 495 191 10 15',
      },
      {
        city: 'Воронеж',
        address: 'Краснопресненская наб., 12',
        phone: '+7 495 191 10 15',
      },
    ],
  }),
}
</script>
