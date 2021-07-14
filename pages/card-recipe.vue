<template lang="pug">
  div.bg-body
    div
      .container
        img(
          src="~assets/img/card-recipe-1.jpg"
        )
    div(
      class="2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8"
    )
      section.padding
        .container
          div(
            class="2xl:w-3/5 xl:w-4/5 mx-auto"
          )
            h2.title.text-title Классический соус для пиццы
            div(
              class="flex justify-between"
            )
              div(
                class="rounded-md bg-white 2xl:text-xl xl:text-lg lg:text-base p-2.5 text-center"
                v-for="(item, index) in info" :key="index"
              )
                span(
                  class="block font-bold text-text-dark"
                ) {{item.title}}
                span(
                  class="block mt-1.5"
                ) {{item.description}}
            div(
              class="rounded-md bg-white p-5 mt-10 2xl:text-xl xl:text-lg lg:text-base text-xs"
            ) Наш супер легкий и серьезный классический соус для пиццы во всей своей простоте создает идеальное дополнение для наслаивания ваших любимых начинок для пиццы.
              br
              br
              | Этот рецепт, приготовленный с использованием плиты (варочной панели), а не вашей Уни, является выдержкой из нашей новой кулинарной книги «  Уни: Готовим на огне» . «Сочные и сладкие помидоры с нотками чеснока, соли и базилика делают этот соус для пиццы идеальным для усиления вкуса  основы для  классической пиццы» , - говорит генеральный директор Ooni Кристиан Тапанинахо. Выбор помидоров хорошего качества повлияет на вкус вашего соуса - мы предпочитаем консервированные помидоры Сан-Марцано, которые являются традиционным выбором для неаполитанской пиццы.
            img(
              src="~assets/img/card-recipe-2.jpg"
              class="w-full mt-10 rounded-md"
            )
            div(
              class="rounded-md bg-white p-5 mt-10"
            )
              span(
                class="block font-bold text-text-dark 2xl:text-xl xl:text-lg lg:text-base text-xs"
              ) Ингредиенты
              span(
                class="block mt-2.5 font-normal text-base"
              ) Достаточно соуса для пиццы 8 x 12 дюймов.
              div(
                class="mt-2.5 2xl:text-xl xl:text-lg lg:text-base text-xs"
              ) - 2 столовые ложки оливкового масла
                br
                | - 2 зубчика чеснока, измельченных или мелко нарезанных
                br
                | - 4 стакана (800 г) консервированных цельных сливовых помидоров (нам нравится Сан Марцано)
                br
                | - 2 чайные ложки сахара с горкой
                br
                | - 1 чайная ложка соли
                br
                | - Горсть крупно нарезанных листьев базилика
                br
                |- Щепотка свежемолотого черного перца
            div(
              class="rounded-md bg-white p-5 mt-10"
            )
              span(
                class="block font-bold text-text-dark 2xl:text-xl xl:text-lg lg:text-base text-xs"
              ) Приготовление
              div(
                class="mt-2.5 2xl:text-xl xl:text-lg lg:text-base text-xs"
              ) 1. Налейте масло в сковороду на средний огонь. Когда он нагреется, добавьте чеснок и обжарьте, пока он не станет мягким, но не коричневым.
                br
                | 2. Вылейте банку сливовых помидоров в сковороду и измельчите их вилкой.
                br
                | 3. Добавьте все оставшиеся ингредиенты, затем тушите на слабом огне 20 минут или до тех пор, пока аромат не станет более глубоким и соус не загустеет.
                br
                | 4. Этот соус можно использовать сразу или поместить в герметичный контейнер и хранить в холодильнике до недели, готовый к употреблению по мере необходимости.
      section.padding
        .container
          h2.title.text-title Еще рецепты
          div(
            class="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-10 gap-5"
          )
            RecipesBlock(
              v-for="(item, index) in recipes" :key="index"
              :img="item.img"
              :title="item.title"
              :linkAddress="item.linkAddress"
              :class="{'2xl:inline-block md:hidden inline-block': index > 2}"
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
    info: [
      {
        title: 'Категория',
        description: 'Соус',
      },
      {
        title: 'Порции',
        description: '8',
      },
      {
        title: 'Время подготовки',
        description: '1 минута',
      },
      {
        title: 'Время приготовления',
        description: '20 минут',
      },
    ],
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
    ],
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
  }),
}
</script>

<style scoped></style>
