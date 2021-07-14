<template lang="pug">
  div.bg-body.relative
    div(
      class=""
    )
      .container
        img(
          src="~assets/img/catalog-img-1.jpg"
        )
    div(
      class="2xl:pb-20 xl:py-16 lg:py-12 md:py-10 py-8"
    )
      section
        .container(
          class=""
        )
          h2(
            class="title  text-title"
          ) Печи Ooni
          div(
            class="grid grid-cols-4 xl:gap-x-10 2xl:gap-y-20 xl:gap-y-16 lg:gap-y-10 gap-y-7 gap-5"
          )
            CardProduct(
              v-for="(card, index) in products" :key="index"
              :type="isShowTitle(card.type)"
              :img="card.img"
              :title="card.title"
              :price="card.price"
              class="self-end"
              :class="{ 'md:ml-0 ml-5': index !== 0 }"
            )
      section.padding
        .container
          Cards(
            :cards="cards"
          )

      section.padding
        .container
          BannerComparison
</template>

<script>
import ImgTitle from '~/components/cards/ImgTitle'
import BannerComparison from '~/components/BannerComparison'
import CardProduct from '~/components/cards/CardProduct'
import Cards from '~/components/Cards'
export default {
  components: {
    Cards,
    CardProduct,
    BannerComparison,
    ImgTitle,
  },
  data: () => ({
    showedTitles: [],
    cards: [
      {
        img: 'img/main-card-img-2.jpg',
        title: 'Аксессуары',
      },
      {
        img: 'img/main-card-img-3.jpg',
        title: 'Рецепты',
      },
    ],
    products: [
      {
        type: 'Дровянные печи',
        img: 'img/product-img-1.jpg',
        title: 'Дровянная печь для пиццы Ooni Fyra 12',
        price: '23 000 ₽',
      },
      {
        type: 'Дровянные печи',
        img: 'img/product-img-1.jpg',
        title: 'Лопата для пиццы Ooni 14″',
        price: '4 000 ₽',
      },
      {
        type: 'Газовые печи',
        img: 'img/product-img-1.jpg',
        title: 'Газовая печь для пиццы Ooni Koda 12',
        price: '27 000 ₽',
      },
      {
        type: 'Газовые печи',
        img: 'img/product-img-1.jpg',
        title: 'Модульный стол Ooni - большой',
        price: '38 000 ₽',
      },
      {
        type: 'Пеллетные печи',
        img: 'img/product-img-1.jpg',
        title: 'Модульный стол Ooni - большой',
        price: '38 000 ₽',
      },
    ],
  }),
  methods: {
    isShowTitle(val) {
      console.log('value:', val)
      const res = this.showedTitles.find((item) => item === val)
      console.log('res:', res)
      if (!res) {
        this.showedTitles.push(val)
        console.log('!res:', val)
        return val
      } else {
        console.log('boolean', false)
        return false
      }
    },
  },
}
</script>
