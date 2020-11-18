<template>
  <div>
    <img src="../../assets/images/banner2.svg" alt="" class="right-banner" />
    <h6 class="modal-main-text">Welcome to Canaan Towers</h6>
    <p class="modal-sub-text">Login to continue</p>
    <b-form v-if="show">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-4" class="">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">
              <p class="modal-sub-text check-text" style="margin-top: -2px">
                Remember me
              </p>
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <p class="modal-sub-text forgot-password" style="">
          <a href="#">Forgot Password?</a>
        </p>
      </div>
      <b-button class="login-btn" to="/admin/dashboard">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: require('@/assets/images/banner2.svg'),
      form: {
        email: '',
        password: '',
        food: null,
        checked: []
      },
      show: true
    }
  }
}
</script>

<style scoped lang="scss">
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

.modal-header,
.modal-footer {
  display: none;
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
