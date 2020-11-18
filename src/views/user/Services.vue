<template>
  <div>
    <app-header :headerMain="headerMain"></app-header>
    <app-service></app-service>
    <app-whatsapp></app-whatsapp>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/user/Header.vue'
import Service from '@/components/user/Service.vue'
import Footer from '@/components/user/Footer.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'

export default {
  data () {
    return {
      headerMain: {
        leftHeader: 'services',
        leftText: 'Our main focus is on delivering structural solutions to the building industry.',
        rightPicture: 'services-main'
      }
    }
  },
  components: {
    appHeader: Header,
    appService: Service,
    appFooter: Footer,
    appWhatsapp: Whatsapp
  }
}
</script>
