<template>
    <div class='create'>
        <Navbar heading='Create Admin'/>
        <form @submit.prevent="upload" class="section--1 flex--3">
            <div class="flex--1">
                <div class="input--mainz flex--1">
                    <input placeholder="Name" v-model='form.name'/>
                    <input placeholder="Email" v-model='form.email'/>
                    <input placeholder="Phone Number" v-model='form.number'/>
                    <input placeholder="First Time Password" v-model='form.password'/>
                </div>
                <div class="upload-container flex--3">
                    <div class="image">
                        Upload image 
                    </div>
                    <p><input type="file" @change="fileSelected"></p>
                </div>
            </div> 
            <button type='submit'>Create</button>
        </form>
    </div>
</template>

<script>
    import Navbar from '@/components/Adminz/Dashboard/Navbar'
    export default {
        components: {
            Navbar
        },
        data () {
            return {
                form: {
                    email: '',
                    name: '',
                    number: '',
                    password: ''
                },
                image: null
            }
        },
        methods: {
            fileSelected(event){
                this.image = event.target.files[0]
                console.log(this.image)
            },
            async upload() {
                console.log('omo', this.form.name)
                let admin= JSON.parse(localStorage.getItem('admin'))
                let Authorize = admin && admin.token
                let headers =  {
                    Authorization: `Bearer ${Authorize}`
                }
                console.log(Authorize, 'Authorize', headers)
 
                // convert request name to Sentence case
                var toTitleCase = function (str) { 
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                    }
                    return str.join(' ');
                };
                
                let name = toTitleCase(this.form.name)
 
                const formData = new FormData()
                formData.append('image', this.image)
                formData.append('name', name)
                formData.append('email', this.form.email)
                formData.append('number', this.form.number)
                formData.append('password', this.form.password)
                console.log('boyoboy', formData, this.form)
                const requestOptions = {
                    method: 'POST',
                    headers,
                    body: formData
                }
                try {
                    const request = await fetch('https://canaan-towers-api.herokuapp.com/admin/create', requestOptions);
                    const response = await request.json();
                } catch (err) {
                    console.log(err);
                }  

            }
        }
    }
</script>

<style lang="scss" scoped>
    .create {
        text-align: left;
        width: 100%;

        .section--1 {
            // display: flex;
            padding: 7rem;
            width: 100%;
            height: 100%;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 8px;

            .flex--1 {
                justify-content: space-between;
            }

             .input--mainz {
                width: 60%;
                flex-wrap: wrap;
                gap: 2rem 3rem;

                input {
                    width: 45%;
                    max-width: 200px;
                    min-width: 250px;
                    height: 43px;
                    border: 0.5px solid #707070;
                    border-radius: 5px;
                    padding-left: 2rem;
                }
            }

            button {
                width: 18%;
                margin-top: 2rem;
                height: 43px;
                border-radius: 4px;
                background: #E36F1A 0% 0% no-repeat padding-box;
                box-shadow: 0px 4px 12px #F06F3866;
                color: white;
            }

            .upload-container {
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

        }

    }
</style>
