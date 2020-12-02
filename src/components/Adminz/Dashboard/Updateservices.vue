<template>
    <div class='update'>
        <Navbar heading='Update Services'/>
        <main class="section--1 flex--3">
            <div class="flex--2 choose">
                <div class="flex--2">
                    <label for="cars" class="category-label">Choose a Service :</label>
                    <div class='dropdown'>
                        <h5 @click="toggler()" >{{services}}</h5>
                        <ul class="payLinks" :class="{ 'showdropdown':  toggle  }" @click="toggle = !toggle">
                            <li @click="service = 'building'; services = 'Building Construction'">Building Construction</li>
                            <li @click="service = 'power'; services = 'Alternative Power'">Alternative Power</li>
                            <li @click="service = 'furnish'; services = 'Interior Furnishing'">Interior Furnishing</li>
                            <li @click="service = 'automobile'; services = 'Automobile Sales'">Automobile Sales</li>
                            <li @click="service = 'road'; services = 'Road Work'">Road Work</li>
                            <li @click="service = 'roof'; services = 'Roofing Sheets'">Roofing Sheets</li>
                        </ul>
                    </div>
                </div> 
                <div class="flex--2 choose-category">
                    <div class="category-label">
                        <p>Category to Update : </p>
                    </div>
                    <button @click="show = 'carousel'; serviceCategory ='carousel';" :class="{'button--notactive': show !== 'carousel'}">Carousel</button>
                    <button @click="show = 'catalogue'; serviceCategory ='catalogue';" :class="{'button--notactive': show !== 'catalogue'}" v-if="service !== 'building' && service !== 'road'">Catalogue</button>
                    <button @click="show = 'project'; serviceCategory ='slider';" :class="{'button--notactive': show !== 'project'}">Project</button>
                </div>
            </div>
            <form @submit.prevent="postService" class="sub-section--1 flex--2" v-if="show === 'carousel'">
                <div class="upload">
                    <p><input type="file" @change="fileSelected"></p>
                </div>
                <div class="upload--1 flex--3">
                    <h1 v-if='previewer === false' class="upload--2">Image Preview</h1>
                    <p v-if='previewer' class="upload--2"><img :src='preview' alt='Preview Image' class="preview"/></p>
                    
                    <button  type='submit'>Add +</button>
                </div>
            </form>
            <form @submit.prevent="postService" class='sub-section--2 flex--1' v-else-if="show === 'catalogue'">
                <div class="flex--3 input-main">
                    <div class="flex--2 input--12">
                        <div class="flex--3">
                            <label>Product</label>
                            <input placeholder="Enter product name"  v-model='catalogue.item'/>
                        </div>
                        <div class="flex--3">
                            <label>Price</label>
                            <input placeholder="Enter product name"  v-model='catalogue.price'/>
                        </div>
                    </div>
                    <div class='flex--3 input--2'>
                        <div class="flex--3">
                            <label>Product Description</label>
                            <input placeholder="Description"  v-model='catalogue.description'/>
                        </div>
                        <div class="flex--3">
                            <label>Specification</label>
                            <input placeholder="Specification" v-model='catalogue.specification'/>
                        </div>
                    </div>
                </div>
                <div class="input--3">
                    <div class="upload-container flex--3">
                        <div class="image">
                            Upload image
                        </div>
                        <p><input type="file" @change="fileSelected"></p>
                        <button>Create</button>
                    </div>
                </div>
            </form>
            <form @submit.prevent="postService" class='sub-section--3 flex--1'  v-else-if="show === 'project'">
                <div class="flex--3 input--1">
                    <input placeholder="Title" v-model='project.title'/>
                    <input placeholder="Description" v-model='project.description'/>
                    <button type='submit'>Create</button>
                </div>
                <div class="upload-container flex--3">
                    <div class="image">
                        Upload image
                    </div>
                    <p><input type="file" @change="fileSelected"></p>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  data () {
    return {
        show: 'carousel',
        items: [],
        toggle: true,
        service: 'building',
        services: 'Building Construction',
        serviceCategory: 'carousel',
        image: '',
        preview: null,
        previewer: false,
        catalogue: {
            item: '',
            price: '',
            description: '',
            specification: '',
        },
        project: {
            title: '',
            description: '',
        }
    }
  },
  methods: {
    toggler() {
        this.toggle = !this.toggle
    },
    fileSelected(event){
        this.image = event.target.files[0]
        this.preview = URL.createObjectURL(event.target.files[0])
        this.previewer = true
        console.log(this.image)
    },
    async postService() {
        console.log(this.service)
        console.log(this.serviceCategory, 'carousel')
        let admin= JSON.parse(localStorage.getItem('admin'))
        let Authorize = admin && admin.token
        let headers =  {
            Authorization: `Bearer ${Authorize}`
        }
        if (this.serviceCategory === 'carousel') {
            const formData = new FormData()
            formData.append('image', this.image)
            const requestOptions = {
                method: 'POST',
                headers,
                body: formData
            }
            try {
                const request = await fetch(`https://canaan-towers-api.herokuapp.com/${this.service}/${this.serviceCategory}`, requestOptions);
                const response = await request.json();
                console.log(response);
                this.image = ''
            } catch (err) {
                console.log(err);
            }   
        }
        if (this.serviceCategory === 'catalogue') {

            const formData = new FormData()
            formData.append('image', this.image)
            formData.append('item',  this.catalogue.item)
            formData.append('price', this.catalogue.price)
            formData.append('description', this.catalogue.description)
            formData.append('specification', this.catalogue.specification)
            const requestOptions = {
                method: 'POST',
                headers,
                body: formData
            }
            try {
                const request = await fetch(`https://canaan-towers-api.herokuapp.com/${this.service}/${this.serviceCategory}`, requestOptions);
                const response = await request.json();
                console.log(response, 'catalogue');
                this.image = ''
            } catch (err) {
                console.log(err);
            }  
        }
        if (this.serviceCategory === 'slider') {
            const formData = new FormData()
            formData.append('image', this.image)
            formData.append('title',  this.project.title)
            formData.append('description', this.project.description)
            console.log('it gotnher', formData)
            const requestOptions = {
                method: 'POST',
                headers,
                body: formData
            }
            try {
                const request = await fetch(`https://canaan-towers-api.herokuapp.com/${this.service}/${this.serviceCategory}`, requestOptions);
                const response = await request.json();
                console.log(response, 'project');
                this.image = ''
            } catch (err) {
                console.log(err);
            }  
        }
        }
},
  components: {
    Navbar
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

            .sub-section--1 {
                justify-content: space-between;

                .upload, .upload--2 {
                    border: 2px dashed grey;
                    padding: 6rem;
                    border-radius: 4px;
                    margin-bottom: 2rem;

                    &--1 {

                        button {
                            background: #E36F1A 0% 0% no-repeat padding-box;
                            border-radius: 5px;
                            text-align: left;
                            font: normal normal medium 14px/25px Poppins;
                            letter-spacing: 0px;
                            color: #FFFFFF;
                            width: 90px;
                            height: 28px;
                            text-align: center;
                            margin-left: auto
                        }

                        p {
                            padding: .5rem;
                        }

                        p {
                            text-decoration: underline;
                            color: #E36F1A;
                            font: normal normal normal 14px/21px Poppins;
                            letter-spacing: 0px;
                            cursor: pointer
                        }

                        .preview {
                            width: 100%;
                            max-width: 300px;
                        }

                        h1 {
                            border: 2px dashed grey;
                            font: normal normal 600 16px/30px Poppins;
                        }
                    }

                    &--2 {
                        border: 2px solid rgb(255, 125, 64);
                        padding: 10rem 12rem;
                        width: 100%;
                    }
                }
                
                .upload--2 {
                    border: none;
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

            .sub-section--2 {
                justify-content: space-between;

                label {
                    text-align: left;
                    font: normal normal 500 14px/15px Poppins;
                    letter-spacing: 0px;
                    color: #6a6767;
                }

                input {
                    font: normal normal 300 12px/21px Poppins;
                    letter-spacing: 0px;
                    color: #ACACAC;
                    opacity: 1;
                    border-radius: 5px;
                    padding: 0 1rem;
                    border: 2px solid;
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
                        height: 35px;
                        width: 150px;
                    }
                }

                .upload-container {
                    @extend %upload;
                }
            }

            .sub-section--3 {
                justify-content: space-between;

                .input--1 {
                    flex: 0 0 40%;

                    button {
                        @extend %button;
                        width: 30%;
                        font: normal normal 400 14px/30px Poppins;
                        height: 35px;
                    }
                }

                input {
                    font: normal normal 300 12px/21px Poppins;
                    letter-spacing: 0px;
                    color: #545454;
                    opacity: 1;
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
                    @extend %upload
                }
            }

        }

        .select {
            cursor: pointer
        }

    }

</style>
