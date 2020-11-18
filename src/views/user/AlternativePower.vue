<template>
    <div>
        <app-header :headerMain="headerMain"></app-header>
        <app-carousel-main :mainCarousel="mainCarousel"></app-carousel-main>
        <app-about-service></app-about-service>
        <h3 class="building__header--text">Product Catalogue</h3>
        <app-catalogue :catalogueData="catalogueData"></app-catalogue>
        <h3 class="building__header--text">Related Projects</h3>
        <app-related-projects :relatedProjects="relatedProjects"></app-related-projects>
        <app-partners></app-partners>
        <app-whatsapp></app-whatsapp>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '@/components/user/Header.vue'
import Footer from '@/components/user/Footer.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'
import CarouselMain from '@/components/user/CarouselMain.vue'
import AboutService from '@/components/user/AboutService.vue'
import RelatedProjects from '@/components/user/RelatedProjects.vue'
import Partners from '@/components/user/Partners.vue'
import Catalogue from '@/components/user/Catalogue.vue'

export default {
  data () {
    return {
      headerMain: {
        leftHeader: 'Alternative Power',
        leftText: 'Our products guarantees un-interrupted power supply system in your home, office or organization.',
        rightPicture: 'alternative-power-main-pic'
      },
      mainCarousel: {
        picture: [
          'alternative-power-main-carousel-1',
          'alternative-power-main-carousel-2'
        ]
      },
      relatedProjects: {
        picture: [
          'alternative-power-1', 'alternative-power-2', 'alternative-power-3', 'alternative-power-4', 'alternative-power-5'
        ]
      },
      catalogueData: {
        images: [
          'alternative-power-catalogue-1',
          'alternative-power-catalogue-2',
          'alternative-power-catalogue-3',
          'alternative-power-catalogue-2',
          'alternative-power-catalogue-1',
          'alternative-power-catalogue-3',
          'alternative-power-catalogue-2',
          'alternative-power-catalogue-2',
          'alternative-power-catalogue-1',
          'alternative-power-catalogue-3',
          'alternative-power-catalogue-2',
          'alternative-power-catalogue-1'
        ],
        title: [
          'White Balustrade',
          'Front Italian Door',
          'Front Italian Door',
          'Stainless Steel Window',
          'Hand Rail',
          'Aluminium Partition',
          'White Balustrade',
          'Front Italian Door',
          'Hand Rail',
          'Aluminium Partition',
          'White Balustrade',
          'Front Italian Door'
        ]
      }
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appWhatsapp: Whatsapp,
    appCarouselMain: CarouselMain,
    appAboutService: AboutService,
    appRelatedProjects: RelatedProjects,
    appPartners: Partners,
    appCatalogue: Catalogue
  }
}
</script>

<style lang="scss">
  .building__header--text {
        position: relative;

        &:after {
            content:"";
            position: absolute;
            bottom: 0;
            width: 15rem;
            border-radius: .3rem;
            top: 2.4rem;
            // margin-left: -13.4rem;
            left: 50%;
            transform: translateX(-50%);
            height: .5rem;
            border-top: .3rem solid $main-orange;
        }
    }
</style>
