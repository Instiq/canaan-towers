<template>
    <div class="sidebar">
        <img src='@/assets/images/Logo-1.png'/>
        <div class="link-container">
            <div class="sidebar-link flex--3">
                <router-link to='/admin/dashboard' exact class="flex--2">
                    <a>Dashboard</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.269 14.269"><path class="a" d="M4.5,12.427h6.342V4.5H4.5Zm0,6.342h6.342V14.013H4.5Zm7.927,0h6.342V10.842H12.427Zm0-14.269V9.256h6.342V4.5Z" transform="translate(-4.5 -4.5)"></path>
                    </svg>
                </router-link>
                <router-link to='/admin/dashboard/adminmanage' exact class="flex--2">
                    <a>Admin Management</a>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 22.941 16.059"><path class="a" d="M6.882,10.279A4.015,4.015,0,1,0,2.868,6.265,4.013,4.013,0,0,0,6.882,10.279Zm2.753,1.147h-.3a5.543,5.543,0,0,1-4.911,0h-.3A4.13,4.13,0,0,0,0,15.556v1.032a1.721,1.721,0,0,0,1.721,1.721H12.044a1.721,1.721,0,0,0,1.721-1.721V15.556A4.13,4.13,0,0,0,9.635,11.426Zm7.571-1.147a3.441,3.441,0,1,0-3.441-3.441A3.442,3.442,0,0,0,17.206,10.279Zm1.721,1.147H18.79a4.52,4.52,0,0,1-3.169,0h-.136a3.981,3.981,0,0,0-2,.552,5.246,5.246,0,0,1,1.423,3.577v1.376c0,.079-.018.154-.022.229h6.33a1.721,1.721,0,0,0,1.721-1.721A4.013,4.013,0,0,0,18.926,11.426Z" transform="translate(0 -2.25)"/></svg>
                </router-link>
                <router-link to='/admin/dashboard/createadmin' class="flex--2">
                    <a>Create Admin</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.06 18.448"><path class="a" d="M23.754,8.306H14.53L12.224,6H5.306A2.288,2.288,0,0,0,3.012,8.306L3,22.142a2.3,2.3,0,0,0,2.306,2.306H23.754a2.3,2.3,0,0,0,2.306-2.306V10.612A2.3,2.3,0,0,0,23.754,8.306ZM22.6,17.53H19.142v3.459H16.836V17.53H13.377V15.224h3.459V11.765h2.306v3.459H22.6Z" transform="translate(-3 -6)"></path></svg>
                </router-link>
                <router-link to='/admin/dashboard/quotes' class="flex--2">
                    <a>Quotes</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.005 14.004"><path class="a" d="M4.668,8v2.5a.75.75,0,0,1-.75.75H.75A.75.75,0,0,1,0,10.5V8a.75.75,0,0,1,.75-.75H3.918a.75.75,0,0,1,.75.75ZM0,13v2.5a.75.75,0,0,0,.75.75H3.918a.75.75,0,0,0,.75-.75V13a.75.75,0,0,0-.75-.75H.75A.75.75,0,0,0,0,13ZM3.918,2.25H.75A.75.75,0,0,0,0,3V5.5a.75.75,0,0,0,.75.75H3.918a.75.75,0,0,0,.75-.75V3a.75.75,0,0,0-.75-.75Zm2.5,14h8.836A.75.75,0,0,0,16,15.5V13a.75.75,0,0,0-.75-.75H6.419a.75.75,0,0,0-.75.75v2.5A.75.75,0,0,0,6.419,16.254ZM5.668,3V5.5a.75.75,0,0,0,.75.75h8.836A.75.75,0,0,0,16,5.5V3a.75.75,0,0,0-.75-.75H6.419A.75.75,0,0,0,5.668,3Zm.75,8.252h8.836A.75.75,0,0,0,16,10.5V8a.75.75,0,0,0-.75-.75H6.419a.75.75,0,0,0-.75.75v2.5A.75.75,0,0,0,6.419,11.253Z" transform="translate(0 -2.25)"></path></svg>
                </router-link>
                <router-link to='/admin/dashboard/updateservice' class="flex--2">
                    <a>Update services</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.888 18.494"><path class="a" d="M4.238,11.821c3.935.491,13.182,4.927,14.641,11.174H0C4.792,22.6,8.886,16.4,4.238,11.821ZM5.779,4.5a9.157,9.157,0,0,1,2.235,6.434c3.993,1.623,9.984,5.958,11.251,12.06h4.624C21.928,12.586,10.731,5.247,5.779,4.5Z" transform="translate(0 -4.5)"></path></svg>
                </router-link>
                <router-link to='/admin/dashboard/manageservice' class="flex--2">
                    <a>Manage services</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.325 18.217"><path class="a" d="M27.16,12.916A15.216,15.216,0,0,0,13.662,4.5a15.218,15.218,0,0,0-13.5,8.416,1.535,1.535,0,0,0,0,1.385,15.216,15.216,0,0,0,13.5,8.416A15.218,15.218,0,0,0,27.16,14.3,1.535,1.535,0,0,0,27.16,12.916Zm-13.5,7.524a6.831,6.831,0,1,1,6.831-6.831A6.831,6.831,0,0,1,13.662,20.44Zm0-11.385a4.521,4.521,0,0,0-1.2.18,2.27,2.27,0,0,1-3.174,3.174,4.544,4.544 ,0,1,0,4.374-3.353Z" transform="translate(0 -4.5)"></path></svg>
                </router-link>
            </div> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
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
            white-space: nowrap;
            margin: 10rem 0 0 0;

        }

        &-link {
            width: 100%;
            padding-left: 2vw;
            position: relative;

            .flex--2 {
                flex-direction: row-reverse;
                justify-content: flex-end;

                svg, img {
                    width: 15px;
                    margin-right: 1rem;
                    fill: #ACACAC;
                    color: #ACACAC;
                    font-size: 100px
                }
            }   
            a, a:hover {
                list-style: none;
                text-decoration: none;
                color: #ACACAC;
                padding: 1rem 0;
                text-align: left;
                font: normal normal 500 12px/21px Poppins;
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

                svg {
                    fill: #303030;
                }
            }

        }
    }
</style>
