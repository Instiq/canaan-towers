<template>
  <div class="main-quote">
      <app-navbar></app-navbar>
      <app-secondary-header></app-secondary-header>
      <app-quote-card></app-quote-card>
      <app-whatsapp></app-whatsapp>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar2 from '@/components/user/Navbar2.vue'
import SecondaryHeader from '@/components/user/SecondaryHeader.vue'
import QuoteCard from '@/components/user/QuoteCard.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'
import Footer from '@/components/user/Footer.vue'

export default {
  components: {
    appNavbar: Navbar2,
    appSecondaryHeader: SecondaryHeader,
    appQuoteCard: QuoteCard,
    appWhatsapp: Whatsapp,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
  .modal-body {
    overflow: hidden;
    text-align: center;
  }

  .modal-header,
  .modal-footer {
    display: none;
  }
</style>
