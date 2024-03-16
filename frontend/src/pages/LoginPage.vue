<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        let result = await axios.post("http://localhost:8000/api/auth/login", {
          email: this.email,
          password: this.password,
        });
        if (result.status == 200) {
          this.$router.push("/home");
        }
      } catch (error) {
        console.warn(error);
        if (error.response.data) {
          this.errMessage = error.response.data.message;
        }
      }
    },
  },
};
</script>

<template>
  <div
    class="w-screen h-screen flex items-center justify-center"
    style="background-color: #f0f2f5"
  >
    <div class="w-9/12 h-3/4 flex">
      <div class="flex flex-col justify-center" style="flex: 1">
        <h3 class="mb-2.5 font-extrabold text-blue-600 text-5xl">
          PortoSocial
        </h3>
        <!-- <span class="text-2xl mb-2 font-medium"
          >This is a fullStack project portfolio in which it is like <br />
          social media in general.</span
        > -->
        <span class="text-2xl mb-2 font-medium"
          >This project was created with nodejs, vue, <br />uses the Mongo
          database <br />and tailwind as the CSS library.</span
        >
        <!-- <span class="text-xs"
          >uses the Mongo database and tailwind as the CSS library.</span
        > -->
      </div>
      <div class="flex flex-col justify-center" style="flex: 1">
        <!--Error message-->
        <div
          v-if="errMessage"
          class="h-8 text-red-600 w-full bg-red-200 text-center rounded mb-4"
          style="width: 82%"
        >
          {{ errMessage }}
        </div>
        <!--Error message-->
        <div
          class="p-5 rounded-xl text-lg pl-5 focus:outline-none flex flex-col justify-between"
          style="
            box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
              0px 0px 17.9px rgba(0, 0, 0, 0.042),
              0px 0px 80px rgba(0, 0, 0, 0.07);
            max-width: 522px;
            height: 350px;
          "
        >
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="h-12 rounded-xl text-lg pl-5 focus:outline-none mb-1"
            style="border: 1px solid gainsboro"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="h-12 rounded-xl text-lg pl-5 focus:outline-none mb-5"
            style="border: 1px solid gainsboro"
          />
          <button
            v-on:click="login"
            class="h-12 rounded-lg border-none text-white text-xl font-medium cursor-pointer bg-blue-600"
          >
            Log In
          </button>
          <span class="text-center text-blue-600 cursor-pointer"
            >Forgot Password</span
          >
          <router-link to="/register"
            ><button
              class="w-3/5 h-12 rounded-lg border-none text-white text-xl font-medium cursor-pointer"
              style="background-color: #42b72a; margin-left: 95px"
            >
              Create a new Account
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
