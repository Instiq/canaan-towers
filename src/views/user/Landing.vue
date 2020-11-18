<template>
    <div>
        <app-header :headerMain="headerMain"></app-header>
        <app-whatsapp></app-whatsapp>
    </div>
</template>

<script>
import Header from '@/components/user/Header2.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'
import Api from '@/Auth/Api.js'


const { getBuilding } = Api();

export default {
  data () {
    return {
      headerMain: {
        leftHeader: 'The Best Place For All You Need...',
        leftText: 'Simplifying the complexities of human desires is our specialty. We are for you.'
      }
    }
  },
  components: {
    appHeader: Header,
    appWhatsapp: Whatsapp
  },
  mounted () {
    getBuilding("building","slider")
  },
  methods: {
    async getName(){
      const res = await fetch('https://canaan-towers-api.herokuapp.com/building/slider');
      const data = await res.json();
      console.log(data)
    }
  }
}
</script>

<style lang="scss">

</style>
