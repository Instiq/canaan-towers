<template>
      <div class="services">
        Our Services  <b-icon icon="arrow-right-circle-fill" aria-hidden="true"></b-icon>
        <div class="icon">
          <i class="fas fa-arrow-circle-right"></i>
        </div>
      </div>
</template>

<style scoped>
.services {
  position: relative;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.55px;
  color: #e55b07;
  opacity: 1;
  top: 40%;

  animation-name: moveInLeft;
  animation-duration: 2s;
}

/*.services:hover {
  color: #e55b07;
}*/

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translate(-100px);
  }

  80% {
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.icon {
  position: absolute;
  top: 1px;
  left: 180px;
  /*width: 600px;
    height: 400px;*/
  color: #e55b07;
}

/*.icon:hover {
  color: #e55b07;
}*/

.info {
  position:absolute;
  top: 25%;
  right: 3%;
  width: 220px;
  font: normal bold 35px/45px Lato;
  /*font-weight: bolder;*/
  color: white;
  letter-spacing: 0.68px;
  opacity: 1;

  animation-name: moveInRight;
  animation-duration: 2s;
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translate(100px);
  }

  80% {
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@media screen and (max-width: 991px) {
  .services {
    position: relative;
    text-align: left;
    font-size: 2rem;
    letter-spacing: 0.55px;
    opacity: 1;
    top: 10%;
  }
}

@media screen and (max-width: 991px) {
  .services {
    position: relative;
    text-align: left;
    font-size: 1.5rem;
    letter-spacing: 0.55px;
    opacity: 1;
    top: 15%;
  }
}

</style>
