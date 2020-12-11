<template>
    <div>
        <app-navbar></app-navbar>
        <app-secondary-header></app-secondary-header>
        <app-tertiary-header :title="title"></app-tertiary-header>
        <!-- {{ roadData }} -->
        <app-road-work></app-road-work>
        <app-promise></app-promise>
        <app-get-in-touch></app-get-in-touch>
        <app-get-in-touch-card :data="data"></app-get-in-touch-card>
        <div class="related-div">
          <h3 class="building__header--text">Related Projects</h3>
          <app-related-projects :relatedProjects="relatedProjects" :url="url"></app-related-projects>
        </div>
        <app-whatsapp></app-whatsapp>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar2 from '@/components/user/Navbar2.vue'
import SecondaryHeader from '@/components/user/SecondaryHeader.vue'
import TertiaryHeader from '@/components/user/TertiaryHeader.vue'
import RoadWork from '@/components/user/RoadWork.vue'
import OurPromise from '@/components/user/Promise.vue'
import GetInTouch from '@/components/user/GetInTouch.vue'
import GetInTouchCard from '@/components/user/GetInTouchCard.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'
import Footer from '@/components/user/Footer.vue'
import RelatedProjects from '@/components/user/RelatedProjects.vue'
import axios from 'axios'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'roadData'
    ])
  },
  data () {
    return {
      url: '/road-work-single',
      title: 'road works',
      data: {
        text: [
          'You can request for a quote for this service by clicking the button below',
          "Do you wish to contact your friends for any support? Don't worry.... We are here for you."
        ],
        img: [
          'get-in-touch-1',
          'get-in-touch-2'
        ],
        button: [
          'Get quote',
          '+234-803-981-2121'
        ]
      },
      relatedProjects: []
    }
  },
  async created () {
    try {
        const [slideRequest] = await Promise.all([
          axios.get('https://canaan-towers-api.herokuapp.com/road/slider')
        ])
        const slideResponse = slideRequest.data.data;
        console.log('slider', slideResponse)
        for (let i = 0; i < slideResponse.length; i++) {
          this.relatedProjects.push(slideResponse[i])
        }
      } catch (err) {
      console.log(err);
    }  
  },
  components: {
    appNavbar: Navbar2,
    appSecondaryHeader: SecondaryHeader,
    appTertiaryHeader: TertiaryHeader,
    appRoadWork: RoadWork,
    appPromise: OurPromise,
    appGetInTouch: GetInTouch,
    appGetInTouchCard: GetInTouchCard,
    appWhatsapp: Whatsapp,
    appFooter: Footer,
    appRelatedProjects: RelatedProjects
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
@media screen and (max-width: 768px) {
  .related-div {
    margin-top: -15rem;
  }
}
</style>
