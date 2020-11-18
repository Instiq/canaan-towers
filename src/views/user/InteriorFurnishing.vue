<template>
    <div>
        <app-header :headerMain="headerMain"></app-header>
        <app-carousel-main :mainCarousel="mainCarousel"></app-carousel-main>
        <app-about-service></app-about-service>
         <h3 class="building__header--text">Product Catalogue</h3>
        <app-catalogue :catalogueData="catalogueData"></app-catalogue>
        <h3 class="building__header--text">Recent Projects</h3>
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
        leftHeader: 'interior furnishing',
        leftText: 'At Canaan, we have a great team of professional designers that brings your imagination alive. You can also choose any interior design that appeals to you from this page.',
        rightPicture: 'interior-furnishing-main-pic'
      },
      mainCarousel: {
        picture: [
          'interior-furnishing-main-carousel-1',
          'interior-furnishing-main-carousel-2'
        ]
      },
      relatedProjects: {
        picture: [
          'interior-furnishing-1', 'interior-furnishing-2', 'interior-furnishing-3', 'interior-furnishing-4', 'interior-furnishing-5'
        ]
      },
      catalogueData: {
        images: [
          'interior-furnishing-catalogue-1',
          'interior-furnishing-catalogue-2',
          'interior-furnishing-catalogue-3',
          'interior-furnishing-catalogue-5',
          'interior-furnishing-catalogue-5',
          'interior-furnishing-catalogue-6',
          'interior-furnishing-catalogue-7',
          'interior-furnishing-catalogue-8',
          'interior-furnishing-catalogue-9',
          'interior-furnishing-catalogue-10',
          'interior-furnishing-catalogue-11',
          'interior-furnishing-catalogue-1'
        ],
        title: [
          'Inverter 2.5KVA',
          'Solar Panel',
          'Solar Battery',
          'Aluminium Partition',
          'Inverter 2.5KVA',
          'Solar Panel',
          'Solar Battery',
          'Aluminium Partition',
          'Inverter 2.5KVA',
          'Solar Panel',
          'Solar Battery',
          'Aluminium Partition'
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
