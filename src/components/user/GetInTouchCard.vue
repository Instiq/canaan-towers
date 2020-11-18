<template>
  <b-container class="main-container">
    <b-row>
      <b-col cols="12" v-for="(val, index) in data.text" :key=index md="6" class="mb-5">
        <b-card class="card" >
            <img :src="getImgUrl(data.img, index)" :alt="data.img[0]" class="image">
            <p>
                {{ data.text[index] }}
            </p>
            <div v-if="index == 0">
              <b-button class="button" to="/quote">
                <span>
                  {{ data.button[index] }}
                </span>
              </b-button>
            </div>
            <div v-if="index == 1">
              <b-button class="button">
                <span>
                  {{ data.button[index] }}
                </span>
              </b-button>
            </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    getImgUrl (image, index) {
      var images = require.context('../../assets/images/', false, /\.svg$/)
      return images('./' + image[index] + '.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  margin-bottom: 20rem;
}

.card {
    position: absolute;
    top: -10rem;
    width: 80%;
    height: 25rem;
    margin: 0 4rem;
    box-shadow: 0 .5rem 1rem rgba($main-orange, 0.5);
    transition: all .5s ease;
    padding: 1.5rem;

    &:hover {
        transform: scale(1.1);
    }
}

.image {
    width: 10%;
    margin-bottom: 2rem;
}

p {
    color: #2B2B2B;
    font-size: 1.4rem;
    margin-bottom: 3rem;
    font-weight: bold;
}

span {
  font-weight: bold
}

.button {
    color: #2B2B2B;
    background-color: #fff;
    padding: 1.2rem 3rem;
    border: .1px solid rgba(#fff, 0.1);
    font-size: 1.3rem;
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.5);

    &:hover {
        color: #fff;
        background-color: #2B2B2B;
        border: .1px solid rgba(#2B2B2B, 0.1);
    }
}

@media screen and (max-width: 768px) {
  .card {
    position: relative;
    top: 3rem;
    width: 80%;
    height: 25rem;
    margin: 0 4rem;
    box-shadow: 0 .5rem 1rem rgba($main-orange, 0.5);
    transition: all .5s ease;
    padding: 1.5rem;
  }

  p, span {
    font-size: 1.1rem
  }
}
</style>
