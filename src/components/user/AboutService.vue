<template>
    <div class="about-service">
        <h3 class="about-service__header">About Service</h3>
        <p class="text-left para-1">
            At Canaan Towers, we have built structures that comes out the
            exact way it is on the architectural design. tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p class="text-left para-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .about-service {
        padding: 5rem 14rem;
        margin: 6rem 0;
        position: relative;
        background-color: #fff;
        background-image: url("../../assets/images/tech.png");
        box-shadow: 0 .5rem .8rem rgba($color: #000000, $alpha: .4);
        background-position: right;
        background-repeat: no-repeat;
        background-size: 40%;

        &__header:after {
            content:"";
            position: absolute;
            bottom: 0;
            width: 14rem;
            border-radius: .3rem;
            top: 7.4rem;
            margin-left: -12.8rem;
            height: .5rem;
            border-top: .3rem solid #E55B07;
        }
    }

    .para-1,
    .para-2 {
        font-size: 1.3rem;
        margin-top: 4rem;
    }

    @media screen and (max-width: 768px) and (min-width: 481px)  {
        .about-service {
            padding: 5rem 4rem;
            margin: 6rem 0;
            background-size: 80%;

            &__header:after {
                width: 14rem;
                border-radius: .3rem;
                top: 7.4rem;
                margin-left: -12.8rem;
                height: .5rem;
                border-top: .3rem solid #E55B07;
            }
        }

        .para-1,
        .para-2 {
            font-size: 1.3rem;
            margin-top: 4rem;
        }
    }

    @media screen and (max-width: 480px) and (min-width: 320px)  {
        .about-service {
            padding: 3rem 4rem;
            margin: 3rem 0;
            background-size: 80%;

            &__header:after {
                width: 14rem;
                border-radius: .3rem;
                top: 5.4rem;
                margin-left: -12.8rem;
                height: .5rem;
                border-top: .3rem solid #E55B07;
            }
        }

        .para-1,
        .para-2 {
            font-size: 1.3rem;
            margin-top: 2rem;
        }
    }
</style>
