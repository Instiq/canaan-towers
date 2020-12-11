<template>
  <b-container class="my-2 quote-card">
    <b-card class="text-left card">
      <h3 class="header">Send Us  A Message</h3>
      <b-row>
        <b-col cols="12" md="6">
          <p class="mb-5 fill-info">
            Kindly fill in your details in the form below. Our agents will
            contact you
          </p>
          <b-form @submit.prevent="handleSubmit" v-if="show">

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
                class="input-font"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Email:"
              label-for="input-2"
              description=""
            >
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                required
                placeholder=""
                class="input-font"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Phone number:"
              label-for="input-3"
              description=""
            >
              <b-form-input
                id="input-3"
                v-model="form.number"
                type="number"
                required
                class="input-font"
                placeholder=""
              ></b-form-input>
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
                    placeholder=""
                    class="input-font"
                    rows="8"
                ></b-form-textarea>
            </b-form-group>

            <b-modal id="modal-1" title="BootstrapVue" class="card-modal">
              <img src="../../assets/images/banner2.svg" alt="" class="right-banner">
              <h6 class="modal-main-text">Your Request has been submitted Successfully</h6>
              <p class="modal-sub-text">Please check your mail for the quote. Thanks.</p>
              <b-icon icon="check" scale="1.5" class="modal-icon text-center"></b-icon>
            </b-modal>
            <b-button type="submit" class='submit-button'>Submit</b-button>
          </b-form>
        </b-col>
        <b-col class="contact-img" md="6">
          <img src="../../assets/images/contact-us-img.jpg" alt="">
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
        // lastname: '',
        number: '',
        message: ''
        // food: null,
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
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    async handleSubmit () {
      const response = await axios.post('https://canaan-towers-api.herokuapp.com/quotes', {
        email: this.form.email,
        name: this.form.name,
        // lastname: this.lastname,
        number: this.form.number,
        message: this.form.message
      })
      console.log(response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-img img {
  width: 100%;
  height: 75%;
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
  right: -1.5em
}

.drag-and-drop {
  border: .3px dashed #707070;
  margin: 1.5rem auto;
  padding: 1.5rem 0;
  width: 80%;
  border-radius: .3rem;
}

.small-picture {
  font-size: .7rem;
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
    border-radius: .3rem;
  }

  &__file {
    height: 100%;
    padding: 2rem;
    border-radius: .3rem;
    box-shadow: 0rem .5rem 1rem rgba(#000, 0.3);

    &--type {
      width:30%;
      margin: 0 auto
    }
  }
}
.service-quote-img {
  width: 100%;
}
.card {
    margin-top: 4rem;
    padding: 3rem;
    border: .1px solid rgba(#eee, 0.2);
    box-shadow: 0 1rem 2rem rgba(#000, .5);
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
    transition: all .4s;

    &:hover {
        background-color: #fff;
        color: $main-blue;
        transform: scale(1.1);
    }
}

@media screen and (max-width: 767px) {
  .contact-img {
    display: none
  }

  .fill-info, .form-group {
    font-size: 1.2rem
  }

  .header {
    font-size: 1.4rem
  }

  .submit-button {
    padding: 1rem 5rem;
    font-size: 1.1rem;
  }
}

 .input-font {
    font-size: 14px;
  }
</style>
