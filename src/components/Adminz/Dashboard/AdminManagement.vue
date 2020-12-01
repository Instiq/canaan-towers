<template>
    <div class='admin-management'>
        <Navbar heading='Admin Management'/>
        <section class="section--1 flex--3">
            <div class="flex--2 input-search--main">
                <font-awesome-icon :icon="['fas', 'search']" class="font"/>
                <input placeholder="Search"/>
            </div>
            <div v-if="loading" class='spinner flex--2'>
                <img src='@/assets/images/spinnerz.svg' alt=''/>
            </div>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(admin, index) in admins" :key="admin._id">
                        <th scope="row">{{ index + 1}}</th>
                        <td>{{ admin.name }}</td>
                        <td>{{ admin.email }}</td>
                        <td>{{ admin.number }}</td>
                        <td>{{ admin.number }}</td>
                        <div class="status" v-if="admin.active"><td>Active</td></div>
                        <div class="status disabled" v-if="admin.active === false"><td>Disabled</td></div>
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
      admins: '',
      loading: true
    }
  },
  async created () {
    const admin = JSON.parse(localStorage.getItem('admin'))
    const Authorize = admin && admin.token
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${Authorize}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    try {
      const request = await fetch('http://localhost:8080/admins', { headers })
      const response = await request.json()
      this.admins = response
      this.loading = false
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
    .admin-management {
        text-align: left;
        width: 100%;

        .section--1 {
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            padding: 4rem 7rem;

            .spinner {
                position: fixed;
                top: 0;
                left: 0;
                background-color:rgba(112, 112, 112, 0.2);
                height: 100vh;
                width: 100vw;
                justify-content: center;
            }

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
                white-space: nowrap;
                font-size: 14px;
                border: none;
            }

            td, th {
                border: none;
            }

            .status {
                margin: .5rem 0;

                td {
                    color: white;
                    background: #31ae44;
                    margin : 1rem 0;
                    padding: 0;
                    width: 80px;
                    border-radius: 57px;
                    text-align: center;
                }
            }

            .disabled {
                td {
                    background: #243141;
                }
            }

            // tr:nth-child(even) {
            //     background-color: #dddddd;
            // }

        }

    }
</style>
