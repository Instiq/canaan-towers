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
              <div class="font footer__social-icon">
                <font-awesome-icon :icon="['fab', 'facebook']" class="font"/>
                <font-awesome-icon :icon="['fab', 'linkedin']" class="font"/>
                <font-awesome-icon :icon="['fab', 'twitter']" class="font"/>
                <font-awesome-icon :icon="['fab', 'youtube']" class="font"/>
              </div>
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

  .footer__social-icon {
    display: flex;
    justify-items: space-between;
    width: 100%;
    .font {
      margin: 2rem;
      font-size: 3.5rem;
    }
  }

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
