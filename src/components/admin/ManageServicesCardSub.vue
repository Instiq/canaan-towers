<template>
    <b-container class="sub-card">
        <b-row>
            <b-col cols="4" v-for="(val, index) in title" :key="index" class="text-left">
                <span class="title">
                    {{ title[index] }}
                </span>
                <div class="d-flex main-card-dropdown">
                    <b-form-group id="input-group-3" label-for="input-3">
                      <b-form-select
                        id="input-3"
                        v-model="form[index].category"
                        :options="categories[index]"
                        required
                      ></b-form-select>
                    </b-form-group>
                    <b-button class="view" :click="view(index)">view</b-button>
                </div>
                {{ title[index] }}
            </b-col>
            {{ value }}
        </b-row>
    </b-container>
</template>

<script>
export default {
  data () {
    return {
      value: null,
      title: [
        'Building Construction',
        'Interior Finishing',
        'Road Works',
        'Automobile Sales & Servicing',
        'Alternative Power',
        'Canaan Roofs'
      ],
      form: [
        { category: null },
        { category: null },
        { category: null },
        { category: null },
        { category: null },
        { category: null }
      ],
      categories: [
        [{ text: 'select category', value: null }, 'Carousel', 'Catalogue', 'Recent Projects'],
        [{ text: 'select category', value: null }, 'Carousel', 'Catalogue', 'Recent Projects'],
        [{ text: 'select category', value: null }, 'Carousel', 'Catalogue', 'Recent Projects'],
        [{ text: 'select category', value: null }, 'Carousel', 'Catalogue', 'Recent Projects'],
        [{ text: 'select category', value: null }, 'Carousel', 'Catalogue', 'Recent Projects'],
        [{ text: 'select category', value: null }, 'Carousel', 'Catalogue', 'Recent Projects']
      ]
    }
  },
  methods: {
    view (index) {
      this.value = this.title[index]
    }
  }
}
</script>

<style lang="scss" scoped>
    .custom-select {
      height: 8rem !important;
      width: 150%;
      font-size: 1.3rem;
    }

    .sub-card {
      padding: 7.5rem 3rem;

      .small-card {
        box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
        margin-bottom: 6rem;
      }

      .title {
          font-size: 1.2rem;
          font-weight: bold;
      }

      .view {
          padding: 0rem 2rem;
          border-radius: .3rem;
          font-size: 1.3rem;
          font-weight: bold;
          margin-left: 5.7rem;
          height: 8rem;
          background-color: $main-orange;
          border: 0px;

      }

      .card-body {
        padding: 0 !important;
      }

      .main-dropdown {
          width: 25rem;
          height: 7rem;
      }

    }

      .btn-group {
          padding: 0 !important;
      }

    // .main-card-dropdown {

    // }

</style>
