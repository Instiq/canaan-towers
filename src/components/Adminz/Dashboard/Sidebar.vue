<template>
    <div class="sidebar" :class="{ toggle: toggler }">
        <img src='@/assets/images/Logo-1.png'/>
        <div class="link-container">
            <div class="sidebar-link flex--3">
                <router-link to='/admin/dashboard' exact class="flex--2 link--height">
                    <p>Dashboard</p>
                    <font-awesome-icon :icon="['fas', 'th-large']" class="font"/>
                </router-link>
                <router-link to='/admin/dashboard/adminmanage' exact class="flex--2 link--height">
                    <p>Admin Management</p>
                    <font-awesome-icon :icon="['fas', 'user-friends']" class="font"/>
                </router-link>
                <router-link to='/admin/dashboard/createadmin' class="flex--2 link--height">
                    <p>Create Admin</p>
                    <font-awesome-icon :icon="['fas', 'folder-plus']" class="font"/>
                </router-link>
                <router-link to='/admin/dashboard/quotes' class="flex--2 link--height">
                    <p>Quotes</p>
                    <font-awesome-icon :icon="['fas', 'th-list']" class="font"/>
                </router-link>
                <router-link to='/admin/dashboard/updateservice' class="flex--2 link--height">
                    <p>Update services</p>
                    <font-awesome-icon :icon="['fas', 'dolly-flatbed']" class="font"/>
                </router-link>
                <router-link to='/admin/dashboard/manageservice' class="flex--2 link--height">
                    <p>Manage services</p>
                    <font-awesome-icon :icon="['fas', 'eye']" class="font"/>
                </router-link>
                <router-link to='/admin/dashboard/settings' class="flex--2 link--height">
                    <p>Settings</p>
                    <font-awesome-icon :icon="['fas', 'user-cog']" class="font"/>
                </router-link>
                <router-link to='/admin' exact class="flex--2 link--height">
                    <p>Logout</p>
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="font"/>
                </router-link>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    props: ['toggler']
}
</script>

<style lang="scss">
    .sidebar {
        position: fixed;
        height: 100vh;
        width: 220px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 10px 5px 1px rgb(150, 146, 146);
        padding-top: 2rem;
        z-index: 10;
        top: 0;
        left: 0;
        transition: margin .3s ease-in;

        img {
            width: 130px;
            height: auto;
        }

        .link-container {
            width: 100%;
            display: flex;
            white-space: nowrap;
            margin: 10rem 0 0 0;

        }

        &-link {
            width: 100%;
            padding-left: 26px;
            position: relative;

            .flex--2 {
                flex-direction: row-reverse;
                justify-content: flex-end;

                .font {
                    width: 18px;
                    height: auto;
                    margin-right: 1rem;
                    color: #ACACAC;
                    font-size: 100px;
                }
            } 

            .link--height {
                height: 0;
                margin-bottom: 4.5rem;
                text-decoration: none;
            }  

            p {
                list-style: none;
                text-decoration: none;
                color: #ACACAC;
                padding: 1rem 0;
                text-align: left;
                margin-top: 1rem;
                font: normal normal 500 14px/21px Poppins;
            }

            a.router-link-active {
                color: #303030;

                &::before {
                    content: "";
                    position: absolute;
                    width: 5px;
                    height: 22px;
                    left: 0;
                    background-color: #F06F38;
                }

                .font, p {
                    color: #303030;
                }

                svg {
                    fill: #303030;
                }
            }

        }
    }
    
    .toggle {
      margin-left: -220px;
      z-index: 1000;
    }

    @media only screen and (min-width: 500px) and (max-width: 700px) {
        .sidebar-link p {
            display: none;
        }

        .sidebar {
            width: 80px;
            min-height: 100vh;
            overflow: hidden;
        }

        .sidebar-link {
            width: 100%;
            position: relative;
        }

        .sidebar-link .flex--2 .font {
            width: 25px;
            margin-left: 5px;
        }
        .sidebar img {
            margin: 0 0 0 1rem;
        }

        .sidebar-link a.router-link-active::before {
            content: "";
                height: 32px;
            }
    }

    //  @media only screen and (max-width: 500px) {
    //      .sidebar-link p {
    //         display: inline;
    //     }

    //     .sidebar {
    //         width: 200px;
    //     }

    //     .sidebar-link .flex--2 .font {
    //         width: 20px;
    //         margin-left: 5px;
    //     }
    //  }
</style>
