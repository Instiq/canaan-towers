<template>
    <div class="flex">
        <Sidebar/>
        <div class="dash--2">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  },
  methods: {
    reload () {
      this.$router.push('/admin')
    }
  },
  mounted () {
    const checkExpiration = () => {
      var values = localStorage.getItem('timeOut')
      if (values < new Date().getTime()) {
        localStorage.removeItem('timeOut')
        localStorage.removeItem('admin')
        this.$router.push('/admin')
      }
    }
    checkExpiration()
    const intervalCheck = () => {
      var myinterval = 5 * 60 * 1000 // 15 mins interval
      setInterval(
        function () {
          checkExpiration()
        }, myinterval
      )
    }
    intervalCheck()
  }
}
console.log('Dashhome')
</script>

<style lang="scss">
    .dash--2 {
        margin-left:15vw;
        padding: 0 5%;
        text-align: left;
        width: calc(100% - 15vw);
    }

    @media only screen and (max-width: 1200px) {
          .dash--2 {
              margin-left: 80px;
              padding: 0 5%;
              text-align: left;
              width: calc(100% - 80px);
          }
    }

</style>
