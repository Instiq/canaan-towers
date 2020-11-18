<template>
  <footer class="footer">
    <b-container class="">
      <b-row>
        <!-- <b-col cols="2" class="footer-left">
          <img src="../../assets/images/Logo-1.png" alt="" class="footer-logo" />
        </b-col> -->
        <b-col class="footer-right text-left">
          <b-row>
            <b-col xs="6" md="4">
              <p>Canaan Towers Limited</p>
              <p>1st Floor, Osborne House</p>
              <p>2a, Osborne Drive</p>
              <p>Victoria Island, Lagos.</p>
            </b-col>
            <b-col xs="6" md="4">
              <p>
                234-803-121-0101
              </p>
              <p>info@canaantowers.com</p>
              <p>Privacy Policy</p>
            </b-col>
            <b-col class="icons" xs="6" md="4">
              <div id="app">
                <font-awesome-icon :icon="['fab', 'fa-facebook-square']" />
              </div>
              <img class="footer__social-icon" src="../../assets/images/facebook.svg"/>
              <img class="footer__social-icon" src="../../assets/images/youtube.svg"/>
              <img class="footer__social-icon" src="../../assets/images/linkedin.svg"/>
              <img class="footer__social-icon" src="../../assets/images/twitter.svg"/>
            </b-col>
          </b-row>
          <b-row class="text-center footer__copyright">
            <b-col class="footer__copyright--text">Copyright2020CanaanTowersLimited</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: 5rem;
  font-weight: 500;
  padding: 10rem 0 6rem 0rem;
  background-color: $main-black-gradient-dark;
  color: #fff;

  &-logo {
    width: 100%;
  }

  &__copyright--text {
      padding-top: 5rem;
  }

  &__social-icon {
      width: 2rem;
      margin-right: 1.5rem;
  }

  .icons {
    text-align: right;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    margin-top: 3rem;
    padding: 8rem 0rem;
    background-color: $main-black-gradient-dark;
    color: #fff;

    &-logo {
      width: 100%;
    }

    &__copyright--text {
        padding-top: 3rem;
    }

    &__social-icon {
        width: 1.5rem;
        margin-right: 1.5rem;
    }

    .icons {
      text-align: left;
      margin-top: 2rem;
    }
  }

  p, .footer__copyright--text {
    font-size: 1.4rem;
  }
}

</style>
