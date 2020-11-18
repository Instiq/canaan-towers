<template>
  <b-container class="promise">
    <h4 class="header mb-5">Our Promise</h4>
    <b-row>
        <b-col v-for="(value, index) in header" :key=index class="icon-col">
            <b-icon icon="star" class="promise-icon"></b-icon>
            <h5 class="promise-icon-text promise-icon-text-main">{{ header[index] }}</h5>
            <p class="promise-icon-text promise-icon-text-sub">
                {{ iconText[index] }}
            </p>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      header: ['INNOVATION', 'EXCELLENCE', 'DELIVERY', 'COMMUNICATION'],
      iconText: [
        'Using Virtual Design & Construction Engineering',
        'Professionalism & Uniquesness',
        'Accountability, reliability and clear pricing',
        'Transparency, clarity and authenticity'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  color: $main-blue;
  text-transform: capitalize;
  font-size: 2.5rem;
}

.promise {
  margin-top: 7rem;

  &-icon {
    color: $main-orange;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}

.promise-icon-text {
  color: #2B2B2B;

  &-main {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  &-sub {
    font-size: 1.2rem;
  }
}

.icon-col{
    transition: all .5s;

    &:hover {
        transform: scale(1.07);
        .promise-icon {
            background-color: rgba($main-orange, 0.6);
            border-radius: 50%;
            padding: 1rem;
            font-size: 4rem;

        }
    }
}
</style>
