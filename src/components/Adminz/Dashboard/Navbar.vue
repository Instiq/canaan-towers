<template>
    <div class="navbarz flex--2">
        <h1>Dashboard</h1>
        <div class="flex--2 input-search">
            <div class="flex--2 input-search--main">
                <p>search</p>
                <input placeholder="Search"/>
            </div>
            <div class="img-container">
                <img src='@/assets/images/profile123.jpg'/>
            </div>
            <p>Hi Admin!</p>
            <p>Arrow</p>
        </div>
    </div>
</template> 

<script>
    // export default {
    //     name: 'Dashome'
    // }
</script>

<style lang="scss">
    .navbarz {
        justify-content: space-between;
        width: 100%;
        padding: 3rem 5%;


        h1 {
            color: var(--unnamed-color-acacac);
        text-align: left;
        font: normal normal bold 34px/46px Poppins;
        letter-spacing: 0px;
        color: #ACACAC;
        opacity: 1;
        }

        p {
            margin: 0;
        }

        .input-search {
            flex: 0 0 70%;
            justify-content: flex-end;
            
           

            &--main {
                width: 60%;
                margin-right: 2rem;

                input {
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    border-radius: 10px;
                    width: 100%;
                    border: none;
                    outline: none;
                    height: 40px;
                    padding-left: 2rem;
                }
            }

            .img-container {
                border-radius: 50%;
                overflow: hidden;
                width: 45px;
                height: 45px; 
            }

            img {
                width: 100%;
                height: 100%;
                transform: scale(1.5) translateY(20%);
            }
        }

    }
</style>