<template lang="pug">
  div.bg-body
    section.padding
      .container
        h2.title.text-title Рецепты
        div(
          class="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-10 gap-5"
        )
          RecipesBlock(
            v-for="(item, index) in recipes" :key="index"
            :img="item.img"
            :title="item.title"
            :linkAddress="item.linkAddress"
          )
    div(
      class="2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8"
    )
      section.padding
        .container
          Cards(
            :cards="cards"
          )
</template>

<script>
import ImgTitle from '~/components/cards/ImgTitle'
import CardProduct from '~/components/cards/CardProduct'
import RecipesBlock from '~/components/cards/RecipesBlock'
import Cards from '~/components/Cards'
export default {
  components: {
    Cards,
    RecipesBlock,
    CardProduct,
    ImgTitle,
  },
  data: () => ({
    recipes: [
      {
        img: 'img/recipes-1.jpg',
        title: 'Классическое тесто для пиццы',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-2.jpg',
        title: 'Классический соус для пиццы',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-3.jpg',
        title: 'Пицца с зеленым чили и салями',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-4.jpg',
        title: 'Пицца с курицей BBQ',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-5.jpg',
        title: 'Пицца Маргарита',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-6.jpg',
        title: 'Запеченная грудка индейки с травами',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-7.jpg',
        title: 'Пицца Пепперони',
        linkAddress: '/card-recipe',
      },
      {
        img: 'img/recipes-8.jpg',
        title: 'Булочки с яблокоми и глинтвейном',
        linkAddress: '/card-recipe',
      },
    ],
    cards: [
      {
        img: 'img/main-card-img-2.png',
        title: 'Аксессуары',
      },
      {
        img: 'img/main-card-img-3.png',
        title: 'Рецепты',
      },
    ],
  }),
}
</script>

<style scoped></style>
