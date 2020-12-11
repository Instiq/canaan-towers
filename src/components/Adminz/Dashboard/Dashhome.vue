<template>
    <div class="flex">
        <div class="hamburger">
          <font-awesome-icon :icon="['fas', 'align-justify']"  @click='toggleSidebar = !toggleSidebar' class="font"/>
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
      z-index: 20;
      height: 50px;
      top: 0;
      left: 0;
      padding: 1rem 1.5rem .5rem;
      background-color: #d8d8d8;
      cursor: pointer;
      width: 100%;
      background-color: white;
      box-shadow: 1px 2px 4px rgb(184, 184, 184);

      .font {
        color: #242424;
        font-size: 2rem;
        transform: scaleX(1.2);
        position: absolute;
        right: 2rem;
        top: 1.5rem
      }
    }
    

    @media only screen and (max-width: 700px) {
          .dash--2 {
              margin-left: 80px;
              padding: 0 5%;
              text-align: left;
              width: calc(100% - 80px);
          }
    }

    @media only screen and (max-width: 499px) {
        .hamburger {
          display: inline;
        }

        .dash--2 {
              margin-left: 0;
              padding: 0 5%;
              text-align: left;
              width: 100%;
        }


    }
</style>
