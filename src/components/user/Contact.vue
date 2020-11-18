<template>
  <b-container class="contact text-left">
    <b-row>
      <b-col cols="2">
        <img
          src="../../assets/images/contact-image.png"
          alt=""
          class="contact__image"
        />
      </b-col>
      <b-col>
        <b-row class="contact__text">
          <b-col cols="1" class="contact__text-left"> Phone: </b-col>
          <b-col class="contact__text-right"> +234-0909-677-098 </b-col>
        </b-row>
        <b-row class="contact__text">
          <b-col cols="1" class="contact__text-left"> Email: </b-col>
          <b-col class="contact__text-right"> info@canaantowers.com </b-col>
        </b-row>
        <b-row class="contact__text">
          <b-col cols="1" class="contact__text-left"> Location: </b-col>
          <b-col class="contact__text-right">
            64, Adeniyi Jones, Ikeja,Lagos State.
          </b-col>
        </b-row>
      </b-col>
      <!-- <b-col cols="1"></b-col> -->
      <b-col>
        <div class="whatsapp">
          <b-row>
            <b-col cols="4">
              <img src="../../assets/images/whatsapp.svg" alt="">
            </b-col>
            <b-col>
              <h2>Whatsapp</h2>
              <router-link to="">
                <a href="" class="btn">Click here to chat</a>
              </router-link>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
.whatsapp {
  background-color: #1C3073;
  height: 80%;
  padding: 2.5rem 4rem;
  width: 32rem;
  border-radius: .3rem;

  h2 {
    color: #fff;
    font-weight: bold;
  }

  .btn {
    background-color: #fff;
    padding: 1rem 2.5rem;
    color: $main-orange;
    font-weight: 600;
    margin-top: 1rem;

    &:hover {
      color: #fff;
      background-color: $main-orange;
    }
  }

  img {
    width: 100%;
  }
}

.contact {
  margin-top: 8rem;
  padding: 0rem;

  &__image {
    width: 100%;
  }

  &__text :not(:last-child) {
      margin-bottom: 3rem;
  }

  &__text-left {
    color: #3c3c3c;
    font-size: 1.3rem;
  }

  &__text-right {
    color: #e55b07 !important;
    font-size: 1.3rem;
    font-weight: 600;
    margin-left: 2rem;
  }
}
</style>
