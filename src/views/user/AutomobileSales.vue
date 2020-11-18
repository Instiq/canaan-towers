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
        leftHeader: 'Automobile Sales & Servicing',
        leftText: 'We have the perfect automobile just for you at Canaan towers.',
        rightPicture: 'automobile-sales-main-pic'
      },
      mainCarousel: {
        picture: [
          'automobile-sales-main-carousel-1',
          'automobile-sales-main-carousel-2'
        ]
      },
      relatedProjects: {
        picture: [
          'automobile-sales-1', 'automobile-sales-2', 'automobile-sales-3', 'automobile-sales-4', 'automobile-sales-5'
        ]
      },
      catalogueData: {
        images: [
          'automobile-sales-catalogue-1',
          'automobile-sales-catalogue-2',
          'automobile-sales-catalogue-3',
          'automobile-sales-catalogue-4',
          'automobile-sales-catalogue-1',
          'automobile-sales-catalogue-2',
          'automobile-sales-catalogue-3',
          'automobile-sales-catalogue-4',
          'automobile-sales-catalogue-1',
          'automobile-sales-catalogue-2',
          'automobile-sales-catalogue-3',
          'automobile-sales-catalogue-4'
        ],
        title: [
          'Mercedez Benz E420',
          'Range Rover Sport',
          'Mc Laren W12',
          'BMW',
          'Mercedez Benz E420',
          'Range Rover Sport',
          'Mc Laren W12',
          'BMW',
          'Mercedez Benz E420',
          'Range Rover Sport',
          'Mc Laren W12',
          'BMW'
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
