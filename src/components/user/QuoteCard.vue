<template>
  <b-container class="my-5 quote-card">
    <b-card class="text-left card">
      <h3 class="header">SERVICE QUOTE</h3>
      <b-row>
        <b-col cols="12" md="8">
          <p class="mb-5">
            Kindly fill in your details in the form below. Our agents will
            contact you
          </p>
          <b-form @submit.prevent="onSubmit" v-if="show">
            <b-form-group
              id="input-group-2"
              label="Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder=""
                class="input-font"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
              description=""
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder=""
                class="input-font"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Phone number:"
              label-for="input-1"
              description=""
            >
              <b-form-input
                id="input-1"
                v-model="form.number"
                type="number"
                required
                class="input-font"
                placeholder=""
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="State of residence:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.residence"
                class="input-font"
                :options="residence"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="Message (Additional Information):"
              label-for="input-5"
              description=""
            >
              <b-form-textarea
                id="textarea-rows"
                v-model="form.message"
                class="input-font"
                placeholder=""
                rows="8"
              ></b-form-textarea>
            </b-form-group>

            <b-modal id="modal-1" class="card-modal">
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
            </b-modal>
            <p class="mt-5">Upload Your Files</p>
            <b-row class="upload">
              <b-col class="upload__file text-center" cols="12" sm="6" md="5" lg="4">
                <img src="../../assets/images/Icon-upload.svg" alt="" class="" />
                <div class="mt-4 drag-and-drop">
                  <h5>Drag & Drop</h5>
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
              <div>
                <img src="../../assets/images/icon-pdf.svg" alt="" />
                <h6 class="small-picture">PDF</h6>
              </div>
            </div>
              <b-form-file
                v-model="file1"
                :state="Boolean(file1)"
                placeholder=""
                class="browse"
                drop-placeholder="Drop file here..."
              ></b-form-file>
              </div>
              </b-col>
              <b-col sm="1"></b-col>
              <b-col class="upload__note" cols="12" sm="5" md="4" lg="3">
                Note: It is required that you upload your survey plan or building
                design if you have selected a service under Building Construction,
                Road Work or Roofing.
              </b-col>
            </b-row>
              <b-button type="submit" class="submit-button" v-b-modal.modal-1>Submit</b-button>
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
      file1: null,
      form: {
        email: '',
        name: '',
        message: '',
        food: null,
        number: ''
      },
      residence: [
        { text: 'Select One', value: null },
        'Lagos',
        'Ekiti',
        'Kwara',
        'Jigawa'
      ],
      show: true
    }
  },
  methods: {
    async onSubmit () {
      // alert(JSON.stringify(this.form))
      const response = await axios.post('https://canaan-towers-api.herokuapp.com/quotes', {
        email: this.form.email,
        name: this.form.name,
        number: this.form.number,
        message: this.form.message
      })
      delete response.data
      this.form = {}
    }
  }
}
</script>

<style lang="scss" scoped>
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
  margin: .2rem;
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
}

@media screen and (max-width: 767px) {
  .pic {
    display: none;
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
    height: auto;
    margin-top: 2rem;
  }

    .submit-button {
      margin: 20rem auto 4rem auto;
      padding: 1rem 6rem;
    }
}

@media screen and (max-width: 337px) {
    .submit-button {
      margin: 25rem auto 4rem auto;
      padding: 1rem 6rem;
    }
}

.input-font {
  font-size: 14px;
}

</style>
