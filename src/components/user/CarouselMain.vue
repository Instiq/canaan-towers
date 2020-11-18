<template>
  <div class="main">
    <b-carousel
      class="carousel-main"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="getImgUrl(val)" v-for="(val, index) in mainCarousel.picture" :key=index
        class="image">
      </b-carousel-slide>
      <figcaption class="carousel-text text-right">
        <h3>project type</h3>
        <p>residential apartment</p>
      </figcaption>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: ['mainCarousel'],
  methods: {
    getImgUrl (image) {
      var images = require.context('../../assets/images/', false, /\.png$/)
      return images('./' + image + '.png')
    }
  }
}
</script>

<style lang="scss" scoped>
    .main {
      position: relative;
    }
    .carousel-text {
        opacity: 1;
        right: 10rem;
        position: absolute;
        text-transform: capitalize;
        opacity: 0;
        bottom: 14rem;
    }
    .carousel-main {
        height: 80rem;
        width: 100%;
        position: relative;
        transition: all .5s ease;
    }

    .carousel-main:hover .image {
      filter: brightness(20%);
    }

    p {
        font-weight: 800;
        font-size: 2.4rem
    }

    h3 {
      position: relative;

      &:after {
        content:"";
        position: absolute;
        bottom: 0;
        width: 50%;
        top: 2.4rem;
        right: 0;
        height: .5rem;
        border-top: .3rem solid #E55B07;
      }
    }

    .main:hover .carousel-text {
      opacity: 1;
      color: #fff;
      filter: brightness(150%) !important;
  }

  @media screen and (max-width: 768px) and (min-width: 481px)  {
    .carousel-main {
        height: 40rem;
    }
    .carousel-text {
        bottom: 4rem;
        right: 3rem;
    }

    p {
        font-weight: 800;
        font-size: 1.8rem
    }
  }

  @media screen and (max-width: 480px) and (min-width: 320px) {
    .carousel-main {
        height: 30rem;
    }
    .carousel-text {
        bottom: 4rem;
        right: 3rem;
    }

    p {
        font-weight: 800;
        font-size: 1.4rem
    }

    h3 {
      font-size: 1.2rem;

      &:after {
        content:"";
        position: absolute;
        bottom: 0;
        width: 50%;
        top: 1.4rem;
        right: 0;
        height: .5rem;
        border-top: .3rem solid #E55B07;
      }
    }
  }
</style>
