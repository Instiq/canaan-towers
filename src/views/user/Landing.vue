<template>
    <div>
        <app-header :headerMain="headerMain"></app-header>
        <app-whatsapp></app-whatsapp>
    </div>
</template>

<script>
import Header from '@/components/user/Header2.vue'
import Whatsapp from '@/components/user/Whatsapp.vue'
import Api from '@/store/Auth/Api'
import { mapState } from 'vuex'



export default {
  data () { 
    return {
      headerMain: {
        leftHeader: 'The Best Place For All You Need...',
        leftText: 'Simplifying the complexities of human desires is our specialty. We are for you.'
      },
    }
  },
  components: {
    appHeader: Header,
    appWhatsapp: Whatsapp
  },
  beforeCreate () {
    this.$store.dispatch('makeRequest')
  },
  mounted () {
  },
  computed:  {
    ...mapState ([
      'items'
    ])
    // Add other computed properties here
  },  
  methods: {
    
  }
}
</script>

<style lang="scss">

</style>
