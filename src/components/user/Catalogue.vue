<template>
  <b-container class="catalogue mb-5" >
    <b-row>
      <b-col v-for="(val, index) in catalogueData" :key="index" xl="3" lg="4" md="6" sm='6' cols="12">
        <b-card
          :img-src="val.image"
          img-alt="Image"
          img-top
          class="mt-5"
        >
          <b-card-text>
            <div class="d-flex justify-content-between">
                <p>{{ val.description }}</p>
                <router-link to="/checkout">
                    <b-button class="quote-btn"><span>Get Quote</span></b-button>
                </router-link>
            </div>
            <p class="text-left">{{ val.price }}</p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['catalogueData']
}
</script>

<style lang="scss" scoped>
    img {
        height: 20rem;
    }

    .catalogue {
        font-size: 1.2rem;
        font-weight: bold;

        .quote-btn {
            color: #fff;
            background-color: $main-orange;
            border: .5px solid $main-orange
        }
    }

    @media screen and (max-width: 767px) {
      p, span {
        font-size: 1rem
      }
    }

    @media screen and (max-width: 576px) {
      .catalogue {
        padding: 0 8rem;
      }
    }

    @media screen and (max-width: 430px) {
      .catalogue {
        padding: 0 3rem;
      }
    }

</style>
