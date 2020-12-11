<template>
  <b-container class="mb-5">
    <b-row class="text-left">
      <b-col class="left-text" md="6">
        <h2 class="header-main">
          {{ roadData.images[roadData.index].title }}
        </h2>
        <p>
          {{ roadData.images[roadData.index].description }}
        </p>
      </b-col>
      <b-col class="right-image" md="6">
        <img
          :src="roadData.images[roadData.index].image"
          alt=""
          class="road-work-img"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'serviceData',
      'roadData'
    ])
  }
}
</script>

<style lang="scss" scoped>
.left-text {
  background-image: url("../../assets/images/tech-1.png");
  background-size: 100%;
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
  height: 70%;
}

.header-main {
    font-size: 2rem;
    font-weight: 800;
    margin: 3.5rem 0 3.5rem 0;
    text-transform: capitalize;

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
