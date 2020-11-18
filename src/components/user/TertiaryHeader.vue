<template>
    <b-container class="text-left my-5 tertiary-header">
        <span>
            Service |
        </span>
        <span class="orange-text">
            {{ serviceData.service }} …
        </span><br><br>
        <router-link :to="{ path: $store.state.route.from.fullPath }">
            <b-icon
            icon="arrow-left"
            font-scale="1.5"
            class="text-left icon"
            ></b-icon>
        </router-link>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'serviceData'
    ])
  }
}
</script>

<style lang="scss">
    .icon {
        color: #000;
        transition: all .4s ease-out;

        &:hover {
            transform: scale(1.5);
        }
    }

    .tertiary-header {
        font-size: 1.4rem;
        font-weight: 500;

        .orange-text {
            color: $main-blue;
        }
    }
</style>
