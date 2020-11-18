<template>
    <div>
        <app-header :headerMain="headerMain"></app-header>
        <!--<app-map></app-map>-->
        <app-contact-form></app-contact-form>
        <app-whatsapp></app-whatsapp>
    <app-footer></app-footer>
    </div>
</template>

<script>
import Whatsapp from '@/components/user/Whatsapp.vue'
import Header from '@/components/user/Header.vue'
// import Map from '@/components/user/Map.vue'
import Footer from '@/components/user/Footer.vue'
import ContactForm from '@/components/user/ContactForm.vue'
export default {
  data () {
    return {
      headerMain: {
        leftHeader: 'Contact US',
        leftText:
          'Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.',
        rightPicture: 'contact'
      }
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    // appMap: Map,
    appContactForm: ContactForm,
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
</style>
