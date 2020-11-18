<template>
  <b-container class="mb-5">
    <b-row class="text-left">
      <b-col class="left-text" md="6">
        <h2 class="header-main">
          If you desire to build a modern residential apartment, that meets all
          engineering standards, it is important that you engage us at Canaan
          Towers.
        </h2>
        <p>
          Getting the plans right from the start is important and Canaan Towers
          will play a vital role in ensuring designs and plans are accurately
          implemented.
        </p>
        <p>How we fit into the construction process?</p>
        <p class="ml-5">• We work together with your architect to achieve your vision.</p>
        <p class="ml-5">
          • We ensure that quality and not sub-standard materials are used
          throughout the projects.
        </p>
        <p class="ml-5">
          • We provide foundation designs to ensure compliance with building
          regulations and standards.
        </p>
      </b-col>
      <b-col class="right-image" md="6">
        <img
          :src="getImgUrl(serviceData.mainPicture)"
          alt=""
          class="road-work-img"
        />
        <!-- <b-button class="button">
          <b-icon icon="plus" font-scale="1.5"></b-icon>
          <span>add to my items</span>
        </b-button> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'serviceData'
    ])
  },
  methods: {
    getImgUrl (image) {
      var images = require.context('../../assets/images/', false, /\.png$/)
      return images('./' + image + '.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.left-text {
  background-image: url("../../assets/images/tech-1.png");
  background-size: 120%;
  background-repeat: no-repeat;
  background-position-x: -2rem;
}

.right-image {
  position: relative;
}

.button {
  position: absolute;
  text-transform: capitalize;
  top: 0;
  right: 1.5rem;
  color: #E55B07;
  background-color: #fff;
  padding: 1rem 3rem;
  font-size: 1.3rem;
  font-weight: 800;
  border-radius: 0px;
  font-size: 1rem;

  &:hover {
    background-color: #E55B07;
    color: #fff;
  }
}

.road-work-img {
  width: 100%;
  height: 100%;
  // position: absolute;
  // outline-offset: 1rem;
  // transition: all .5s ease-out;

  // &:hover {
  //     outline: 1.2rem solid #E55B07;
  //     transform: scale(1.05);
  // }
}

.header-main {
    font-size: 2rem;
    font-weight: 800;
    margin: 3.5rem 0 3.5rem 0;
}

p {
    font-size: 1.3rem
}

@media screen and (max-width: 568px) {
  h2 {
    font-size: 1.4rem
  }

  p {
    font-size: 1.1rem
  }
}
</style>
