<template>
    <div class="flex">
        <Sidebar/>
        <div class="dash--2">
            <router-view/>
        </div>
    </div> 
</template>

<script>
    import Sidebar from './Sidebar'

    export default {
        name: 'Dashboard',
        components: {
            Sidebar
        },
        methods: {
            reload (){
                console.log('qwert')
                this.$router.push('/admin')
            }
        },
        mounted () {
            console.log('water')
            let checkExpiration = () => { 
                var values = localStorage.getItem('timeOut');
                console.log('what', values)
                if (values < new Date().getTime()) {
                    localStorage.removeItem("timeOut")
                    localStorage.removeItem("admin");
                    this.$router.push('/admin')
                }
            }
            checkExpiration();
            let intervalCheck = () => {
                var myinterval = 15*60*1000; // 15 mins interval
                setInterval( 
                    function(){ 
                        checkExpiration(); 
                    }, myinterval
                );
            };
            intervalCheck();
        },
    }
    console.log('Dashhome')
</script>

<style lang="scss">
    .dash--2 {
        margin-left:15vw;
        padding: 0 5%;
        text-align: left;
        width: calc(100% - 15vw);
    }
 
</style>