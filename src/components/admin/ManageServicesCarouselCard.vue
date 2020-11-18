<template>
  <b-card class="main-card">
    <b-card-text>
      <app-card></app-card>
    </b-card-text>
  </b-card>
</template>

<script>
import Card from './ManageServicesCarouselSubCard.vue'

export default {
  components: {
    appCard: Card
  }
}
</script>

<style lang="scss" scoped>
.main-card {
  border: 0.1ps solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
}
</style>
