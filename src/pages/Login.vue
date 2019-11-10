<template>
  <div class="container">
    <q-input rounded outlined v-model="user.email" type="email" label="ایمیل" />
    <q-input
      v-model="user.password"
      rounded
      outlined
      class="q-mt-lg"
      :type="isPwd ? 'password' : 'text'"
      label="کلمه عبور"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <div v-if="error" id="error">{{error}}</div>
    <q-btn
      class="q-mt-lg full-width"
      :loading="loading"
      @click="login"
      color="purple-10"
      label="ورود"
    >
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      isPwd: true,
      user: {
        email: null,
        password: null
      },
      error: null,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      AuthenticationService.login(this.user)
        .then(res => {
          console.log(res);
          this.$store.dispatch("setUser", res.data.user);
          this.$store.dispatch("setToken", res.data.token);
          this.loading = false;
          this.$q.notify({
            message: "تلاش موفق!",
            color: "green"
          });
          this.$router.push("/guid");
        })
        .catch(err => {
          this.error = err.response.data.details;
          this.loading = false;
          this.$q.notify({
            message: this.error,
            color: "red"
          });
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  margin-top: 40px;
  width: 50%;
}
#error {
  color: red;
}
</style>