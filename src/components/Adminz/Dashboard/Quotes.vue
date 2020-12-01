<template>
    <div class='quotes'>
        <Navbar heading='Quotes'/>
        <section class="section--1 flex--3">
            <div class="flex--2 input-search--main">
                <font-awesome-icon :icon="['fas', 'search']" class="font"/>
                <input placeholder="Search"/>
            </div>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(quote, index) in quotes" :key="quote._id">
                        <th scope="row">{{ index + 1}}</th>
                        <td>{{ quote.name }}</td>
                        <td>{{ quote.email }}</td>
                        <td>{{ quote.number }}</td>
                        <div class="status"><td>Pending</td></div>
                    </tr>
                </tbody>
            </table>
            <div>
                pagination
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '@/components/Adminz/Dashboard/Navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      quotes: ''
    }
  },
  async created () {
    try {
      const request = await fetch('http://localhost:5000/quote/admin')
      const response = await request.json()
      console.log('quotes', response)
      this.quotes = response
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
    .quotes {
        text-align: left;
        width: 100%;

        .section--1 {
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            padding: 4rem 7rem;

            .input-search--main {
                width: 60%;
                margin: 2rem 0;
                position: relative;

                input {
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    width: 100%;
                    max-width: 500px;;
                    border: none;
                    outline: none;
                    height: 30px;
                    padding-left: 2rem;
                    font: normal normal normal 14px/20px Poppins;
                    color: #707070;
                    border-bottom: 1px solid hsla(0, 0%, 44%, 0.5)
                }

                .font {
                    color: #858585;
                    position: absolute;
                    left: 0;
                    font-size: 13px
                }
            }

            table {
                width: 100%;
                font: 14px;
            }

            td, th {
                text-align: left;
                padding: 8px;
                border: none;
            }

            tr:nth-child(even) {
                background-color: #f2f2f2;
            }

        }

    }
</style>
