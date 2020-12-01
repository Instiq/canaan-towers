<template>
    <div class="dash--login flex--3">

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
            <p class="forgot">Reset password?</p>
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
            }
        },
        methods: {  
            async handleSubmit () {
                let data = {...this.form}
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
                        this.$router.push('/admin/dashboard')
                    }
                } catch (errors) {
                    console.log(errors);
                }
            }
        }
      } catch (error) {
        console.log(error)
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

        .login-form {
            width: 44%;
            max-width: 550px;
            margin-left: 4rem;
            z-index: 2;
            background-color: #FFFFFF;
            padding: 5rem 6rem 2rem;
            border: 2px solid #E36F1A;
            border-radius: 10px;
            position: relative;
            overflow: hidden;

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

            .forgot {
                text-align: center;
                text-decoration: underline;
                font: normal normal normal 17px/23px Avenir;
                letter-spacing: 0px;
                color: #646464;
                padding-top: 1rem;
                width: 90%;
                cursor: pointer;
            }

            .loginfloat {
                position: absolute;
                top: -12rem;
                right: -10rem;
            }

        }
    }
</style>
