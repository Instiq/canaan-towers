<template>
    <div>
        <app-header :headerMain="headerMain"></app-header>
        <app-carousel-main :mainCarousel="mainCarousel"></app-carousel-main>
        <app-about-service></app-about-service>
        <h3 class="building__header--text">Related Projects</h3>
        <app-related-projects :relatedProjects="relatedProjects" :url="url"></app-related-projects>
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

export default {
  data () {
    return {
      headerMain: {
        leftHeader: 'building construction',
        leftText: 'A versatile engineering company with an ubiquitous experience accumulated from successful years of world class projects completion.',
        rightPicture: 'interior-furnishing-main-pic'
      },
      mainCarousel: [],
      relatedProjects: [],
      url: '/building-construction-single'
    }
  },
  async created () {
    try {
        const [carRequest, slideRequest, catRequest] = await Promise.all([
          axios.get('https://canaan-towers-api.herokuapp.com/building/carousel'),
          axios.get('https://canaan-towers-api.herokuapp.com/building/slider'),
        ])
        const carResponse = carRequest.data.data;
        const slideResponse = slideRequest.data.data;
        // const catResponse = catRequest.data;
        console.log('car', carResponse)
        // console.log('cat', catResponse)
        console.log('slider', slideResponse)
        for (let i = 0; i < carResponse.length; i++) {
          this.mainCarousel.push(carResponse[i])
        }
        for (let i = 0; i < slideResponse.length; i++) {
          this.relatedProjects.push(slideResponse[i])
          this.$store.state.buildingData.images.push(slideResponse[i])
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
    appPartners: Partners
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
