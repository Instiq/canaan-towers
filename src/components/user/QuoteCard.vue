<template>
  <b-container class="my-5 quote-card">
    <b-card class="text-left card">
      <h3 class="header">SERVICE QUOTE</h3>
      <b-row>
        <b-col cols="12" lg="8">
          <p class="mb-5">
            Kindly fill in your details in the form below. Our agents will
            contact you
          </p>
          <b-form @submit.prevent="upload" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Email:"
              label-for="input-3"
              description=""
            >
              <b-form-input
                id="input-3"
                v-model="form.email"
                type="email"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Phone number:"
              label-for="input-4"
              description=""
            >
              <b-form-input
                id="input-4"
                v-model="form.number"
                type="number"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="textarea-rows"
              label="Message (Additional Information):"
              label-for="input-6"
              description=""
            >
              <b-form-textarea
                id="textarea-rows"
                v-model="form.message"
                placeholder=""
                rows="8"
              ></b-form-textarea>
            </b-form-group>

            <!-- <b-modal id="modal-1" class="card-modal">
              <img
                src="../../assets/images/banner2.svg"
                alt=""
                class="right-banner"
              />
              <h6 class="modal-main-text">
                Your Request has been submitted Successfully
              </h6>
              <p class="modal-sub-text">
                Please check your mail for the quote. Thanks.
              </p>
              <b-icon
                icon="check"
                scale="1.5"
                class="modal-icon text-center"
              ></b-icon>
            </b-modal> -->
            <b-row class="upload px-4">
              <b-col class="upload__file text-center" cols="12" md="6">
                <img src="../../assets/images/Icon-upload.svg" alt="" class="" />
                <div class="mt-4 drag-and-drop">
                  <h5>Drag & Drop </h5>
                  <h6>Supported format files</h6>
                  <div
                    class="d-flex justify-content-between upload__file--type"
                    style=""
                  >
                    <div>
                      <img src="../../assets/images/icon-jpg.svg" alt="" />
                      <h6 class="small-picture">JPG</h6>
                    </div>
                    <div>
                      <img src="../../assets/images/icon-png.svg" alt="" />
                      <h6 class="small-picture">PNG</h6>
                    </div>
                  </div>
                  <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="max of 3 files"
                    multiple
                    class="browse"
                    drop-placeholder="Drop file here..."
                    :file-name-formatter="formatNames"
                    @change="fileSelected"
                  ></b-form-file>
                  <b-button @click="file = []" class="mt-2 clear-upload">Clear Input Field</b-button>

                </div>
              </b-col>
              <b-col cols="12" sm="1"></b-col>
              <b-col class="upload__note" cols="12" md="5">
                Note: It is required that you upload your survey plan or building
                design if you have selected a service under Building Construction,
                Road Work or Roofing.
              </b-col>
            </b-row>
            <b-row>
              <b-button type="submit" class="submit-button" v-b-modal.modal-1
                >Submit</b-button
              >
            </b-row>
          </b-form>
          <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card> -->
        </b-col>
        <b-col md="4" class="pic">
          <img
            src="../../assets/images/service-quote-img.png"
            alt=""
            class="service-quote-img"
          />
        </b-col>
      </b-row>
      </b-card>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      file: null,
      form: {
        email: '',
        name: '',
        message: '',
        number: ''
      },
      show: true,
      image: null
    }
  },
  methods: {
    fileSelected (event) {
      this.image = event.target.files[0]
    },
    async upload () {
      const forss = new FormData()
      const name = this.form.name
      const email = this.form.email
      const number = this.form.number
      const message = this.form.message
      console.log(1, forss, name, message, this.image.name, number, message)
      forss.append('image', this.image, this.image.name)
      forss.append('name', name)
      forss.append('email', email)
      forss.append('number', number)
      forss.append('message', message)
      console.log('boyoboy')
      const a = await axios.post('https://canaan-towers-api.herokuapp.com/quotes', forss)
      console.log(a.data)
      console.log('done')
    },
    formatNames (files) {
      if (files.length > 3) {
        alert('The maximum number of files to upload is 3')
        return 'max of 3 files'
      }
      return files.length === 1 ? files[0].name : `${files.length} files selected`
    }
  }
}
</script>

<style lang="scss" scoped>
.clear-upload {
  background-color: $main-orange;
  border: $main-orange;
}

.quote-card {
  margin: 0 auto;
}

.modal {
  &-main-text {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 5rem;
  }

  &-sub-text {
    font-size: 1.1rem;
  }

  &-icon {
    position: relative;
    padding: 6rem;
    background-color: $main-blue;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    border-radius: 50%;
  }
}

.right-banner {
  width: 20%;
  position: absolute;
  top: -1.5rem;
  right: -1.5em;
}

.drag-and-drop {
  border: 0.3px dashed #707070;
  margin: 1.5rem auto;
  padding: 1.5rem 0;
  width: 80%;
  border-radius: 0.3rem;
}

.small-picture {
  font-size: 0.7rem;
}

.browse {
  width: 70%;
  font-size: 1rem;
}

.upload {
  height: 25rem;
  &__note {
    padding: 2.4rem 2.3rem;
    background-color: $main-orange;
    height: 100%;
    color: #fff;
    font-size: 1.3rem;
    border-radius: 0.3rem;
  }

  &__file {
    height: 100%;
    padding: 2rem;
    border-radius: 0.3rem;
    box-shadow: 0rem 0.5rem 1rem rgba(#000, 0.3);

    &--type {
      width: 30%;
      margin: 0 auto;
    }
  }
}
.service-quote-img {
  width: 100%;
}
.card {
  padding: 3rem;
  border: 0.1px solid rgba(#eee, 0.2);
  box-shadow: 0 1rem 2rem rgba(#000, 0.5);
}
.header {
  font-weight: 700;
  font-size: 2.3rem;
}

.form-control,
.custom-select {
  height: calc(1.5em + 1.5rem + 2px);
}

.submit-button {
  background-color: $main-blue;
  padding: 1rem 10rem;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 5rem auto;
  transition: all 0.4s;

  &:hover {
    background-color: #fff;
    color: $main-blue;
    transform: scale(1.1);
  }
}

@media screen and (max-width: 1024px) {
  .quote-card {
    margin: 0 auto;
  }

    .pic {
    display: none;
  }

}

@media screen and (max-width: 767px) {
  .upload__note {
    height: 15rem;
    margin-top: 3rem
  }

  .submit-button {
    margin: 20rem auto  2rem auto!important;
  }

  .card {
    padding-bottom: 2rem
  }

  .clear-upload {
    display: block;
    margin: 0 auto;
    align-items: center;
  }
  .submit-button {
    margin: 5rem auto;
    padding: 1rem 6rem;
  }

  .quote-card {
    margin: 0 auto;
  }

}

@media screen and (max-width: 575px) {
  .upload__note {
    height: 15rem;
    margin-top: 3rem
  }

    .submit-button {
      margin: 20rem auto 4rem auto;
      padding: 1rem 6rem;
    }
}

@media screen and (max-width: 480px) {
  .upload__file {
    padding: 2rem 0rem;
  }
}

@media screen and (max-width: 375px) {
  .upload__note {
    height: 18rem;
    margin-top: 3rem
  }

    .submit-button {
      margin: 23rem auto 4rem auto !important;
      padding: 1rem 6rem;
    }
}

@media screen and (max-width: 337px) {
    .submit-button {
      margin: 25rem auto 4rem auto;
      padding: 1rem 6rem;
    }
}

</style>
