<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
      emailError: false,
    };
  },
  computed: {
    passwordNotMatch() {
      return this.password !== this.confirmPassword;
    },
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !emailRegex.test(this.email);
    },
    async signUp() {
      try {
        if (!this.passwordNotMatch && this.password !== "") {
          let result = await axios.post(
            "http://localhost:8000/api/auth/register",
            {
              username: this.username,
              email: this.email,
              password: this.password,
            }
          );

          if (result.status === 201) {
            this.successMessage = "successfully Register";
            this.$router.push("/");
          }
          return;
        }
      } catch (error) {
        console.warn(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorCode = error.response.data.error.code;
          if (errorCode === 11000) {
            const keyValue = error.response.data.error.keyValue;
            const duplicateField = Object.keys(keyValue)[0];
            this.errorMessage = `${duplicateField} already exists, please using another ${duplicateField}`;
          } else {
            this.errorMessage = "An error occurred during sign up.";
          }
        } else {
          this.errorMessage = "An error occurred during sign up.";
        }
      }
    },
  },
};
</script>

<template>
  <div
    class="w-screen h-screen justify-center items-center flex"
    style="background-color: #f0f2f5"
  >
    <div class="w-9/12 h-3/4 flex">
      <div class="flex flex-col justify-center" style="flex: 1">
        <h3 class="mb-2.5 font-extrabold text-blue-600 text-5xl">
          PortoSocial
        </h3>
        <span class="text-2xl mb-2 font-medium"
          >Actually, this project is a wrapper for my other portfolio
          projects</span
        >
      </div>

      <div class="flex flex-col justify-center" style="flex: 1">
        <!-- error message -->
        <div
          v-if="errorMessage"
          class="h-8 text-red-600 bg-red-200 text-center rounded mb-4"
          style="width: 82%"
        >
          {{ errorMessage }}
        </div>
        <div v-if="emailError" class="text-red-600">Invalid email format</div>
        <p>{{ console.warn(passwordNotMatch, "SAMPEK TEMPLATE KEK GINI") }}</p>
        <div v-if="passwordNotMatch" class="text-red-600">
          Password not match
        </div>
        <div
          v-if="successMessage"
          class="h-8 text-green-600 text-center rounded mb-4"
        >
          {{ successMessage }}
        </div>
        <!-- error message -->
        <div
          class="p-5 rounded-xl text-lg pl-5 focus:outline-none flex flex-col justify-between"
          style="
            box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
              0px 0px 17.9px rgba(0, 0, 0, 0.042),
              0px 0px 80px rgba(0, 0, 0, 0.07);
            max-width: 522px;
            height: 450px;
          "
        >
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="h-12 rounded-xl text-lg pl-5 focus:outline-none mb-1"
            style="border: 1px solid gainsboro"
          />
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            :class="{ 'bg-red-300': this.emailError }"
            @input="this.validateEmail"
            class="h-12 rounded-xl text-lg pl-5 focus:outline-none mb-1"
            style="border: 1px solid gainsboro"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="h-12 rounded-xl text-lg pl-5 focus:outline-none mb-1"
            style="border: 1px solid gainsboro"
          />
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Password Again"
            class="h-12 rounded-xl text-lg pl-5 focus:outline-none mb-1"
            style="border: 1px solid gainsboro"
          />
          <p>{{ console.warn(this.email, "Email") }}</p>
          <button
            v-on:click="signUp"
            :disabled="emailError || passwordNotMatch"
            class="h-12 rounded-lg text-white text-xl font-medium cursor-pointer bg-blue-600"
          >
            SignUp
          </button>
          <router-link to="/"
            ><button
              class="w-3/5 h-12 rounded-lg border-none text-white text-xl font-medium cursor-pointer"
              style="background-color: #42b72a; margin-left: 95px"
            >
              Log Into Account
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
