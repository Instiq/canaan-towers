<template>
  <div class="admin-main">
    <router-link to="">
      <b-card class="admin admin__left" v-b-modal.modal-1> Admin </b-card>
    </router-link>
    <router-link to="">
      <b-card class="admin admin__right" v-b-modal.modal-1>
        Super Admin
      </b-card>
    </router-link>
    <b-modal id="modal-1" class="card-modal">
      <app-login></app-login>
    </b-modal>
  </div>
</template>

<script>
import Login from '@/components/admin/Login.vue'

export default {
  components: {
    appLogin: Login
  }
}
</script>

<style lang="scss">
.forgot-password {
  margin-top:7.4px
}

.check-text {
    margin-top:-2px
}

.login-btn {
  width: 100%;
  background-color: $main-orange;
  border: 0.5px solid $main-orange;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: $main-orange;
  }
}

.modal {
  &-main-text {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 3rem;
  }

  &-sub-text {
    font-size: 1.1rem;
  }

  &-icon {
    position: relative;
    padding: 6rem;
    background-color: $main-blue;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    border-radius: 50%;
  }
}

.right-banner {
  width: 20%;
  position: absolute;
  top: -1.5rem;
  right: -1.5em;
}

.admin-main {
  height: 100vh;
}

.admin {
  display: inline-block;
  width: 20rem;
  padding: 2rem;
  font-weight: bold;
  color: $main-orange;
  border-radius: 0.3rem;
  border: 0.1px solid #fff;
  box-shadow: 0 0.5rem 1rem rgba($color: #000000, $alpha: 0.2);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &__left {
    left: 30%;
  }

  &__right {
    left: 55%;
  }
}
</style>
