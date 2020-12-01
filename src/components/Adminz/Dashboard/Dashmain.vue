<template>
    <div class="dashmain">
        <Navbar heading='Dashboard'/>
        <div class="card-container">
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card flex--3">
                <h1>Active Admin</h1>
                <p>16</p>
            </div>
            <div class="card flex--3">
                <h1>Dormant Admin</h1>
                <p>16</p>
            </div>
            <div class="card flex--3">
                <h1>Disabled Admin</h1>
                <p>16</p>
            </div>
            <div class="card flex--3">
                <h1>Total Quotes</h1>
                <p>16</p>
            </div>
            <div class="card flex--3">
                <h1>Resolved Quotes</h1>
                <p>09</p>
            </div>
            <div class="card">
                <h1>Pending Quotes</h1>
                <p>06</p>
            </div>
        </div>
        <div class="chart-container flex--2">
            <div class="chart">
                <Chart/>
            </div>
            <div class="chart">
                <Chart/>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Adminz/Dashboard/Navbar'
import Chart from '@/components/Adminz/Dashboard/Chart/Chart'
export default {
  name: 'Dashmain',
  components: {
    Navbar,
    Chart
  }
}
</script>

<style lang="scss" scoped>
    .dashmain {
        text-align: start;
        width: 100%;
        color: #ffa07a;

        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 2rem;
            margin-bottom: 4rem;
            border-radius: 50%;
            flex-wrap: wrap;

            .card {
                padding: 2rem;
                border-radius: 10px;
                align-items: center;
                justify-content: center;
                padding-top: 3rem;
                justify-content: space-between;
                white-space: nowrap;
                // padding: 2rem;

                h1 {
                    text-align: left;
                    font: normal normal 400 16px/30px Poppins;
                    letter-spacing: 0px;
                    color: #CC5722;
                    opacity: 1;
                }

                p {
                    text-align: left;
                    font: normal normal 600 30px/30px Poppins;
                    letter-spacing: 0px;
                    color: #d89474;
                }
            }
        }

        .chart-container {
            justify-content: space-between;
            gap: 2rem;
            flex-wrap: wrap;
            margin: 4rem 0;

            .chart {
                flex: 1 1 300px;
                // width: 45%;
                min-width: 100px;
            }
        }
    }

</style>
