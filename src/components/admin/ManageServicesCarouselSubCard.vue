<template>
    <b-container class="sub-card">
        <div class="text-left header">
            <router-link
                :to="{ path: $store.state.route.from.fullPath }"
                class="mr-auto"
            >
                <b-icon
                icon="arrow-left"
                font-scale="1.5"
                class="icon"
                ></b-icon>
            </router-link>
            <span class="left-text">building construction</span> | <span class="right-text">carousel</span>
        </div>
        <b-row>
            <b-col cols=3 v-for="(image, index) in images" :key=index>
                <b-card
                    :img-src="getImgUrl(image)"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="mb-2"
                >
                    <b-card-text class="delete">
                    Delete
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'building-construction-1',
        'building-construction-2',
        'building-construction-3',
        'building-construction-5'
      ]
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

<style lang="scss" scoped>
    .icon {
        transition: all 0.3s ease;
        color: #000;
        margin-right: 2rem;
        padding-top: .5rem;
        transform: scale(1.5);

        &:hover {
        transform: scale(2);
        }
    }

    .sub-card {
      padding: 1.5rem 3rem 6rem 3rem;

      .card-img-top {
          height: 20rem;
      }

      .delete {
          color: $main-orange;
          font-size: 1.3rem;
          font-weight: bold;
          margin-top: -.7rem;
      }

      .card {
          height: 24rem;
      }

      .header {
          text-transform: capitalize;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 4rem;
      }

      .right-text {
          color: $main-orange;
      }

      .left-text {
          color: #ACACAC;
      }

      .small-card {
        box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
        margin-bottom: 6rem;
      }

      .view {
          padding: 0rem 2rem;
          border-radius: .3rem;
          font-size: 1.3rem;
          font-weight: bold;
          margin-left: 5.7rem;
          height: 8rem;
          background-color: $main-orange;
          border: 0px;

      }

    }

</style>
