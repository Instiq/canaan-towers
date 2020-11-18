<template>
  <div>
    <b-row>
      <b-col v-for="(val, index) in image" :key="index" cols="6" md="4">
      <router-link :to="link[index]">
        <b-card :img-src="getImgUrl(val)" img-alt="Card image" img-top>
          <b-card-text class="text">
            <h4 class="text-left main">{{ header[index] }}</h4>
              <p class="text-left para">
                {{ para[index] }}
              </p>
            </b-card-text>
          </b-card>
      </router-link>
    </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: [
        '/building-construction',
        '/interior-furnishing',
        '/road-work',
        '/roofing',
        '/automobile-sales',
        '/alternative-power'

      ],
      header: [
        'Building Construction',
        'Interior Furnishing',
        'Road Works',
        'Roofing',
        'Automobile Sales & Servicing',
        'Alternative Power'
      ],
      para: [
        'We build using virtual and modern engineering techniques.',
        'Best designs to furnish your home. Bringing your imaginations alive.',
        'Our professional engineers meticulously constructs road using sophisticated machines.',
        'Browse and order for quality long lasting stone coated roofing sheets',
        'Browse & order for any brands of automobiles',
        'Get our products and enjoy un-interrupted power supply forever.'
      ],
      image: ['bc', 'if', 'rc', 'r', 'as', 'ap']
    }
  },
  methods: {
    getImgUrl (image) {
      var images = require.context('../../assets/images/', false, /\.png$/)
      return images('./' + image + '.png')
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  // padding: 4rem 6rem;
  margin-top: 2rem;
  height: 22rem;
  background-color: white;
  color: $main-blue;
  width: 100%;
  transition: all .3s ease-out;

  p {
    font-size: 1.2rem;
    // width: 190%;
  }

  h4 {
    font-weight: bolder;
  }

  :hover > & {
    transform: scale(1.1);
    background-color: $main-blue;
    color: #fff;
  }

  :hover .para {
    text-decoration: none !important;
  }

}

@media screen and (max-width: 991px) {
  .card {
    margin-bottom: 2rem
  }
}

@media screen and (max-width: 575px) {
  .main {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem !important;
  }

  .card {
    height: 19rem;
  }
}
</style>
