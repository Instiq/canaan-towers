<template>
  <section class="container">
    <h1 class="heading">Admin & Quotes Chart</h1>
    <div>
      <div>
        <doughnut-chart></doughnut-chart>
      </div>

    </div>

  </section>
</template>

<script>
import DoughnutChart from './DoughnutChart.js'

export default {
  name: 'VueChartJS',
  components: {
    DoughnutChart

  }
}
</script>

<style lang="scss" scoped>
    .container {
        background-color: white;
        padding: 0rem 0 2rem;
    }
    .heading {
        color: rgb(67, 67, 67);
        padding: 2rem 0;
    }
</style>
