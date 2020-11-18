<template>
    <div>
        <b-row>
            <b-col cols=3 v-for="(val, index) in title" :key=index>
                <b-card class="text-left">
                    <h5 class="title">
                        {{ title[index] }}
                    </h5>
                    <p class="numb">40</p>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-card>
                s
            </b-card>
        </b-row>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  data () {
    return {
      title: [
        'Total Admins Created',
        'Active Admins',
        'Dormant Admins',
        'Disabled Admins',
        'Total Quotes',
        'Resolved Quotes',
        'Pending Quotes'
      ],
      loaded: true,
      chartData: {
        datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: true
            }
          }]
        }
      }
    }
  },
  extends: Bar,
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style lang="scss">
    .card {
        margin-bottom: 2rem;
        color: $main-orange;
        text-transform: capitalize;
        padding-left: 1rem;
        border: 0px;
        box-shadow: 0 .5rem 1rem rgba(#000, .4);

        .numb {
            font-size: 3rem;
        }
    }
</style>
