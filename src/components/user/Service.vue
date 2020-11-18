<template>
  <b-container class="service-main">
    <b-row>
      <b-col class="service-main-col">
        <img
          src="../../assets/images/service-main-1.png"
          alt=""
          class="service-main-img--1 service-main-img"
          to="/building-construction"
        />
        <p class="service-main-img--hidden-text">residential apartments</p>
      </b-col>
      <b-col class="service-main-col">
        <img
          src="../../assets/images/service-main-2.png"
          alt=""
          class="service-main-img--2 service-main-img"
        />
        <p class="service-main-img--hidden-text">commercial buildings</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="service-main-col">
        <img
          src="../../assets/images/service-main-3.png"
          alt=""
          class="service-main-img--3 service-main-img"
        />
        <p class="service-main-img--hidden-text">industrial structures</p>
      </b-col>
      <b-col class="service-main-col">
        <img
          src="../../assets/images/service-main-4.png"
          alt=""
          class="service-main-img--4 service-main-img"
        />
        <p class="service-main-img--hidden-text">special buildings</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
.service-main-img {
  width: 100%;
  position: relative;

  &--1,
  &--3 {
    top: 4rem;
  }

  &--2,
  &--4 {
    bottom: 3rem;
  }
  &:hover {
    // filter: sepia(150%);
    filter: brightness(30%);
    transition: filter 0.5s ease;

    .service-main-img--hidden-text {
      display: block;
    }
  }
}

.service-main-col:hover :not(img) {
  opacity: 1;
}

.service-main-img--hidden-text {
  color: #fff;
  font-weight: 600;
  position: absolute;
  text-transform: capitalize;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
}
</style>
