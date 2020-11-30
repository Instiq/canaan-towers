<template>
  <section class="container">
    <h1 class="heading">Quotes</h1>
    <div>
      <div>
        <line-chart></line-chart>
      </div>
    
    </div>
    
  </section>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
    
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