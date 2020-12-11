<template>
    <div class="dash--login flex--3">
        <div v-if="this.errormessage" class="error--message flex--2">
            <p>Error. {{this.errormessage }}</p>
            <span @click="errormessage = ''">&times;</span>
        </div>
        <div v-if="this.success === 'success'" class="error--message success flex--2">
            <p>Success. Logging in...</p>
        </div>
        <div v-if="loading" class='spinnerz flex--2'>
            <img src='@/assets/images/spinnerz.svg' alt=''/>
        </div>
        <form class='login-form' @submit.prevent="handleSubmit">
            <h1>Welcome to Canaan Towers</h1> 
            <p>Login to continue</p>
            <div class='input-label'>
                <label for="newTwoot"></label>
                <input id="newTwoot" placeholder="Email Address" type="text"  v-model="form.email"> 
            </div>
            <div class='input-label'>
                <label for="newTwoot"></label>
                <input id="newTwoot" placeholder="Password" type='password' v-model="form.password">
            </div>
            <button type="submit">LOGIN</button>
            <img src="../../assets/images/loginfloat.svg" class="loginfloat"/>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    email: '',
                    password: '' 
                }, 
                loading: false,
                errormessage: '',
                success: ''
            }
        },
        methods: {  
            async handleSubmit () {
                let data = {...this.form}
                this.loading = true 
                this.form = {};
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
                try { 
                    const request = await fetch('https://canaan-towers-api.herokuapp.com/admin/login', requestOptions);
                    const response = await request.json();
                    let user = JSON.stringify(response.data)
                    let timeOut = new Date().getTime() + 3600000
                    localStorage.setItem('admin', user)
                    localStorage.setItem('timeOut', timeOut)
                    console.log('admin', response);
                    if(response.status === 'success') {
                        console.log('e de alright')
                        this.sucesss = response.status
                        this.$router.push('/admin/dashboard')
                    } else {
                        this.errormessage = response.message
                        console.log('errormessage', this.errormessage)
                    }
                } catch (error) {

                } finally {
                    this.loading = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dash--login {
        text-align: start;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100vh;

        .error--message {
            background-color: rgba(244, 106, 106, 0.975);
            padding: 5px 15px;
            color: white;
            width: 40%;
            max-width: 550px;
            min-width: 350px;
            justify-content: center;

            p {
                margin: 0 1rem 0 0;
                white-space: nowrap;
            }

            span {
                margin-top: .2rem;
                cursor: pointer;
            }
        }

        .success {
            background-color: rgba(68, 183, 100, 0.975);
        }

        .login-form {
            width: 44%;
            max-width: 550px;
            min-width: 500px;
            z-index: 2;
            background-color: #FFFFFF;
            padding: 5rem 6rem 2rem;
            border: 2px solid #E36F1A;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            margin-top: 2rem;


            .input-label {
                margin: 0 0 1rem 0;

                input{
                    width: 90%;
                    height: 50px;
                    padding: 0 0 0 1rem;
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    border: 1px solid #C6C6C6;
                    border-radius: 4px;
                    font: normal normal normal 17px/23px Avenir;
                    letter-spacing: 0px;
                    color: #9B9A9A;
                    margin-bottom: 1.5rem;
                }
            }

            button {
                width: 90%;
                margin-bottom: 1.5rem;
                height: 50px;
                cursor: pointer;
                background: #E36F1A 0% 0% no-repeat padding-box;
                border-radius: 5px;
                opacity: 1;
                font: normal normal 900 15px/20px Avenir;
                letter-spacing: 0px;
                color: #FFFFFF;
            }

            .loginfloat {
                position: absolute;
                top: -12rem;
                right: -10rem;
            }

        }
    }

    @media screen and (max-width: 500px) {
        .dash--login .login-form .loginfloat {
            display: none;
        }

        .dash--login .login-form {
            width: 90%;
            max-width: auto;
            min-width: auto; 
            background-color: #FFFFFF;
            padding: 5rem 3rem 2rem;
        }

        .dash--login .login-form .input-label input {
            width: 100%;
        }

        .dash--login .login-form button {
            width: 100%;
        }


    }
</style>