<template>
    <div class="sidebar">
        <h1>Sidebar</h1>
        <div class="sidebar-link flex--3">
            <router-link to='/'>Home</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard/finance'>Finance</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
            <router-link to='/dashboard'>Dashboard</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        position: fixed;
        height: 100vh;
        width: 15vw;
        background-color: rgba(173, 172, 233, 0.385);

        &-link {
            width: 100%;
            border: 2px solid red;
            margin: 0 auto;
            // align-items: center;
            

            a {
                list-style: none;
                text-decoration: none;
                color: teal;
                padding: 1rem 0;

            }
        }
    }
</style>