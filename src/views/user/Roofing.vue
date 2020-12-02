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
import axios from 'axios'
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
        leftHeader: 'Canaan Roofing',
        leftText: 'We are a company that supply excellent quality and durable stone coated roofing sheet.',
        rightPicture: 'roofing-main-pic'
      },
      mainCarousel: {
        picture: [],
        header: [
          'product-type',
          'product-type'
        ],
        text: [
          'brown stone coated roofing (3MM)',
          'stone coated roofing sheet'
        ]
      },
      relatedProjects: {
        picture: [
          'roofing-1.png', 'roofing-2.png', 'roofing-3.png', 'roofing-4.png', 'roofing-5.png'
        ]
      },
      catalogueData: {
        images: [
          'roofing-1.png',
          'roofing-2.png',
          'roofing-3.png',
          'roofing-4.png',
          'roofing-3.png',
          'roofing-4.png',
          'roofing-2.png',
          'roofing-1.png',
          'roofing-2.png',
          'roofing-3.png',
          'roofing-1.png',
          'roofing-4.png'
        ],
        title: [
          'Aluminium Roofing Sheet',
          'Stone Coated Tiles',
          'Stone Coated Tiles',
          'Dark Stone Coated Tiles',
          'Aluminium Roofing Sheet',
          'Stone Coated Tiles',
          'Stone Coated Tiles',
          'Dark Stone Coated Tiles',
          'Aluminium Roofing Sheet',
          'Stone Coated Tiles',
          'Stone Coated Tiles',
          'Dark Stone Coated Tiles'
        ]
      }
    }
  },
    async created () {
    try {
        const request = await axios.get('https://canaan-towers-api.herokuapp.com/roof/carousel');
        const response = request.data;
        console.log('building', response)
        for (let i = 0; i < response.length; i++) {
          this.mainCarousel.picture.push(response[i])
        }
      } catch (err) {
      console.log(err);
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
