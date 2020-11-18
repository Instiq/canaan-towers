<template>
  <b-container>
    <b-row>
      <b-col v-for="(val, index) in image" :key="index" cols="12" sm="6">
        <div class="card text-left">
            <img :src="getImgUrl(val)" alt="">
            <h4>{{ header[index] }}</h4>
            <p>
                {{ para[index] }}
            </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      header: ['Mission', 'Vision'],
      para: [
        "Canaan Towers Limited exists with a mission- To bring out the what's the best of our stakeholder's. We are committed to all of our promises, our mission is to reap what is best for our clients and we believe that along with our well trained team, we can fulfill an advantageous satisfaction of success for all our customers, but also to our end.",
        'At Canaan Towers Limited, we envisions to be the premier service oriented company around the world. A company that offers not just a high-quality Building Construction design, Interior finishing, Road Work, Automobile sales & servicing, supply and installation Roofing materials, but also a quality that tops world-class.'
      ],
      image: [
        'ms', 'vs'
      ]
    }
  },
  methods: {
    getImgUrl (image) {
      var images = require.context('../../assets/images/', false, /\.svg$/)
      return images('./' + image + '.svg')
    }
  }
}
</script>

<style scoped lang="scss">
    .card {
        padding: 4rem 6rem;
        height: 27rem;
        background-color: $main-blue;
        margin-top: 4.5rem;
        color: #fff;
        // width: 80%;

        p {
        font-size: 1.1rem;
        }

        h4 {
            font-weight: bold;
        }

        img {
            width: 10%;
            margin-bottom: 2rem;
        }

        .card:hover {
      transform: scale(1.1);
      }
    }

@media screen and (max-width: 991px) {
  .card {
        padding: 2rem 3rem;
        height: 27rem;

        img {
            width: 10%;
            margin-bottom: 2rem;
        }
    }
}

@media screen and (max-width: 767px) {
  .card {
        padding: 1.5rem 2rem;
        height: 30rem;

        img {
            width: 10%;
            margin-bottom: 2rem;
        }
    }
}

@media screen and (max-width: 575px) {
  .card {
        padding: 1.5rem 5rem;
        height: 26rem;

        img {
            width: 10%;
            margin-bottom: 2rem;
        }
    }
}
</style>
