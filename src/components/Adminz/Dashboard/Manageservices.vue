<template>
    <div class='update'>
        <Navbar heading='Manage Services'/>
        <main class="section--1 flex--3">
            <div class="flex--2 choose">
                <div class="flex--2">
                    <label for="cars" class="category-label"  @click="fetchService()">Choose a Service : </label>
                     <div class='dropdown'>
                        <h5 @click="toggler()" >{{services}}</h5>
                        <ul class="payLinks" :class="{ 'showdropdown':  toggle  }" @click="toggle = !toggle">
                            <li @click="service = 'building'; services = 'Building Construction'; fetchService()">Building Construction</li>
                            <li @click="service = 'power'; services = 'Alternative Power'; fetchService()">Alternative Power</li>
                            <li @click="service = 'furnish'; services = 'Interior Furnishing'; fetchService()">Interior Furnishing</li>
                            <li @click="service = 'automobile'; services = 'Automobile Sales'; fetchService()">Automobile Sales</li>
                            <li @click="service = 'road'; services = 'Road Work'; fetchService()">Road Work</li>
                            <li @click="service = 'roof'; services = 'Roofing Sheets'; fetchService()">Roofing Sheets</li>
                        </ul>
                    </div>
                </div>
                <div class="flex--2 choose-category">
                    <div class="category-label">
                        <p>Category to Update : </p>
                    </div>
                    <button @click="show = 'carousel'; serviceCategory ='carousel'; fetchService()" :class="{'button--notactive': show !== 'carousel'}">Carousel</button>
                    <button @click="show = 'catalogue'; serviceCategory ='catalogue'; fetchService()" :class="{'button--notactive': show !== 'catalogue'}" v-if="service !== 'building' && service !== 'road'">Catalogue</button>
                    <button @click="show = 'project'; serviceCategory ='slider'; fetchService()" :class="{'button--notactive': show !== 'project'}">Project</button>
                </div>
            </div>
            <div class="confirm grid--1" v-if='confirm'>
                <div class="flex--3 confirm-box">
                    <font-awesome-icon :icon="['fas', 'calendar-minus']" class="font"/>
                    <h1>Delete this carousel !</h1>
                    <div class="button flex--2">
                        <button @click='confirm = false'>Cancel</button>
                        <button @click='confirm = false; deleteCarousel()'>Delete</button>
                    </div>
                </div>
            </div>
            <section class="sub-section--1 flex--2" v-if="show === 'carousel'">
                <div class="flex--2 carousel-container">
                    <div v-for='image in carousels' :key='image._id' class="flex--2">
                        <div class="carousel-image flex--3">
                            <div class="img-container">
                                <img :src="image.carousel" alt='carousel'/>
                            </div>
                            <p @click='confirm = true; selectedCarousel(image)'>Delete</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class='sub-section--2 flex--3' v-else-if="show === 'catalogue'">
                <div class="flex--2 carousel-container">
                    <div class="carousel-image flex--3" v-for="catalogue in catalogues" :key='catalogue._id'>
                        <img :src="catalogue.image" alt='carousel'/>
                        <div class="flex--2 button">
                            <button @click='editCatalogue = true; selectCatalogue(catalogue)'>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
                <div class="edit"  v-if='editCatalogue'>
                    <div class="flex--2 edit-container">
                        <span @click='editCatalogue = false'>x</span>
                        <div class="flex--3 input-main">
                            <div class="flex--2 input--12">
                                <div class="flex--3">
                                    <label>Product</label>
                                    <input placeholder="Enter product name" v-model="singleCatalogue.item"/>
                                </div>
                                <div class="flex--3">
                                    <label>Price</label>
                                    <input placeholder="Enter product name" v-model="singleCatalogue.price"/>
                                </div>
                            </div>
                            <div class='flex--3 input--2'>
                                <div class="flex--3">
                                    <label>Product Description</label>
                                    <input placeholder="" v-model="singleCatalogue.description"/>
                                </div>
                                <div class="flex--3">
                                    <label>Specification</label>
                                    <input placeholder="" v-model="singleCatalogue.specification"/>
                                </div>
                                <button>Save Changes</button>
                            </div>
                        </div>
                        <div class="input--3">
                            <div class="upload-container flex--3">
                                <div class="image">
                                    <img :src='singleCatalogue.image' alt=''/>
                                </div>
                                <p>Update image</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class='sub-section--3 flex--1'  v-else-if="show === 'project'">
                <div class="flex--2 carousel-container">
                    <div class="carousel-image flex--3" v-for='project in projects' :key="project._id">
                        <img :src="project.image" alt='project'/>
                        <div class="flex--2 button">
                            <button @click='editProject = true; selectProject(project)'>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
                <div class='input-container flex--2' v-if='editProject'>
                    <div class="flex--2 input-main">
                        <span @click='editProject = false'>x</span>
                        <div class="flex--3 input--1">
                            <input placeholder="Title" v-model="singleProject.title"/>
                            <input placeholder="Description" v-model="singleProject.description"/>
                            <button>Save Changes</button>
                        </div>
                        <div class="upload-container flex--3">
                            <div class="image">
                                <img :src='singleProject.image' alt='project'/>
                            </div>
                            <p>Browse</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import axios from 'axios'

    export default {
        data() {
            return {
                show: 'carousel',
                editCatalogue: false,
                editProject: false,
                items: [],
                carousels: [],
                singleCarousel: {},
                catalogues: [],
                singleCatalogue: {},
                projects: [],
                singleProject: {},
                confirm: false,
                serviceCategory: 'carousel',
                service: 'building',
                services: 'Building Construction',
                toggle: true,
            }
        },
        components: { 
            Navbar
        },
        async created () {
            try {
                const request = await fetch('https://canaan-towers-api.herokuapp.com/building/carousel');
                const response = await request.json();
                console.log('building', response)
                this.carousels = response;
            } catch (err) {
                console.log(err);
            }  
        },
        methods: {
            selectedCarousel(carousel) {
                this.singleCarousel = carousel;
            },
            selectCatalogue(catalogue) {
                this.singleCatalogue = catalogue;
            },
            selectProject(project) {
                this.singleProject = project;
                console.log('why',this.singleProject)
            },
            async deleteCarousel() {
                let id = this.singleCarousel._id;
                let admin= JSON.parse(localStorage.getItem('admin'))
                let Authorized = admin && admin.token
                try {
                    console.log(id, Authorized, '1234')
                    const request = await axios.delete(`https://canaan-towers-api.herokuapp.com/building/carousel/${id}`, {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${Authorized}`,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    console.log('request', request.data)
                    this.fetchService()
                } catch (err) {
                    console.log(err);
                }
            },
            async fetchService() {
                console.log(this.service)
                console.log(this.serviceCategory, 'carousel')
                if (this.serviceCategory === 'carousel') {
                    try {
                    const request = await fetch(`https://canaan-towers-api.herokuapp.com/${this.service}/${this.serviceCategory}`);
                    const response = await request.json();
                    console.log('local trial', response.carousel)
                    this.carousels = response;
                    } catch (err) {
                        console.log(err);
                    }  
                }
                if (this.serviceCategory === 'catalogue') {
                    try {
                    const request = await fetch(`https://canaan-towers-api.herokuapp.com/${this.service}/${this.serviceCategory}`);
                    const response = await request.json();
                    console.log('building', response)
                    this.catalogues = response;
                    } catch (err) {
                        console.log(err);
                    }  
                }
                if (this.serviceCategory === 'slider') {
                    try {
                    const request = await fetch(`https://canaan-towers-api.herokuapp.com/${this.service}/${this.serviceCategory}`);
                    const response = await request.json();
                    console.log('building', response)
                    this.projects = response;
                    console.log('projectssssss', this.projects)
                    } catch (err) {
                        console.log(err);
                    }  
                }
                },
                toggler() {
                    this.toggle = !this.toggle
                }
            }
    }
</script>

<style lang="scss" scoped>
    .update {
        p {
            margin: 0;
        }
        .section--1 {
            padding: 7rem 3rem;
            width: 100%;
            height: 100%;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 8px;

            .choose {
                justify-content: space-between;
                white-space: nowrap;
                display: flex;
                margin-bottom: 4rem;

                .category-label, .select {
                    font: normal normal 400 14px/25px Poppins;
                    letter-spacing: 0px;
                    color: #3A3A3A;
                }

                .select {
                    margin-left: 1rem;
                    color: black
                }

                label {
                    margin: 0;
                }

                .dropdown {
                    position: relative;
                    margin: .5rem 0 0 1rem;
                    font-size: 14px;

                    h5 {
                        color: #414042;
                        display: block;
                        border: 1px solid #5c5c5c;
                        border-radius: 5px;
                        cursor: pointer;
                        width: 150px;
                        white-space: nowrap;
                        padding: .5rem 2rem .5rem 0.5rem;
                        text-align: center;
                    } 

                    .iconDrop {
                        padding-left: 9rem;
                        color: #414042
                    }

                    .payLinks {
                        list-style: none;
                        position: absolute;
                        top: 2.7rem;
                        left: 1px;
                        // padding: 0.1rem -0.1rem 0.1rem .1rem;
                        transform: translateY(0rem);
                        transition: all .2s ease-in;
                        border: 1px solid #5c5c5c;

                        li {
                            color: #424041;
                            background: white;
                            padding: .5rem;
                            transition: all .3s;
                            cursor: pointer;
                            font-size: 14px;

                            &:hover {
                                background: #e8e7e7;;
                            }
                        }
                    }

                    .showdropdown {
                        opacity: 0;
                        visibility: hidden;
                        transform: translateY(-1rem);

                    }
                }

                &-category {
                    // flex: 0 0 60%;

                    button {
                        width: 7rem;
                        height: 32px;
                        background: var(--unnamed-color-e36f1a) 0% 0% no-repeat padding-box;
                        background: #f27c28 0% 0% no-repeat padding-box;
                        margin: 0 0 0 1rem;
                        border-radius: 4px;
                        font: normal normal 300 12px/30px Poppins;
                        letter-spacing: 0px;
                        color: #FFFFFF;
                    }

                    .button--notactive {
                        background: #f2b285 0% 0% no-repeat padding-box;
                    }
                }
            }

            %carouselimage {
                align-items: center;
                justify-content: space-between;
                gap: 3rem 1rem;
                flex-wrap: wrap;
                width: 100%;

                .carousel-image {
                    align-items: center;
                    width: 30%;
                    min-width: 150px;

                    img {
                        width: 100%;
                        min-width: 200px;
                    }

                    p {
                        font: normal normal 400 16px/30px Poppins;
                        letter-spacing: 0px;
                        color: #E36F1A;
                        padding: 1rem 0;
                        cursor: pointer;
                    }
                }
            }

            %button {
                text-align: center;
                font: normal normal 600 16px/30px Poppins;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;
                width: 200px;
                height: 48px;
                background: var(--unnamed-color-e36f1a) 0% 0% no-repeat padding-box;
                background: #E36F1A 0% 0% no-repeat padding-box;
                box-shadow: 0px 4px 12px #af9a9066;
                border-radius: 4px;
                margin-top: 3rem;
            }

            %upload {
                align-items: center;

                .image {
                    border: 2px dashed grey;
                    padding: 6rem;
                    border-radius: 4px;
                    margin-bottom: 2rem
                }

                p {
                    text-decoration: underline;
                    font: normal normal normal 14px/21px Poppins;
                    letter-spacing: 0px;
                    color: #CC5722;
                    cursor: pointer
                }

            }

            %buttonUnderneath {
                .button {
                    justify-content: space-between;
                    width: 100%;
                    min-width: 200px;

                    button {
                        @extend %button;
                        width: 25%;
                        font: normal normal 300 14px/25px Poppins;
                        height: 27px;
                        margin-top: 2rem;
                    }
                }
            }

            %edit {
                position: fixed;
                display: grid;
                place-items: center;
                background-color: rgba(50, 50, 50, 0.6);
                width: 100vw;
                height: 100vh;
                top: 0;
                left: 0;
                bottom: 0;
                right:0;
                padding-left: 15rem;
            }

            %container {
                background-color: #ffffff;
                width: 70%;
                max-width: 800px;
                margin: 0 auto;
                padding: 5rem;
                justify-content: space-between;
                border-radius: 5px;
                position: relative;
            }

            %span {
                position: absolute;
                font: normal normal 500 16px/20px Poppins;
                right: 2rem;
                top: 1.5rem;
                padding: 2px 7px 5px;
                cursor: pointer;
            }

            .confirm {
                position: fixed;
                top: 0;
                left: 0;
                background-color:rgba(112, 112, 112, 0.2);
                height: 100vh;
                width: 100vw;
                justify-content: center;

                &-box {
                    background: white;
                    border-radius: 5px;
                    padding: 2rem 6rem 3rem;
                    width: 100%;
                    align-items: center;

                    .font {
                        color: #444444;
                        margin: 1.5rem 0;
                        font-size: 30px;
                    }

                    h1 {
                        font: normal normal 400 14px/15px Poppins;
                    }

                    .button {
                        // justify-content: flex-end;

                        gap: 2rem;
                    }

                    button {
                        @extend %button;
                        font: normal normal 300 12px/15px Poppins;
                        width: 60px;
                        height: 25px;
                        margin: 2rem 0;
                    }
                }
            }

            .sub-section--1 {
                justify-content: space-between;

                .carousel-container {
                    @extend %carouselimage;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    grid-gap: 2rem;

                    .carousel-image {
                        width: 100%;

                        img {
                            width: 100%;
                            object-fit: contain;
                        }
                    }
                }
            }

            .sub-section--2 {
                justify-content: space-between;

                .carousel-container {
                    @extend %carouselimage;

                    @extend %buttonUnderneath
                }

                label {
                    text-align: left;
                    font: normal normal 400 14px/15px Poppins;
                    letter-spacing: 0px;
                    color: #101010;
                }

                input {
                    font: normal normal 300 12px/21px Poppins;
                    letter-spacing: 0px;
                    color: black;
                    opacity: 1;
                    border: 0.5px solid #707070;
                    border-radius: 5px;
                    padding: 0 1rem;
                }

                .input--12 {
                    gap: 2rem;

                    .flex--3 {
                        margin-bottom: 2rem;
                    }

                    input {
                        width: 100%;
                        height: 30px;
                    }
                }
                .input--2, .input--3 {
                    .flex--3 {
                        margin-bottom: 2rem;
                    }
                    input {
                        width: 100%;
                        height: 60px;
                        opacity: 1;
                    }
                }

                .input--3 {
                    flex: 0 0 40%;

                    button {
                        @extend %button;
                        font: normal normal 400 14px/30px Poppins;

                    }
                }

                .upload-container {
                    @extend %upload;

                    .image {
                        padding: 0;
                        width: 200px;
                        height: auto;
                    }

                    img {
                        width: 100%;
                    }
                }

                .edit {
                    @extend %edit;

                    &-container {
                        @extend %container;
                        position: relative;

                        span {
                            @extend %span;
                        }

                        .input-main {
                            button {
                                @extend %button;
                                font: normal normal 400 14px/30px Poppins;
                            }
                        }
                    }
                }
            }

            .sub-section--3 {
                justify-content: space-between;

                .carousel-container {
                    @extend %carouselimage;
                    @extend %buttonUnderneath;

                }

                .input-container {
                    @extend %edit;

                    .input-main {
                        @extend %container;

                        span {
                            @extend %span;
                            padding: 1px 4px;
                        }

                        button {
                            height: 30px;
                            font: normal normal 300 14px/30px Poppins;
                            @extend %button;
                            width: 135px;
                        }
                    }
                }

                .input--1 {
                    flex: 0 0 40%;

                    button {
                        @extend %button;
                        width: 30%;
                    }
                }

                input {
                    font: normal normal 400 12px/21px Poppins;
                    letter-spacing: 0px;
                    color: #0C0500;
                    opacity: 1;
                    border: 0.5px solid #707070;
                    border-radius: 5px;
                    padding: 0 1rem;
                    height: 70px;
                    width: 100%;
                    max-width: 350px;
                    margin: 0 0 2rem;
                    white-space: wrap;

                    &:first-child {
                        height: 30px;
                    }

                }

                .upload-container {
                    @extend %upload;

                    .image {
                        padding: 0;
                        width: 200px;
                        height: auto;
                    }

                    img {
                        width: 100%;
                    }
                }
            }

        }

        .select {
            cursor: pointer
        }

    }

</style>
