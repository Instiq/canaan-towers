<template>
    <div class="dashmain">
        <div class="card-container">
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
            <div class="card">
                <h1>Total Admin Created</h1>
                <p>16</p>
            </div>
        </div>
        <div class="chart-container flex--2">
            <div class="chart">
                chart 1 
            </div>
            <div class="chart">
                chart 2 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashmain'        
    }
</script>

<style lang="scss">

    .dashmain {
        text-align: start;
        width: 100%;
        padding: 4rem 5%;

        .card-container {
            gap: 1.5rem;
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

            .card {
                padding: 2rem;
                margin-bottom: 4rem;
                max-width: 600px;

                h1 {
                    text-align: left;
                    font: normal normal 600 22px/30px Poppins;
                    letter-spacing: 0px;
                    color: #CC5722;
                    opacity: 1;
                }

                p {
                    text-align: left;
                    font: normal normal 600 54px/72px Poppins;
                    letter-spacing: 0px;
                    color: #CC5722;
                }
            }
        }

        .chart-container {
            flex-wrap: wrap;
            // gap: 2rem;
            justify-content: space-between;

            .chart {
                background: rgb(255, 255, 255);
                width: 48%;
                max-width: 700px;
                height: 300px
            }
        }
    }

</style>