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
                        <th scope="row">{{ index + 1 + ( (page - 1) * 10 )}}</th>
                        <td>{{ quote.name }}</td>
                        <td>{{ quote.email }}</td>
                        <td>{{ quote.number }}</td>
                        <div class="status"><td>Pending</td></div>
                    </tr>
                </tbody>
            </table>
            <div class="flex--2">
                <button class="pagination-button" :disabled="page <= 1" @click="page = page - 1; getQuotes()">Previous</button>
                <div v-for="(number, index) of numberPages" :key='number'>
                    <button :class="['pagination-button', page === index + 1 ? 'active' : '']" @click="page = index + 1; getQuotes()">{{index + 1 }}</button>
                </div>
                <button  class="pagination-button" :disabled="page >= numberPages" @click="page = page + 1; getQuotes()">Next</button>
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
        quotes: '',
        page: 1,
        totalItem: '',
        perPage: 10,
    }
  },
  created () {
      this.getQuotes()
  },
  methods: {
    async getQuotes() {
        let admin= JSON.parse(localStorage.getItem('admin'))
        let Authorize = admin && admin.token
        let headers =  {
                Accept: 'application/json',
                Authorization: `Bearer ${Authorize}`,
        }
        try {
        const request = await fetch(`https://canaan-towers-api.herokuapp.com/quote/admin?page=${this.page}`, { headers })
        const response = await request.json()
        console.log('quotes', response)
        this.quotes = response.data.quotes,
        this.totalItem = response.data.count
        console.log(this.totalItem)
        } catch (err) {
        console.log(err)
        }
    }   
  },
  computed: {
      numberPages() {
          return Math.ceil( this.totalItem / this.perPage)
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

            .pagination-button {
                border-radius: 5px;
                padding: 5px 10px;
                border: 2px solid #b3b2b2;
                background-color: #ebe9e9;
                margin-right: 10px;
                cursor: pointer;
                

                &.active {
                    border: 2px solid #b3b2b2;
                    background-color: #ffffff;
                    cursor: auto;
                }

                &:disabled {
                    cursor: auto;
                }
            }

        }

    }
</style>
