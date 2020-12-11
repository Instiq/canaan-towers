import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        labels: ['Active Admins', 'Disabled Admins'],
        datasets: [
          {
            label: 'Admin & Quotes Chart',
            backgroundColor: ['#CC5722', '#F0C238'],
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [60, 90]
          }
        ]
      },
      
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
