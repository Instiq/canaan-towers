<template>
    <div>
        <app-navbar></app-navbar>
        <div class="text-left checkout__secondary-header">Checkout</div>
        <app-checkout-card></app-checkout-card>
        <app-whatsapp></app-whatsapp>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar2 from '@/components/user/Navbar2.vue'
import CheckoutCard from '@/components/user/CheckoutCard.vue'
import Footer from '@/components/user/Footer.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'

export default {
  components: {
    appNavbar: Navbar2,
    appCheckoutCard: CheckoutCard,
    appFooter: Footer,
    appWhatsapp: Whatsapp
  }
}
</script>

<style lang="scss">
    .checkout-card {
        margin: 2.5rem 10rem !important;
        padding: 6rem 3rem 7rem 3rem;
        box-shadow: 3px 3px 6px #00000029;
        border: none;
        border-radius: 5px;

        tr {
          margin-bottom: 20rem;
        }

        .row-style {
            padding: 1rem !important;
            border-spacing: 10rem;
            border-collapse:separate;
            vertical-align: top;
            box-shadow: 3px 3px 6px #00000029;
        }
    }

     .checkout__secondary-header {
      background-color: $main-grey-light;
      padding: 2rem 10rem;
      color: $main-blue;
      font-weight: 600;
    }

    @media screen and (max-width: 768px) {
      .checkout__secondary-header {
        padding: 2rem 2rem;
      }

      .checkout-card {
        margin: 1.5rem 2rem !important;
        padding: 3rem .5rem 3rem .5rem;
      }
    }

</style>
