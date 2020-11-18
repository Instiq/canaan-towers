<template>
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
              <router-link to="/" class="navigation__link">get quote</router-link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

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
</style>
