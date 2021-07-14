<template lang="pug">
  div.bg-body
    div(
      class="bg-info py-3 relative"
    )
      .container
        p(
          class="2xl:w-2/3 lg:w-11/12 mx-auto text-text-dark xl:text-xs lg:text-10px text-8px"
        )
          | Нам бы очень хотелось использовать слово OONI в названии нашего сайта,
          | но производитель очень трепетно относится к своему бренду и запрещает
          | другим компаниям использовать название бренда для домена. Мы не придумали
          | ничего лучше кроме как назваться «Oopizza»!

    section
      MainSlider(
        :slides="slides"
        class=""
      )
    div(
      class="2xl:py-20 xl:py-16 lg:py-12 md:py-10 py-8"
    )
      section.padding
        .container(
          class="bg-block relative rounded-md overflow-hidden"
        )
          div(
            class="2xl:pl-10 2xl:py-9 2xl:pr-0 xl:py-10 xl:pr-6 md:pl-5 md:pr-0 md:py-7 sm:p-5 sm:pb-24 pt-7 pb-28 2xl:w-1/2 xl:w-2/3 lg:w-1/2 md:w-7/12 text-white"
          )
            h2(
              class="font-bold xl:text-3xl lg:text-xl md:text-base leading-tight"
            ) Oopizza — официальный дистрибьютор печей OONI в России!
            p(
            class="2xl:w-11/12 xl:w-4/5 lg:w-11/12  xl:mt-5 lg:mt-3 md:mt-2.5 2xl:text-xl xl:text-md lg:text-base text-xs font-normal "
            ) Сайт
              b  oopizza.ru
              |  рассказывает о пицце и продает первые в мире мобильные печи и аксессуары к ним.
          img(
            src="~assets/img/main-img-1.png"
            class="xl:w-5/12 lg:w-1/2 md:w-1/2 w-4/5 absolute md:transform md:translate-y-4/7 md:bottom-1/2 -bottom-3/4 xl:-right-10 lg:-right-12 md:-right-16 -right-10"
          )

      section.padding
        .container(
          class="grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 xl:gap-10 gap-5"
        )
          ImgTitle(
            v-for="(card, index) in cards" :key="index"
            :img="card.img"
            :title="card.title"
            class="h-full"
            :class="{'md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2': index===0 }"
          )
      section.padding
        div(
          class="container 2xl:text-xl xl:text-md lg:text-base text-xs"
        )
          h2.title.text-title Путь к великой пицце
          p(
            class=""
          ) Все заслуживают отличной пиццы!
            br
            | Это наша главная идея в Oopizza. А для отличной пиццы вам нужна супер раскаленная и мега быстрая печь.
          div(
            class="2xl:mt-10 lg:mt-8 mt-5"
          )
            h4(
              class="font-bold text-title xl:text-3xl lg:text-xl text-base"
            ) Печи для пиццы Ooni:
            div(
              class="2xl:mt-5 xl:mt-3 mt-2.5 grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-5"
            )
              ImgDescription(
                v-for="(card, index) in cardsAdvantages" :key="index"
                :img="card.img"
                :text="card.text"
              )


          div(
            class="xl:mt-8 mt-5 flex items-center md:flex-row flex-col"
          )
            p(
              class="md:w-1/2 xl:pr-5 md:pr-2.5"
            ) Пиццу любят все – это еда, которая объединяет людей. С печью Ooni приготовить пиццу отличного качества — ту, ради которой нужно было идти в ресторан или даже лететь в Италию, — теперь минутное дело. Все, что вам нужно, — это раскаленная духовка с качественным каменным основанием.
            h4(
              class="md:w-1/2 xl:pl-5 md:pl-2.5 md:mt-0 mt-2.5 xl:text-3xl lg:text-xl text-base"
            )
              span(
                class="font-bold text-title"
              ) Ooni Pizza Ovens
              | — создали первую в мире мобильную печь для пиццы.
      section.padding
        .container(
          class="relative rounded-md overflow-hidden 2xl:py-12 xl:py-16 lg:px-10 lg:py-12 md:px-8 md:py-9 p-5 py-4"
        )
          div(
            class="relative 2xl:w-1/2 xl:w-2/3 lg:w-1/2 md:w-7/12 text-white z-10"
          )
            h2(
              class="text-white title xl:mb-5 md:mb-2.5 mb-1.5"
            ) Ooni — ваш путь к&nbsp;идеальной пицце!
            p(
              class="2xl:text-xl xl:text-md lg:text-base text-xs font-normal "
            ) Перейдите на новый уровень пиццы!
              br
              | Пиццы не доступной в духовке или гриле.
          img(
            src="~assets/img/main-block-img-2.jpg"
            class="w-full absolute top-0 bottom-0 right-0 left-0 z-0 object-cover h-full"
          )
      section.padding
        div(
          class="container flex flex-col"
        )
          TextImg(
            v-for="(item, index) in blocks" :key="index"
            :img="item.img"
            :title="item.title"
            :text="item.text"
            :reverse="item.reverse"
            :class="{'xl:mt-10 mt-5': index!==0 }"
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


</template>

<script>
import ImgTitle from '~/components/cards/ImgTitle'
import ImgDescription from '~/components/cards/ImgDescription'
import TextImg from '~/components/cards/TextImg'
import BannerComparison from '~/components/BannerComparison'
import CardProduct from '~/components/cards/CardProduct'
import MainSlider from '~/components/slider/MainSlider'
import ProductsSlider from '~/components/slider/ProductsSlider'
export default {
  components: {
    ProductsSlider,
    MainSlider,
    CardProduct,
    BannerComparison,
    TextImg,
    ImgDescription,
    ImgTitle,
  },
  data: () => ({
    isSlider: false,
    widthSlider: '',
    cards: [
      {
        img: 'img/main-card-img-1.jpg',
        title: 'Печи Ooni',
      },
      {
        img: 'img/main-card-img-2.jpg',
        title: 'Аксессуары',
      },
      {
        img: 'img/main-card-img-3.jpg',
        title: 'Рецепты',
      },
    ],
    cardsAdvantages: [
      {
        img: 'img/main-adv-1.jpg',
        text: 'Нагреваются до 500°C',
      },
      {
        img: 'img/main-adv-2.jpg',
        text: 'Приготовление пиццы всего за 60 секунд',
      },
      {
        img: 'img/main-adv-3.jpg',
        text: 'Модели с разными видами топлива',
      },
    ],
    blocks: [
      {
        img: 'img/main-block-img-1.jpg',
        title: 'Приготовьте отличную пиццу у себя дома в печи',
        text:
          'Наши инновационные печи для позволяют приготовить невероятную пиццу в домашних условиях быстро, легко и без хлопот. Чтобы приготовить по-настоящему фантастическую пиццу, нужен очень сильный жар. Печки Ooni Fyra, Ooni Koda, Ooni Koda 16, Ooni Karu и Karu 16 достигают в два раза большей температуры, чем домашние печи, всего за 20 минут и стоят в несколько раз дешевле традиционных стационарных дровяных печей.',
      },
      {
        img: 'img/main-block-img-2.jpg',
        title: 'Разожгите настоящий огонь',
        text:
          'Мы тщательно спроектировали нашу линейку печей для пиццы, чтобы они соответствовали любым потребностям. Вне зависимости от того, на чем вы предпочитаете готовить, будь то дрова, пеллеты, древесный уголь или газ, у нас есть печка, отвечающая всем вашим потребностям. От поистине великолепной пиццы до жареной рыбы, запеченных овощей, обжаренных стейков и даже свежего хлеба. Ooni поможет создавать невероятные блюда на огне.',
        reverse: true,
      },
      {
        img: 'img/main-block-img-3.jpg',
        title: 'Для любителей готовить на природе',
        text:
          'Наши печи – это сердце мероприятий и социальных событий. Удостоенные множества наград печи Ooni собирают вместе семью, друзей и любителей вкусно поесть. Предназначены для использования на открытом воздухе печи Ooni Fyra, Ooni Koda, Ooni Koda 16, Ooni Karu и Ooniu Karu 16 гарантируют вам подачу фантастических блюд на заднем дворе, на пляже или в любом другом месте. Ooni – каждый достоин отличной пиццы.',
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
    slides: [
      {
        img: 'img/main-slide-img-1.jpg',
        title: 'Сочная пицца <br> у вас дома',
        text:
          'Приготовьте невероятную пиццу дома <br> всего за 60 секунд в мобильной печи Ooni',
        btnName: 'Выбрать печку',
        btnAddress: '/',
      },
      {
        img: 'img/main-slide-img-2.jpg',
        title: 'Огненная пицца <br> в любом месте',
        text:
          'Приготовьте невероятную пиццу где угодно <br> всего за 60 секунд в мобильной печи Ooni',
        btnName: 'Выбрать печку',
        btnAddress: '/',
      },
      {
        img: 'img/main-slide-img-3.jpg',
        title: 'Быстрая пицца <br> на вашем столе',
        text:
          'Приготовьте невероятную пиццу дома <br> всего за 60 секунд в мобильной печи Ooni',
        btnName: 'Выбрать печку',
        btnAddress: '/',
      },
    ],
  }),
  mounted() {
    this.isSlider = self.innerWidth <= 768
  },
  methods: {
    handleResize({ width }) {
      this.isSlider = width <= 768
    },
    changeWidthSlider(x) {
      if (this.isSlider) {
        this.widthSlider = self.innerWidth
        console.log(this.widthSlider)
      }
    },
  },
}
</script>
