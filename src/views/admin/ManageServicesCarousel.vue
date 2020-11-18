<template>
        <b-container fluid class="home">
            <b-row>
                <b-col cols='2'>
                    <app-side-nav></app-side-nav>
                </b-col>
                <b-col cols="10" class="main-content">
                    <app-header :data="data"></app-header>
                    <app-manage-services-carousel-card></app-manage-services-carousel-card>
                </b-col>
            </b-row>
        </b-container>
</template>

<script>
import SideNav from '@/components/admin/SideNav1.vue'
import Header from '@/components/admin/Header.vue'
import ManageServicesCarouselCard from '@/components/admin/ManageServicesCarouselCard.vue'

export default {
  components: {
    appSideNav: SideNav,
    appHeader: Header,
    appManageServicesCarouselCard: ManageServicesCarouselCard
  },
  data () {
    return {
      data: {
        title: 'manage services'
      }
    }
  }
}
</script>

<style lang="scss">
    .home {
        padding: 0;
        margin: 0;
    }
</style>
