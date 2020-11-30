<template>
    <div class='create'>
        <Navbar heading='Create Admin'/>
        <section class="section--1 flex--3">
            <div class="flex--1">
                <div class="input--mainz flex--1">
                    <input placeholder="First Name"/>
                    <input placeholder="Last Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Phone Number"/>
                    <input placeholder="First Time Password"/>
                </div>
                <div class="upload-container flex--3">
                    <div class="image">
                        Upload image
                    </div>
                    <p>Browse</p>
                </div>
            </div>
            <button>Create</button>
        </section>
    </div>
</template>

<script>
    import Navbar from '@/components/Adminz/Dashboard/Navbar'
    export default {
        components: {
            Navbar
        }
    }
</script>

<style lang="scss" scoped>
    .create {
        text-align: left;
        width: 100%;

        .section--1 {
            // display: flex;
            padding: 7rem;
            width: 100%;
            height: 100%;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 8px;

            .flex--1 {
                justify-content: space-between;
            }

             .input--mainz {
                width: 60%;
                flex-wrap: wrap;
                gap: 2rem 3rem;

                input {
                    width: 45%;
                    max-width: 250px;
                    height: 43px;
                    border: 0.5px solid #707070;
                    border-radius: 5px;
                    padding-left: 2rem;
                }
            }
        
            button {
                width: 18%;
                margin-top: 2rem;
                height: 43px;
                border-radius: 4px;
                background: #E36F1A 0% 0% no-repeat padding-box;
                box-shadow: 0px 4px 12px #F06F3866;
                color: white;
            }   

            .upload-container {
                align-items: center;
                

                .image {
                    border: 2px dashed grey;
                    padding: 6rem;
                    border-radius: 4px;
                    margin-bottom: 2rem
                }

                p {
                    text-decoration: underline;
                    font: normal normal normal 14px/21px Poppins;
                    letter-spacing: 0px;
                    color: #CC5722;
                    cursor: pointer
                }

            }

        }
            
            
    }
</style>