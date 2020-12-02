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
        leftHeader: 'interior furnishing',
        leftText: 'At Canaan, we have a great team of professional designers that brings your imagination alive. You can also choose any interior design that appeals to you from this page.',
        rightPicture: 'interior-furnishing-main-pic'
      },
      mainCarousel: {
        picture: []
      },
      relatedProjects: {
        picture: [
          'interior-furnishing-1.png', 'interior-furnishing-2.png', 'interior-furnishing-3.png', 'interior-furnishing-4.png', 'interior-furnishing-5.png'
        ]
      },
      catalogueData: {
        images: [
          'interior-furnishing-catalogue-1.png',
          'interior-furnishing-catalogue-2.png',
          'interior-furnishing-catalogue-3.png',
          'interior-furnishing-catalogue-5.png',
          'interior-furnishing-catalogue-5.png',
          'interior-furnishing-catalogue-6.png',
          'interior-furnishing-catalogue-7.png',
          'interior-furnishing-catalogue-8.png',
          'interior-furnishing-catalogue-9.png',
          'interior-furnishing-catalogue-10.png',
          'interior-furnishing-catalogue-11.png',
          'interior-furnishing-catalogue-1.png'
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
    async created () {
    try {
        const request = await axios.get('https://canaan-towers-api.herokuapp.com/furnish/carousel');
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
