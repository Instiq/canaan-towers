<template>
  <div>
    <app-header :headerMain="headerMain"></app-header>
    <app-about-us></app-about-us>
    <app-statements></app-statements>
    <img :src="excavators" class="excavators">
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-whatsapp></app-whatsapp>
  </div>
</template>

<script>
import Header from '@/components/user/Header.vue'
import AboutUs from '@/components/user/AboutUs.vue'
import Statements from '@/components/user/Statements.vue'
import Footer from '@/components/user/Footer.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'

export default {
  data () {
    return {
      excavators: require('@/assets/images/excavators.png'),
      headerMain: {
        leftHeader: 'We play a key role in the transformation of homes across Africa',
        leftText: '',
        rightPicture: 'about'
      }
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appAboutUs: AboutUs,
    appStatements: Statements,
    appWhatsapp: Whatsapp
  }
}
</script>
<style lang="scss">
.building__header--text {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 15rem;
    border-radius: 0.3rem;
    top: 2.4rem;
    // margin-left: -13.4rem;
    left: 50%;
    transform: translateX(-50%);
    height: 0.5rem;
    border-top: 0.3rem solid $main-orange;
  }
}

.excavators {
    position: relative;
    width: 100%;
    left: 0;
    height: 25rem;
    top: 2rem;
}

@media screen and (max-width: 767px) {
  .excavators {
    position: relative;
    width: 100%;
    left: 0;
    height: 10rem;
    top: 2rem;
}
}
</style>
