<template>
  <div class="header-second">
    <!-- <b-navbar toggleable="lg" type="" class="navbar-second">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#" class="navbar-brand" style=""
        ><img
          src="../../assets/images/Logo-1.png"
          alt=""
          class="navbar-second__logo"
        />
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="navbar-second__item" to='/'>Home</b-nav-item>
          <b-nav-item href="#" class="navbar-second__item" to="about">About Us</b-nav-item>
          <b-nav-item href="#" class="navbar-second__item" to="/contact">Contact Us</b-nav-item>
          <b-nav-item href="#" class="navbar-second__item">
            <b-button class="navbar-second__item--button text-center" to="/checkout">
              <span class="" style="">Get a Quote</span>
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
    <div class="logo">
      <img
        src="../../assets/images/Logo-1.png"
        alt=""
        class="navbar-second__logo"
      />
    </div>

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
        top: 1.5rem;
        right: 2rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(#000, .1);
        text-align: center;
        cursor: pointer;

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
        top: 2rem;
        right: 2.5rem;
        // background-color: radial-gradient(orange, $main-orange);
        background-color: rgba(#000, 1);
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

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

.navbar-second__item--button {
  color: #fff;
  width: 15rem;
  padding: 1.1rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  border: .3px solid $main-orange;
  background-color: $main-orange;
  font-weight: 600;
  margin-top: -10px;
}

.navbar-second__item--button:hover {
  color: #fff;
  border: 1px solid $main-orange;
  background-color: transparent;

  .badge {
    background-color: #fff;
    color: $main-orange;
  }
}

.badge {
  // margin-left:3rem;
  color: #fff;
  background-color: $main-orange;
  padding: .7rem;
  font-size: 1rem;
}

.header-second {
  position: relative;
  background-image: linear-gradient(to right, $main-black-gradient-dark, $main-black-gradient-light);
  top: 0;
  left: 0;
}

.logo {
  background-color: #fff;
  width: 18rem
}

.navbar-second {
  padding: 0 10rem 0 0;
}

.navbar-second__logo {
  width: 7rem;
  // background-color: #fff;
  padding: 2rem 0rem;
  margin: 0;
}

.navbar-second__item {
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0 2rem;
}

.navbar-second__item a {
  color: #ffffff !important;
}

.header-second__content {
  position: relative;
}

.header-second__content--right img {
  width: 100%;
  position: absolute;
  right: 0;
}

.header-second__content--left {
  color: #fff;
  text-align: left;
  padding-top: 15rem;
  padding-right: 6rem;
}

.header-second--primary-text {
  font-size: 4rem;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
