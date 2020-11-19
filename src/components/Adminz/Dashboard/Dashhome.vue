<template>
    <div class="flex">
        <Sidebar/>
        <div class="dash--2">
            <Navbar/>
            <router-view/>
        </div>
    </div> 
</template>

<script>
    import Navbar from './Navbar'
    import Sidebar from './Sidebar'

    export default {
        name: 'Dashboard',
        components: {
            Navbar,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>
    .dash--2 {
        margin: 0 0 0 15vw;
        width: calc(100% - 15vw);
    }

</style>