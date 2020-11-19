<template>
    <div class="dash--login flex--3">
        
        <div class='login-form'>
            <h1>Welcome to Canaan Towers</h1>
            <p>Login to continue</p>
            <div class='input-label'>
                <label for="newTwoot"></label>
                <input id="newTwoot" placeholder="Email Address">
            </div>
            <div class='input-label'>
                <label for="newTwoot"></label>
                <input id="newTwoot" placeholder="Password">
            </div>
            <router-link to='/admin/dashboard'>
                <button>LOGIN</button>
            </router-link>
            <img src="../../assets/images/loginfloat.svg" class="loginfloat"/>
            <p class="forgot">Reset password?</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .dash--login {
        text-align: start;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100vh;

        .login-form {
            width: 50%;
            max-width: 650px;
            margin-left: 4rem;
            z-index: 2;
            background-color: #FFFFFF;
            padding: 4rem 10rem;
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
                top: -10rem;
                right: -8rem;
            }

        }
    }
</style>