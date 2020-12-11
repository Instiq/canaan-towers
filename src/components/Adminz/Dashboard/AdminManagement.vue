<template>
    <div class='admin-management'>
        <Navbar heading='Admin Management'/>
        <section class="section--1 flex--3">
            <div class="flex--2 input-search--main">
                <font-awesome-icon :icon="['fas', 'search']" class="font"/>
                <input placeholder="Search"/>
            </div>
            <div v-if="loading" class='spinnerz flex--2'>
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
                        <th scope="col">view</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(admin, index) in admins" :key="admin._id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ admin.name }}</td>
                        <td>{{ admin.email }}</td>
                        <td>{{ admin.number }}</td>
                        <td>{{ admin.number }}</td>
                        <div class="status" v-if="admin.active"><td>Active</td></div>
                        <div class="status disabled" v-else><td>Disabled</td></div>
                        <td><div class="view-admin" @click='selectedAdmin(admin); viewAdmin = true'><font-awesome-icon :icon="['fas', 'eye']" class="font"/></div></td>
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
            <section class="flex--1 view--admin grid--1" v-if="viewAdmin">
                <div class="admin--card flex--1">
                    <div class='flex--3 details--button'>
                        <div class="flex--2 admin-details">
                            <div class="flex--3">
                                <h1>Name</h1>
                                <p>{{singleAdmin.name}}</p>
                            </div>
                            <div class="flex--3">
                                <h1>Email</h1>
                                <p>{{singleAdmin.email}}</p>
                            </div>
                            <div class="flex--3">
                                <h1>Phone No.</h1>
                                <p>{{singleAdmin.number}}</p>
                            </div>
                            <div class="flex--3">
                                <h1>Status</h1>
                                <p>{{singleAdmin.active}}</p>
                            </div>
                        </div>
                        <div class="flex--2">
                            <button @click='viewAdmin = false; activateAdmin()'>Activate</button>
                            <button  @click='viewAdmin = false; revokeAdmin()'>Disable</button>
                        </div>
                    </div>
                </div>
            </section> 

        </section>
    </div>
</template>

<script>
    import Navbar from '@/components/Adminz/Dashboard/Navbar'
    export default {
        components: {
            Navbar
        },
        data(){
            return {
                admins: '',
                loading: true,
                singleAdmin: '',
                viewAdmin: false,
                page: 1,
                totalItem: '',
                perPage: 10,
            }
        },
        computed: {
            numberPages() {
                return Math.ceil( this.totalItem / this.perPage)
            }
        },
        methods: {
            selectedAdmin(admin) {
                this.singleAdmin = admin
            },
            async revokeAdmin() {
                    this.loading = true;
                    let admin= JSON.parse(localStorage.getItem('admin'))
                    let Authorize = admin && admin.token
                    let headers =  {
                        Authorization: `Bearer ${Authorize}`
                    }
                    let id = this.singleAdmin._id;
                    const requestOptions = {
                        method: 'PATCH',
                        headers
                    }
                    try {
                        const request = await fetch(`https://canaan-towers-api.herokuapp.com/admin/revoke/${id}`, requestOptions);
                        const response = await request.json();
                        console.log(response);
                        this.getAdmin()
                    } catch (err) {
                        console.log(err);
                    } finally {
                        this.loading = false;
                    }
            },
            async activateAdmin() {
                    this.loading = true;
                    let admin= JSON.parse(localStorage.getItem('admin'))
                    let Authorize = admin && admin.token
                    let headers =  {
                        Authorization: `Bearer ${Authorize}`
                    }
                    let id = this.singleAdmin._id;
                    const requestOptions = {
                        method: 'PATCH',
                        headers
                    }
                    try {
                        const request = await fetch(`https://canaan-towers-api.herokuapp.com/admin/active/${id}`, requestOptions);
                        const response = await request.json();
                        console.log(response);
                        this.getAdmin()
                    } catch (err) {
                        console.log(err);
                    } finally {
                        this.loading = false;
                    }
            },
            async getAdmin () {
                let admin= JSON.parse(localStorage.getItem('admin'))
                let Authorize = admin && admin.token
                let headers =  {
                        Accept: 'application/json',
                        Authorization: `Bearer ${Authorize}`,
                }
                    try {
                        const request = await fetch(`https://canaan-towers-api.herokuapp.com/admins`, { headers });
                        const response = await request.json();
                        console.log('responseresponse', response)
                        this.admins = response.data.admin;
                        this.totalItem = response.data.count

                    } catch (err) {
                        console.log(err);
                    }  finally {
                        this.loading = false;
                    }
            }
        },
        async created () { 
            this.getAdmin()
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
                border: none
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

            // tr:nth-child(even) {
            //     background-color: #dddddd;
            // }

            .view-admin {
                color: #212529;
                margin: -.3rem 0 0 1rem;
                cursor: pointer
            }


            .view--admin {
                position: fixed;
                background-color: rgba(49, 49, 49, 0.166);
                // height: 100vh;
                width: 100vw;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;

                .admin--card {
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    box-shadow: 0px 3px 6px #00000029;
                    border-radius: 8px;
                    // height: 400px;
                    padding: 10rem 5rem;
                    width: 60%;
                    justify-content: space-between;

                    h1 {
                        font: normal normal 500 16px/27px Poppins;
                        letter-spacing: 0px;
                        color: #ACACAC;
                    }

                    p {
                        font: normal normal 400 14px/24px Poppins;
                        letter-spacing: 0px;
                        color: #0C0500;
                    }
                }

                .details--button {
                    flex: 1;

                    button {
                        width: 20%;
                        height: 38px;
                        background: #e36f1a 0% 0% no-repeat padding-box;
                        margin: 0 3rem 0 0;
                        font: normal normal 400 16px/27px Poppins;
                        letter-spacing: 0px;
                        color: #FFFFFF;
                        border-radius: 5px;
                    }
                }

                .admin-details {
                    justify-content: space-between;
                    margin-bottom: 4rem;
                }
            }

        }

    }
</style>
