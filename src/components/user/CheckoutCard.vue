/* eslint-disable indent */
<template>
  <div>
    <div class="text-left">
      <router-link
        :to="{ path: $store.state.route.from.fullPath }"
        class="mr-auto"
      >
        <b-icon
          icon="arrow-left"
          font-scale="1.5"
          class="text-left icon"
        ></b-icon>
      </router-link>
    </div>
    <b-card class="checkout-card text-left">
      <b-card>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{
            enabled: true,
          }"
          :select-options="{ enabled: true }"
          :search-options="{ enabled: true }"
        >
          <!-- <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'after'">
              <a class="delete" @click="deleteRow(props.row.id)">
                <b-icon icon="trash" class="icon text-center"></b-icon>
              </a>
            </span>
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template> -->
        </vue-good-table>
        <div class="get-quote">
          <router-link to="quote">
            <button class="get-quote__btn">Next</button>
          </router-link>
        </div>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line quotes
  name: "my-component",
  data () {
    return {
      columns: [
        {
          label: 'Service/Product',
          field: 'service'
        },
        {
          label: 'Description',
          field: 'description'
        }
        // {
        //   label: '',
        //   field: 'after'
        // }
      ],
      rows: [
        { id: 1, service: 'Automibile', description: 'Mercedez benz' },
        { id: 2, service: 'Alternative power', description: 'solar inverter' },
        { id: 3, service: 'Roofing', description: 'Brown stone coated' },
        { id: 1, service: 'Automibile', description: 'Mercedez benz' },
        { id: 2, service: 'Alternative power', description: 'solar inverter' },
        { id: 3, service: 'Roofing', description: 'Brown stone coated' },
        { id: 1, service: 'Automibile', description: 'Mercedez benz' },
        { id: 2, service: 'Alternative power', description: 'solar inverter' },
        { id: 3, service: 'Roofing', description: 'Brown stone coated' },
        { id: 1, service: 'Automibile', description: 'Mercedez benz' },
        { id: 2, service: 'Alternative power', description: 'solar inverter' },
        { id: 3, service: 'Roofing', description: 'Brown stone coated' }
      ]
    }
  },
  methods: {
    deleteRow (ind) {
      const index = this.rows.findIndex((val) => val.id === ind)
      this.rows.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.icon {
  color: #000;
  margin-left: 10rem;
  margin-top: 2rem;
  transition: all .4s ease-out;

  &:hover {
    transform: scale(1.5);
  }
}

.checkout-card {
  table {
    width: 100%;
  }

  td {
    font-size: 1.4rem;
    text-transform: capitalize;
    transition: all 0.3s ease;
  }
  tr:hover {
    background-color: $main-blue;
    td,
    .icon {
      color: #fff !important;
    }
  }

  th {
    font-size: 1.5rem;
  }

  .delete,
  .delete:hover,
  .delete:active,
  .delete:visited {
    border: none;
    background-color: transparent;
    color: $main-orange;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .icon {
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.5);
    }
  }

  .margin-table {
    margin-bottom: 4rem !important;
  }

  .get-quote__btn {
    background-color: $main-blue;
    padding: 0.7rem 3.5rem;
    border: 0.5px solid $main-blue;
    color: #fff;
    border-radius: 0.3rem;
    font-size: 1.3rem;
    font-weight: 600;
    box-shadow: 3px 3px 6px #00000029;
    margin-top: 4rem;
    transition: all 0.5s ease;

    &:hover {
      color: $main-blue;
      background-color: #fff;
      transform: scale(1.1);
    }
  }

  .get-quote {
    text-align: right;
  }
}

@media screen and (max-width: 768px) {
  .icon {
    margin-left: 2rem;
  }

  span {
    font-size: 1.3rem;
  }
}
</style>
