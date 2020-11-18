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
        name: 'Admin',
        components: {
            Navbar,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>
    .dash--2 {
        margin-left: 15vw;
        width: 100%;
    }
</style>