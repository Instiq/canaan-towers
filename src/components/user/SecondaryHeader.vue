<template>
  <div class="secondary-header-sub">
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'serviceData'
    ])
  },
  methods: {
    ...mapMutations([
      'changePicture'
    ])
  }
}
</script>

<style lang="scss" scoped>
.secondary-header-sub {
  background-color: $main-grey-light;
  height: 1rem;
  padding-top: 1rem;
}

// .get-quote {
//   color: $main-orange;
//   background-color: #ffece1;
//   border: 0.5px solid #ffece1;

//   &:hover {
//     background-color: $main-orange;
//     color: #ffece1;
//     border: 0.5px solid $main-orange;
//     transform: scale(1.1);
//     // transform: translateY(-3px);
//   }
// }

.services {
  margin-top: 1.5rem;
  width: 20rem;
}

.custom-select[data-v-4f8faabe] {
    display: inline-block;
    width: 100%;
    font-size: 1.2rem;
    color: $main-orange;
    font-weight: 600;
    height: calc(3em + 0.75rem + 2px);
    background-color: #ffece1;
    border: 1px solid #ced4da;
    border-radius: 0.45rem;
  }

.search-quote {
  background-color: #ffece1;
  color: $main-blue;
  border: 0.5px solid #ffece1;
  // margin-top: 1.5rem;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  display: inline-block;
  font-weight: 600;
  box-shadow: 0 0.5rem 1rem rgba(#000, 0.5);
  text-transform: capitalize;

}

@media screen and (max-width: 567px) {
  span {
    font-size: 1.1rem
  }
}
</style>
