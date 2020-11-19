<template>
    <div class="sidebar">
        <img src='@/assets/images/Logo-1.png'/>
        <div class="link-container">
            <div class="sidebar-link flex--3">
                <router-link to='/admin/dashboard'>Dashboard</router-link>
                <router-link to='/admin/dashboard'>Admin Management</router-link>
                <router-link to='/dashboard'>Create Admin</router-link>
                <router-link to='/dashboard'>Quotes</router-link>
                <router-link to='/dashboard'>Update services</router-link>
                <router-link to='/dashboard'>Manage services</router-link>
            </div>
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
        background-color: rgb(255, 255, 255);
        box-shadow: 0 10px 5px 1px rgb(150, 146, 146);
        padding-top: 2rem;

        img {
            width: 130px;
            height: auto;
        }

        .link-container {
            width: 100%;
            display: flex;
            justify-content: center;
            white-space: nowrap;
            margin-top: 10rem;
            
        }

        &-link {
            width: 50%;
            

            a {
                list-style: none;
                text-decoration: none;
                color: inherit;
                padding: 1rem 0;
                text-align: left;
                font: normal normal 500 14px/21px Poppins;
            }
        }
    }
</style>