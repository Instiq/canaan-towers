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
      mainCarousel: [],
      relatedProjects: [],
      catalogueData: []
    }
  },
  async created () {
    try {
        const [carRequest, slideRequest, catRequest] = await Promise.all([
          axios.get('https://canaan-towers-api.herokuapp.com/roof/carousel'),
          axios.get('https://canaan-towers-api.herokuapp.com/roof/slider'),
          axios.get('https://canaan-towers-api.herokuapp.com/roof/catalogue')
        ])
        const carResponse = carRequest.data.data;
        const slideResponse = slideRequest.data.data;
        const catResponse = catRequest.data.data;
        console.log('car', carResponse)
        console.log('cat', catResponse)
        console.log('slider', slideResponse)
        for (let i = 0; i < carResponse.length; i++) {
          this.mainCarousel.push(carResponse[i])
        }
        for (let i = 0; i < catResponse.length; i++) {
          this.catalogueData.push(catResponse[i])
        }
        for (let i = 0; i < slideResponse.length; i++) {
          this.relatedProjects.push(slideResponse[i])
          // this.$store.state.roofData.images.push(slideResponse[i])
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
