/* eslint-disable no-undef */
<template>
  <div class="header-first wrapper">
    <!-- <b-navbar toggleable="lg" type="" class="navbar-first">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <img
        src="../../assets/images/Logo-1.png"
        alt=""
        class="navbar-first__logo"
      />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="navbar-first__item" to="/">Home</b-nav-item>
          <b-nav-item href="#" class="navbar-first__item" to="/about">About Us</b-nav-item>
          <b-nav-item href="#" class="navbar-first__item" to="/contact">Contact Us</b-nav-item>
          <b-nav-item href="#" class="navbar-first__item">
            <b-button class="navbar-first__item--button text-left d-flex justify-content-between" to="/checkout">
              <b-icon icon="cart-dash-fill"></b-icon>
              <span class="" style="get-quote">Get Quote</span>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item"><router-link to="/" class="navigation__link">Home</router-link></li>
          <li class="navigation__item"><router-link to="/about" class="navigation__link">About</router-link></li>
          <li class="navigation__item"><router-link to="/contact" class="navigation__link">Contact Us</router-link></li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <!-- <b-button class="navbar-first__item--button text-left d-flex justify-content-between" to="/checkout">
                <b-icon icon="cart-dash-fill"></b-icon>
                <span class="" style="get-quote">Get Quote</span>
              </b-button> -->
              <router-link to="/quote" class="navigation__link">get quote</router-link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <img
        src="../../assets/images/Logo-1.png"
        alt=""
        class="navbar-first__logo"
      />

    <b-container class="header-first__content">
      <b-row>
        <b-col class="header-first__content--left" cols="12" sm="6">
          <h1 class="header-first--primary-text">
            {{ headerMain.leftHeader }}
          </h1>
          <p class="header-first--secondary-text">
            {{ headerMain.leftText }}
          </p>
        </b-col>
        <b-col class="header-first__content--right" cols="12" sm="6"
          ><img :src="getImgUrl(headerMain.rightPicture)" alt=""
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['headerMain'],
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
      $('.menu-icon').on('click', function () {
        // eslint-disable-next-line no-undef
        $('nav ul').toggleClass('showing')
      })
    })

    // Scrolling Effect

    // eslint-disable-next-line no-undef
    $(window).on('scroll', function () {
      // eslint-disable-next-line no-undef
      if ($(window).scrollTop()) {
        // eslint-disable-next-line no-undef
        $('nav').addClass('black')
      } else {
        // eslint-disable-next-line no-undef
        $('nav').removeClass('black')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@mixin respond($breakpoint) {
    @if $breakpoint == phone {
        @media only screen and (max-width: 37.5em) { @content };    //600px
    }
    @if $breakpoint == tab-port {
        @media only screen and (max-width: 56.25em) { @content };     //900px
    }
    @if $breakpoint == tab-land {
        @media only screen and (max-width: 75em) { @content };    //1200px
    }
    @if $breakpoint == big-desktop {
        @media only screen and (min-width: 112.5em) { @content };    //1800
    }
}

.navigation {
    &__checkbox {
        display: none;
    }

    &__button {
        background-color: #fff;
        height: 7rem;
        width: 7rem;
        position: fixed;
        top: 6rem;
        right: 6rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(#000, .1);
        text-align: center;
        cursor: pointer;

        @include respond(tab-port) {
            top: 4rem;
            right: 4rem;
        }

        @include respond(phone) {
          top: 2rem;
          right: 2rem;
          height: 5rem;
          width: 5rem;
        }
    }

    &__background {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        position: fixed;
        top: 6.5rem;
        right: 6.5rem;
        // background-color: radial-gradient(orange, $main-orange);
        background-color: rgba(#000, 1);
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

        @include respond(tab-port) {
            top: 4.5rem;
            right: 4.5rem;
        }

        @include respond(phone) {
          top: 2.5rem;
          right: 2.5rem;
          height: 4rem;
          width: 4rem;
        }
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;

        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item {
        margin: 1rem;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 2.5rem;
            font-weight: bold;
            padding: 1rem 2rem;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
            background-size: 230%;
            transition: all .4s;

            span {
                margin-right: 1.5rem;
                display: inline-block;
            }
        }

        &:hover,
        &:active {
            background-position: 100%;
            color: $main-orange;
            transform: translateX(1rem);
        }
    }

    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
    }

    //ICON
    &__icon {
        position: relative;
        margin-top: 3.5rem;

        @include respond(phone) {
          margin-top: 2.5rem
        }

        &,
        &::before,
        &::after {
            width: 3rem;
            height: 2px;
            background-color: #000;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.8rem; }
        &::after { top: .8rem; }
    }

    &__button:hover &__icon::before {
        top: -1rem;
    }

    &__button:hover &__icon::after {
        top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }
}

.header-first {
  background-image: url("../../assets/images/Header-1-bg.png");
  min-height: 80rem;
  // background-blend-mode: hue;
  position: relative;
  top: 0;
  background-size: 87vw;
  background-repeat: no-repeat;
  background-position: absolute;
}

.navbar-first {
  padding: 0 10rem;
}

.header-first--secondary-text {
  font-size: 1.4rem;
}

.navbar-first__logo {
  width: 13%;
  position: absolute;
  left: 7rem;
  top: 3rem;
}

.navbar-first__item {
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0 2rem;
}

.navbar-first__item a {
  color: #ffffff !important;
}

.navbar-first__item--button {
  color: #000;
  width: 12rem;
  padding: 1.1rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  background-color: transparent;
  font-weight: 600;
  border: 1px solid $main-orange;
  background-color: $main-orange;
  margin-top: -10px;
  transform: all 0.3s ease;
}

.navbar-first__item--button:hover {
  transform: scale(1.1);
  background-color: $main-orange;
  border: 1px solid $main-orange;
}

.header-first__content {
  position: relative;
  top: 26vh;

  @include respond(tab-land) {
    top: 13rem;
  }
}

.header-first__content--right img {
  width: 100%;
  position: absolute;
  top: 7rem;
  right: 0;
}

.header-first__content--left {
  color: #fff;
  text-align: left;
  padding-top: 15rem;
  padding-right: 6rem;
}

.header-first--primary-text {
  font-size: 4rem;
  font-weight: 700;
  text-transform: capitalize;
}

@media screen and (max-width: 1200px) {
  .header-first {
    min-height: 70rem;
    background-size: 87vw;
  }
}

@media screen and (max-width: 991px) {
  .header-first {
    min-height: 53rem;
    background-size: 85vw;
  }

  .header-first__content--right {
    margin-top: -5rem;
  }

  .header-first--secondary-text {
    font-size: 1.2rem;
  }

  .header-first--primary-text {
    font-size: 1.6rem;
  }

  .header-first__content--left {
    padding-top: 8rem;
    padding-right: 6rem;
  }
}

@media screen and (max-width: 767px) {
  .navbar-first__logo {
      width: 14%;
      left: 3rem;
      top: 2rem;
    }
  .header-first {
    min-height: 40rem;
    background-size: 82vw;
  }

  .header-first--secondary-text {
    font-size: 1.1rem;
  }

  .header-first--primary-text {
    font-size: 1.4rem;
  }

  .header-first__content--left {
    padding-top: 2rem;
    padding-right: 2rem;
  }

  .header-first__content--right img {
    width: 100%;
    position: absolute;
    top: 4rem;
    right: 0;
  }
}

@media screen and (max-width: 575px) {

  .header-first__content--left {
    padding-top: 0rem;
    padding-right: 8rem;
    padding-left: 8rem;
  }

  .header-first__content--right img {
    display: none;
  }

  .header-first {
    min-height: 32rem;
    background-size: 85vw;
  }
}

@media screen and (max-width: 480px) {

  .header-first__content--left {
    padding-top: 0rem;
    padding-right: 8rem;
    padding-left: 8rem;
    margin-top: -2rem;
  }

  .header-first {
    min-height: 30rem;
    background-size: 94vw;
  }
}

@media screen and (max-width: 400px) {

  .header-first__content--left {
    padding-top: 1rem;
    margin-top: -4rem;
    padding-right: 8rem;
    padding-left: 6rem;
  }

  .header-first {
    min-height: 25rem;
    background-size: 100vw;
  }
}

@media screen and (max-width: 375px) {

  .header-first__content--left {
    padding-top: 0rem;
    margin-top: -4rem;
    padding-right: 4rem;
    padding-left: 4rem;
  }

  .header-first {
    min-height: 25rem;
    background-size: 100vw;
  }
}
</style>
