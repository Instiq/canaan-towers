<template>
    <div class='settings'>
        <div class='settings__cover'>
            <img src="@/assets/images/cover.png" alt="cover" class="cover-image"/>
        </div>
        <div class='settings__profile'>
            <img src=@/assets/images/profilepicture.png alt="profile" class="profile-image"/>
        </div>
        <div class='settings__details'>
            <h3 class='username'>Muniru Titlope</h3>
            <p class='title'>Manager</p>
            <h3 class='input-heading'>About</h3>
            <div>
                <div class='input-container'>
                    <label class='input__label'>Full Name</label> 
                    <input type='text' placeholder='Muniru Titilope' class='input'/>
                </div>
                <div class='input-container'>
                    <label class='input__label'>Email</label> 
                    <input type='text' placeholder='m.titilope@tailormade.com' class='input'/>
                </div>
                <div class='input-container'>
                    <label class='input__label'>Permission</label> 
                    <input type='text' placeholder='Manager' class='input'/>
                </div>
                <button class='button'>save changes</button>

                <h3 class='input-heading'>Password</h3>
                <div class='input-container'>
                    <label class='input__label'>Current Password</label> 
                    <input type='password' placeholder='Current Password' class='input'/>
                </div>
                <div class='input-container'>
                    <label class='input__label'>New Password</label> 
                    <input type='text' placeholder='Enter password' class='input'/>
                </div>
                <div class='input-container'>
                    <label class='input__label'>Confirm Password</label> 
                    <input type='text' placeholder='Re-enter password' class='input'/>
                </div>
                <button class='button'>save changes</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            // Settings
        }
    }
</script>

<style lang="scss" scoped>
    .settings {
        position: relative;
        margin: 4rem 0 2rem;
        border-radius: 10px;

        
        .cover-image {
            width: 100%;
            height: 250px;
        }


        &__profile {
            position: relative;
        }

        .profile-image {
            width: 200px;
            height: auto;
            position: absolute;
            top: -7rem;
            left: 7%;
            border: 10px solid #fff;
            border-radius: 50%;
            
        }

        &__details {
            margin: 1.5rem 0 0 380px;

            .username {
                font: normal normal medium 18/32 Poppins;
                color: #263238;
            }

            .title {
                font: normal normal normal 16/24 Poppins;
                color: #90a4ae;
                padding: 0 0 3rem;
            }

            .input-heading {
                font:  normal normal medium 18/32 Poppins;
                color: #080808;
                padding-bottom: 2rem;
            }

            .input-container {
                position: relative;

                .input {
                    width: 493px;
                    height: 68px;
                    border: 1px solid #d2d9dd;
                    border-radius: 8px;
                    background:white 0% 0% no-repeat padding-box;
                    color: #263238;
                    text-align: left;
                    outline: none;
                    font: normal normal medium 16/24 Poppins;
                    padding-left: 32px;
                    margin: 0 0 36px;

                    &__label {
                        position: absolute;
                        top: -11px;
                        left: 32px;
                        padding: 0 5px;
                        background-color: white;
                        border-radius: 5px; 
                        border: 1px solid rgb(248, 248, 248);
                    } 
                }
            }

            .button {
                width: 130px;
                height: 36px;
                background: orangered 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #0000000D;
                border-radius: 5px;
                font: normal normal medium 16/24 Poppins;;
                color: #ffffff;
                text-transform: capitalize;
                cursor: pointer;
                margin-bottom: 4rem;
            }


        }
}
</style>