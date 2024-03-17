<script>
import City from "vue-material-design-icons/City.vue";
import Love from "vue-material-design-icons/HeartSearch.vue";
import FormWhere from "vue-material-design-icons/MapMarker.vue";

export default {
  methods: {
    close() {
      this.$emit("close");
    },

    openFilePicker() {
      const input = document.createElement("input");
      input.type = "file";
      input.style.display = "none";
      input.addEventListener("change", this.handleFileUpload);
      document.body.appendChild(input);
      input.click();
      document.body.removeChild(input);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log(file, "JADI");
    },
  },
  components: {
    City,
    Love,
    FormWhere,
  },
};
</script>

<template>
  <div
    class="fixed flex flex-col rounded-lg bg-white"
    style="
      z-index: 1000;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      width: 700px;
      margin: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <div class="flex justify-between w-full px-4 py-2">
      <h2 style="margin: 0 auto" class="font-bold text-2xl">Edit Profile</h2>
      <div
        class="bg-gray-200 w-8 h-8 right-3 text-center absolute rounded-full"
      >
        <button @click="close" class="text-xl">&times;</button>
      </div>
    </div>
    <hr />
    <div class="grid grid-cols-3 gap-9 p-3">
      <div class="col-span-1 flex">
        <p class="font-bold text-xl">Photo Profile</p>
      </div>
      <div class="col-span-1 flex items-center justify-center">
        <img
          src="../assets/person/1.jpeg"
          alt=""
          class="w-36 h-36 rounded-full object-cover mt-5 relative"
        />
      </div>
      <div class="col-span-1 flex justify-end" style="margin-bottom: auto">
        <button class="text-blue-500" @click="openFilePicker">Tambahkan</button>
      </div>
    </div>
    <div class="grid grid-cols-3 p-3">
      <div class="flex h-7">
        <span class="font-bold text-xl">Cover Photo</span>
      </div>
      <div class="flex items-center justify-center max-w-96">
        <img
          src="../assets/post/3.jpeg"
          alt=""
          class="h-36 object-cover mt-10"
          style="width"
        />
      </div>
      <div class="flex justify-end" style="margin-bottom: auto">
        <button class="text-blue-500" @click="openFilePicker">Tambahkan</button>
      </div>
    </div>
    <div class="mt-5 flex justify-between p-3">
      <p style="margin-bottom: auto" class="font-bold text-xl">
        User Information
      </p>
      <button style="margin-bottom: auto" class="text-blue-500">
        Tambahkan
      </button>
    </div>
    <div class="p-3 ml-2" style="margin-top: -10px">
      <div class="flex">
        <City />
        <p>City</p>
      </div>
      <div class="flex">
        <FormWhere />
        <p>From</p>
      </div>
      <div class="flex">
        <Love />
        <p>RelationShip</p>
      </div>
    </div>
  </div>
</template>
