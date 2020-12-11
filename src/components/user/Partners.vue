/* eslint-disable quotes */
<template>
  <b-container fluid class="related-projects">
    <h3 class="building__header--text">Our Partners</h3>
    <section class="partners slider">
      <div v-for="(image, index) in partners" :key="index">
        <div class="slide">
          <router-link to="/road-work">
            <img
              :src="getImgUrl(image)"
            />
          </router-link>
        </div>
      </div>
    </section>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'serviceData',
      'partners'
    ])
  },
  methods: {
    getImgUrl (image) {
      let img = image.split('.')
      img = img[img.length - 1]
      if (img === 'jpg') {
        const images = require.context('../../assets/images/', false, /\.jpg$/)
        return images('./' + image)
      } else if (img === 'png') {
        const images = require.context('../../assets/images/', false, /\.png$/)
        return images('./' + image)
      } else if (img === 'svg') {
        const images = require.context('../../assets/images/', false, /\.svg$/)
        return images('./' + image)
      } else if (img === 'jpeg') {
        const images = require.context('../../assets/images/', false, /\.jpeg$/)
        return images('./' + image)
      }
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('.partners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 569,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      })
    })
  }
}

</script>

<style lang="scss" scoped>
.related-projects {
  margin: 7rem 0 6rem 0;
  overflow: hidden;
}

/* Slider */

.slick-slide {
  margin: 0px 20px;
}

.slick-slide img {
  width: 80%;
  height: 10rem;
  transition: all .4s ease;

  &:hover {
      transform: scale(1.1);
  }
}

.slider:hover img:not(:hover) {
    transform: scale(0.75);
}

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}

.slider {
  margin-top: 5rem;
}

@media screen and (max-width:480px) {
  .slick-slide img {
    width: 100%;
}
}
</style>
