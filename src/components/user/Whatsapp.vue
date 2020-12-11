<template>
    <div to="" class="whatsapp">
      <a href="https://api.whatsapp.com/send?phone=23408035788111" class=""
      target="_blank">
        <img src="../../assets/images/whatsapp.svg" alt="" />
      </a>
    </div>
</template>

<style lang="scss">
.whatsapp {
  background-color: #1c3073;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  padding: 1.5rem;
  box-shadow: 0 .5rem 1rem rgba(#000, 0.3);
  transition: all .3s ease;
  z-index: 99;

  &:hover {
    transform: scale(1.1) translateY(-1rem);
  }

  img {
    width: 90%;
  }
}

</style>
