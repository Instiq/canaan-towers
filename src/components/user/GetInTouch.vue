<template>
  <b-container fluid class="get-in-touch">
    <div class="text">
      <h4>get in touch</h4>
      <p>We'll love to hear from you. Here how's you can reach us.</p>
    </div>
  </b-container>
</template>

<style lang="scss" scoped>
.get-in-touch {
  background-image: linear-gradient(to right, #e55b07a3, #732e04ad),
    url("../../assets/images/get-in-touch-img.jpg");
  background-size: cover;
  height: 60rem;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 3rem;
  position: relative;
  color: #fff;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h4{
    text-transform: uppercase;
    font-size:3.5rem;
}

p {
    font-size: 2rem;
}

@media screen and (max-width: 768px) {
  h4{
    text-transform: uppercase;
    font-size:2rem;
  }

  p {
      font-size: 1.3rem;
  }

  .get-in-touch {
    height: 40rem;
  }
}
</style>
