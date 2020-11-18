<template>
  <div>
    <app-head></app-head>
    <app-cards></app-cards>
    <app-whatsapp></app-whatsapp>
    <img src="../../assets/images/CanaanArc.png" class="HomeArc" />
    <app-texts></app-texts>
    <router-link to="/"
      ><button class="register">Get a Quote</button></router-link
    >
    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/about"> About Us</router-link>

      <router-link to="/contact"> Contact</router-link>
    </div>
    <router-link to="/checkout"
      ><button class="register">Get a Quote</button></router-link
    >
  </div>
</template>

<script>
import Whatsapp from '@/components/user/Whatsapp.vue'
import Cards from '@/components/user/Cards.vue'
import Texts from '@/components/user/Texts.vue'
import Head from '@/components/user/Head.vue'
export default {
  data () {
    return {
      // HomeArc: require('@/assets/images/HomeArc.jpeg')
      Logo: require('@/assets/images/Logo-1.png')
    }
  },
  components: {
    appCards: Cards,
    appTexts: Texts,
    appHead: Head,
    appWhatsapp: Whatsapp
  }
}
</script>

<style scoped>
.HomeArc {
  position: absolute;
  /* width: 70vw; */
  width: calc(100% - 30vw);
  right: 0;
  top: 0;
  z-index: -1;
}
.topnav {
  position: absolute;
  left: 500px;
  font: normal normal bold 18px/80px Lato;
  letter-spacing: 0px;
  top: 1px;
}

.topnav a {
  float: left;
  color: white;
  text-align: center;
  margin: 2px 60px;
  text-decoration: none;
  font-size: 15px;
}

.topnav a::after {
  content: "";
  display: block;
  position: relative;
  width: 0;
  height: 5px;
  background: white;
  transition: width 0.3s;
}

.topnav a:hover::after {
  width: 100%;
  height: 5px;
  bottom: 25px;
  transition: width 0.3s;
}

.register {
  position: absolute;
  left: 1030px;
  width: 130px;
  height: 40px;
  top: 22px;
  color: white;
  border: 0.8px solid #e55b07;
  background-color: transparent;
  border-radius: 5px;
  opacity: 1;
  font-size: 13px;
  text-align: center;
}

.register:hover {
  color: white;
  background-color: #e55b07;
}
</style>
