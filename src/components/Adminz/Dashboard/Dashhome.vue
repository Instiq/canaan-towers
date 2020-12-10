<template>
    <div class="flex">
        <div class="hamburger" @click='toggleSidebar = !toggleSidebar'> 
          <font-awesome-icon :icon="['fas', 'align-justify']" class="font"/>
        </div>
        <Sidebar :toggler='toggleSidebar'/>
        <div class="dash--2">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  name: 'Dashboard',
  data() {
    return {
      toggleSidebar: false
    }
  },
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
        margin-left: 200px;
        padding: 0 5%;
        text-align: left;
        width: calc(100% - 200px);
        position: relative;
        z-index: 8;
    }

    .hamburger {
      position: fixed;
      display: none;
      top: 1rem;
      right: 1rem;
      z-index: 20;
      padding: 1rem 1.5rem .5rem;
      border-radius: 10px;
      background-color: #d8d8d8;
      cursor: pointer;

      .font {
        color: #242424;
        font-size: 2rem;
        transform: scaleX(1.2)
      }
    }
    

    @media only screen and (max-width: 700px) {
          .dash--2 {
              margin-left: 0px;
              padding: 0 5%;
              text-align: left;
              width: calc(100% - 0px);
          }
    }

    @media only screen and (max-width: 500px) {
        .hamburger {
          display: inline;
        }
    }
</style>
