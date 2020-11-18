<template>
  <div>
    <b-container class="About-Us">
      <div class="text">
        <h3 class="building__header--text">About Us</h3>
        <p class="text-left info">
          Canaan Towers Limited has its root in Nigeria, but we are truly a
          global company. We have been called a "One stop shop for all you need"
          and we have a rich history of delivering quality products and services
          to our clients, in Nigeria and all over the world. At Canaan Towers
          Limited we believe there is a better way to offer service. A more
          valuable, less invasive way where customers are earned rather than
          bought. Canaan Towers Limited was founded by Adeleye Bankole in 2000.
          We launched our first product, which is the stone coated roofing
          sheet. This remained our major products for three years after
          establishing the company. We boast of having our products used in
          hundreds of buildings across the 36 states in Nigeria. After five (5)
          years, we launched other services; Building construction, Interior
          Finishing, Road works, Alternative Power and Automobile Sales &
          Servicing. We work closely with our partners and have a deep
          understanding of buyers’ needs. At Canaan Towers Limited, we pride
          ourselves on opening up opportunities for our clients to access a wide
          range of products an services.
        </p>
      </div>
    </b-container>
  </div>
</template>

<style scoped lang="scss">
.info {
    font-size: 1.4rem;
    padding-top: 1.5rem;
}
.building__header--text {
        position: relative;

        &:after {
            content:"";
            position: absolute;
            bottom: 0;
            width: 15rem;
            border-radius: .3rem;
            top: 2.4rem;
            left: 50%;
            transform: translateX(-50%);
            height: .5rem;
            border-top: .3rem solid $main-orange;
        }
    }

@media screen and (max-width: 767px) {
  .info {
    font-size: 1.2rem
  }
}

@media screen and (max-width: 575px) {
  .info {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1.1rem
  }
}
</style>
