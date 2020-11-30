<template>
    <div class='update'>
        <Navbar heading='Update Services'/>
        <main class="section--1 flex--3">
            <div class="flex--2 choose">
                <div class="flex--2">
                    <label for="cars" class="category-label">Choose a Service :</label>
                    <select id="cars" class="select">
                        <option value="Building Construction">Building Construction</option>
                        <option value="Alternative Power">Alternative Power</option>
                        <option value="Interior Furnishing">Interior Furnishing</option>
                        <option value="Automobile Sales & Furnishing">Automobile Sales & Furnishing</option>
                        <option value="Road Work">Road Work</option>
                        <option value="Roofing Sheets">Roofing Sheets</option>
                    </select>
                </div>
                <div class="flex--2 choose-category">
                    <div class="category-label">
                        <p>Category to Update : </p>
                    </div>
                    <button @click="show = 'carousel'" :class="{'button--notactive': show !== 'carousel'}">Carousel</button>
                    <button @click="show = 'catalogue'" :class="{'button--notactive': show !== 'catalogue'}">Catalogue</button>
                    <button @click="show = 'project'" :class="{'button--notactive': show !== 'project'}">Project</button>
                </div>
            </div>
            <section class="sub-section--1 flex--2" v-if="show === 'carousel'">
                <div class="upload">
                    <h1>Add Carousel</h1>
                </div>
                <div class="upload--1 flex--3">
                    <p class="upload--2">Display image</p>
                    <button>Add +</button>
                </div>
            </section>
            <section class='sub-section--2 flex--1' v-else-if="show === 'catalogue'">
                <div class="flex--3 input-main">
                    <div class="flex--2 input--12">
                        <div class="flex--3">
                            <label>Product</label>
                            <input placeholder="Enter product name"/>
                        </div>
                        <div class="flex--3">
                            <label>Price</label>
                            <input placeholder="Enter product name"/>
                        </div>
                    </div>
                    <div class='flex--3 input--2'>
                        <div class="flex--3">
                            <label>Product Description</label>
                            <input placeholder=""/>
                        </div>
                        <div class="flex--3">
                            <label>Specification</label>
                            <input placeholder=""/>
                        </div>
                        <div class="flex--3">
                            <label>Product</label>
                            <input placeholder=""/>
                        </div>
                    </div>
                </div>
                <div class="input--3">
                    <div class="flex--3">
                        <label>Product</label>
                        <input placeholder="Enter product name"/>
                    </div>
                    <div class="upload-container flex--3">
                        <div class="image">
                            Upload image
                        </div>
                        <p>Browse</p>
                        <button>Create</button>
                    </div>
                </div>
            </section>
            <section class='sub-section--3 flex--1'  v-else-if="show === 'project'">
                <div class="flex--3 input--1">
                    <input placeholder="Title"/>
                    <input placeholder="Description"/>
                    <button>Create</button>
                </div>
                <div class="upload-container flex--3">
                    <div class="image">
                        Upload image
                    </div>
                    <p>Browse</p>
                </div>
            </section>
        </main>
    </div> 
</template>

<script>
    import Navbar from './Navbar'
    export default {
        data() {
            return {
               show: 'project',
                items: [] 
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
                    }

                    &--2 {
                        border: 2px solid rgb(255, 125, 64);
                        padding: 10rem 12rem;
                        width: 100%;
                    }
                }


                p {
                    text-decoration: underline;
                    font: normal normal normal 14px/21px Poppins;
                    letter-spacing: 0px;
                    color: #CC5722;
                    cursor: pointer
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
                        @extend %button
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
                    @extend %upload
                }
            }


        }

        .select {
            cursor: pointer
        }


    }

</style>