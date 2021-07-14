<template lang="pug">
  div.bg-body
    section.padding
      .container()
        div(
          class="grid md:grid-cols-2 grid-cols-1 xl:gap-x-10 md:gap-5 sm:gap-8 gap-5"
        )
          div
          div(
            class=""
          )
            h4(
              class="title text-title"
            ) Дровянная печь Ooni Fyra 12
            div(
              class="font-bold text-base text-text-dark"
            ) Артикул:
              span(
                class="font-normal text-base"
              ) UU-P0AD00
            div(
              class="font-bold text-base text-text-dark"
            ) Артикул:
              span(
                class="font-normal text-base"
              ) UU-P0AD00
            div(
              class="font-normal 2xl:text-2xl xl:text-lg lg:text-base text-xs 2xl:mt-5 xl:mt-3 mt-2.5"
            ) Идеальная пицца в каждом дворе. Ooni Fyra революция в приготовлении. Ooni Fyra создана для оптимального удержания тепла, что сочетается с естественной эффективностью древесных пеллетов и обеспечивает непревзойденную готовку, максимальное время горения и минимальные затраты сил. Удобный лоток для гранул автоматически подает древесину, обеспечивая легкость приготовления. Ooni Fyra достигает температуры в 500°C и готова к работе уже через 15 минут, а настоящая неаполитанская пицца будет готова уже через 60 секунд. Кроме того, Ooni Fyra чрезвычайно легкая – всего 10 кг.
            div(
              class="flex items-center 2xl:mt-10 xl:mt-8 lg:mt-5"
            )
              span(
                class="block font-bold text-text-dark xl:text-3xl lg:text-xl text-base 2xl:mr-10 xl:mr-8 mr-5"
              ) 23 000 ₽
              Btn(
                btnName="Где купить"
                btnAddress="/"
              )
        div(
          class="grid grid-cols-2 xl:gap-x-10 md:gap-5 sm:gap-8 gap-5 2xl:mt-20 xl:mt-16 sm:mt-10 mt-8"
        )
          div
            ul(
              class="2xl:text-xl xl:text-lg lg:text-base text-xs ul"
            )
              li(
                v-for="(item, index) in advantages" :key="index"
                class="font-normal text-xl"
                :class="{'xl:mt-2.5 mt-2': index !== 0}"
              ) {{item}}
          div
            video(
              controls
              autoplay
              class="w-full"
            )
              source(
                src="https://www.pexels.com/ru-ru/video/-1860079/"
              )
        div(
          class="column-count 2xl:mt-20 xl:mt-16 sm:mt-10 mt-8"
        )
          div(
            v-for="(item, index) in cardsAdvantages" :key="index"
            class="inline-block bg-white rounded-md py-5 px-2.5"
            :class="{'xl:mt-10 mt-5': index % 2 !== 0}"
          )
            span(
              class="font-bold 2xl:text-xl xl:text-lg lg:text-base text-base text-text-dark"
            ) {{item.title}}
            p(
              class="font-normal 2xl:text-base text-xs 2xl:mt-2.5 mt-1.5"
            ) {{item.text}}
        div(
          class="2xl:mt-20 xl:mt-16 sm:mt-10 mt-8 grid md:grid-cols-4 grid-cols-2 xl:gap-10 gap-x-5"
        )
          div(
            class="bg-block rounded-md md:px-2.5 md:pt-5 pt-2.5 2xl:pb-8 md:pb-5 pb-3.5"
            v-for="(item, index) in documents" :key="index"
          )
            div(
              class="font-bold text-white 2xl:text-xl xl:text-lg lg:text-base text-xs"
              v-html="item"
            )
            img(
              src="~assets/img/doc.svg"
              class="mx-auto md:mt-5 mt-2.5 w-1/3 xl:w-5/12"
            )


    div(
        class="2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8"
      )
        section.padding
          .container
            BannerComparison
        section.padding
          resize-observer(
            @notify="handleResize"
          )
          div(
            class="container"
          )
            h2.title.text-title Вы просматривали
            div(
              class="md:grid md:grid-cols-4 xl:gap-x-10 md:gap-x-5"
              v-if="!isSlider"
            )
              CardProduct(
                v-for="(product, index) in products" :key="index"
                :img="product.img"
                :title="product.title"
                :price="product.price"
                class="md:w-auto w-40"
                :class="{'md:ml-0 ml-5': index !== 0}"
              )
            ProductsSlider(
              v-else
              :products="products"
            )

        section.padding
          .container
            Cards(
              :cards="cards"
            )

</template>

<script>
import ImgTitle from '~/components/cards/ImgTitle'
import BannerComparison from '~/components/BannerComparison'
import CardProduct from '~/components/cards/CardProduct'
import ProductsSlider from '~/components/slider/ProductsSlider'
import Btn from '~/components/Btn'
import Cards from '~/components/Cards'
export default {
  name: 'CatalogPageVue',
  components: {
    Cards,
    Btn,
    ProductsSlider,
    CardProduct,
    BannerComparison,
    ImgTitle,
  },
  data: () => ({
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
    advantages: [
      'Печь работает на древесных пеллетах;',
      'Достигает 500 градусов цельсия всего за 15 минут;',
      'Максимальная мобильность, печь весит всего 10кг;',
      'Размер зоны приготовления 31см (12)”;',
      'Толщина камня 10мм;',
      'Складная труба и ножки для лёгкой транспортировки;',
      'Корпус из прочной, покрытой порошковой краской углеродистой стали.',
    ],
    cardsAdvantages: [
      {
        title: 'Высокая температура и скорость ',
        text:
          'Изолированная стальная оболочка и каменное основание для выпечки обеспечивают оптимальное удержание тепла, поэтому Ooni Koda готова к приготовлению всего за 15 минут.',
      },
      {
        title: 'Легкость и портативность',
        text:
          'Ooni Koda весит всего 9,25 кг и имеет размер 62 x 40 x 18 см поэтому её можно легко брать с собой и удивлять всех друзей и родственников.',
      },
      {
        title: 'Аромат еды на огне',
        text:
          'Запатентованный рассекатель направляет языки пламени прямо на вашу  пищу.',
      },
      {
        title: 'Газовая горелка',
        text:
          'Электронное зажигание означает мгновенное разжигание пламени, а регулятор управления температурой обеспечивает легкое приготовление пищи. Максимальная мощность: 4 кВт.',
      },
      {
        title: 'Кулинарные возможности',
        text: 'Готовьте пиццу диаметром до 30см. Ширина камня – 33см.',
      },
      {
        title: 'Непревзойденное удобство',
        text:
          'Зажечь Ooni Koda так же просто, как повернуть ручку, а приготовление пищи на газе означает минимум дыма и копоти, и гарантирует простоту обслуживания.',
      },
      {
        title: 'Премиум материалы',
        text:
          'Корпус печки  выполнен из холоднокатаной углеродистой стали с порошковым напылением. Внутри печки находится высококачественный камень для выпечки из кордиерита.',
      },
      {
        title: 'Заслуженный медалист',
        text:
          'Печки Ooni – ежегодно получают престижные награды. Ooni Koda в 2019 году удостоилась награды Vesta области дизайна и технологий.',
      },
    ],
    products: [
      {
        img: 'img/product-img-1.jpg',
        title: 'Дровянная печь для пиццы Ooni Fyra 12',
        price: '23 000 ₽',
      },
      {
        img: 'img/product-img-1.jpg',
        title: 'Лопата для пиццы Ooni 14″',
        price: '4 000 ₽',
      },
      {
        img: 'img/product-img-1.jpg',
        title: 'Газовая печь для пиццы Ooni Koda 12',
        price: '27 000 ₽',
      },
      {
        img: 'img/product-img-1.jpg',
        title: 'Модульный стол Ooni - большой',
        price: '38 000 ₽',
      },
    ],
    documents: [
      'Руководство по Ooni Fyra 12 ↓',
      'Основы работы с Ooni Fyra 12 ↓',
      'Габариты Ooni Fyra 12 ↓',
    ],
  }),
}
</script>

<style scoped></style>
