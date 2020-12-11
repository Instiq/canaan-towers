<template>
    <div class="navbarz flex--2">
        <h1>{{heading}}</h1>
        <div class="flex--2 input-search">
            <p>Welcome back, {{userName}}</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="font-2"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['heading'],
  data() {
    return {
        userName: ''
    }
  },
  mounted () {
    let user = JSON.parse(localStorage.getItem('admin'))
    console.log(user.admin.name, 'this is the user')
    this.userName = user.admin.name
  }
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

            .font-2 {
                color: #F06F38;
                font-size: 12px
            }
        }

    }


    @media only screen and (max-width: 500px) {
        .navbarz {
            padding: 5rem 0 1rem;
        }

        .navbarz h1 {
            font: normal normal bold 20px/46px Poppins;
            margin-bottom: 0;
        }

        .navbarz .input-search p {
            font: normal normal medium 16px/27px Poppins;
            font-size: 14px;
            white-space: nowrap;
        }
    }
</style>
