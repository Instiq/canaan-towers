/* eslint-disable quotes */
<template>
  <b-container fluid class="related-projects">
    <section class="customer-logos slider">
      <div v-for="(image, index) in relatedProjects.picture" :key="index">
        <div class="slide">
          <p class="text">Austin Opara Estate</p>
          <router-link to="/road-work-single">
            <img
              :src="getImgUrl(image)"
            />
          </router-link>
          <b-button class="button" to="/road-work-single">View</b-button>
        </div>
      </div>
    </section>
  </b-container>
</template>

<script>

export default {
  props: ['relatedProjects'],
  methods: {
    getImgUrl (image) {
      var images = require.context('../../assets/images/', false, /\.png$/)
      return images('./' + image + '.png')
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
    })
  }
}

</script>

<style lang="scss" scoped>
.text {
  position: absolute;
  color: #fff;
  font-weight: 800;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 9999;
}

.related-projects {
  margin: 6rem 0 7rem 0;
  overflow: hidden;
}

/* Slider */

.slick-slide {
  margin: 0px 20px;
}

.slick-slide img {
  width: 100%;
  height: 35rem;
  transition: all .4s ease;
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

.button {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #E55B07;
  background-color: #fff;
  padding: 1rem 3rem;
  font-size: 1.3rem;
  font-weight: 800;
  border-radius: 0px;

  &:hover {
    background-color: #E55B07;
    color: #fff;
  }
}

.slide {
  position: relative;

  &:hover {
    .text {
      display: block;
    }

    img {
      filter: brightness(30%);
    }
  }
}

@media screen and (max-width: 578px) {
  .slick-slide img {
    width: 100%;
    height: 25rem;
    transition: all .4s ease;
  }
}
</style>
