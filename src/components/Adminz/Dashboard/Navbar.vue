<template>
    <div class="navbarz flex--2">
        <h1>{{heading}}</h1>
        <div class="flex--2 input-search">
            <div class="img-container">
                <img src='@/assets/images/profile123.jpg'/>
            </div>
            <p>Hi Admin!</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="font-2"/>
        </div>
    </div>
</template> 

<script>
    export default {
        name: 'Navbar',
        props: ['heading']

    }
</script>

<style lang="scss">
          .navbarz {
            justify-content: space-between;
            width: 100%;
            padding: 5rem 0 3rem;

        h1 {
            color: var(--unnamed-color-acacac);
            text-align: left;
            font: normal normal bold 30px/46px Poppins;
            letter-spacing: 0px;
            color: #ACACAC;
            opacity: 1;
            white-space: nowrap;
        }

        p {
            margin: 0; 
        } 

        .input-search {
        
            p {
                font: normal normal medium 18px/27px Poppins;
                letter-spacing: 0px;
                color: #F06F38;
                padding: 0 1rem;
            }

            .img-container {
                border-radius: 50%;
                overflow: hidden;
                width: 45px;
                height: 45px; 
            }

            img {
                width: 100%;
                height: 110%;
                transform: scale(1.5) translateY(20%);
            }

            .font-2 {
                color: #F06F38;
                font-size: 12px
            }
        }

    }

</style>