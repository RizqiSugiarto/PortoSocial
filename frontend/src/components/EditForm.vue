<script>
import City from "vue-material-design-icons/City.vue";
import Love from "vue-material-design-icons/HeartSearch.vue";
import FormWhere from "vue-material-design-icons/MapMarker.vue";

export default {
  methods: {
    close() {
      this.$emit("close");
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
    class="fixed bg-gray-500 flex flex-col rounded-lg"
    style="
      z-index: 1000;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      width: 700px;
      /* height: 600px; */
      margin: auto; /* Membuat div berada di tengah horizontal */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <div class="flex justify-between w-full px-4 py-2">
      <h2 style="margin: 0 auto" class="font-bold text-2xl">Edit Profile</h2>
      <button @click="close">&times;</button>
    </div>
    <hr />
    <div class="mt-2 flex justify-between p-3 relative">
      <!-- <p style="margin-bottom: auto" class="font-bold text-xl"></p> -->
      <span style="margin-bottom: auto" class="font-bold text-xl"
        >Photo Profile</span
      >
      <img
        src="../assets/person/1.jpeg"
        alt=""
        class="w-36 h-36 rounded-full object-cover mt-5 relative"
      />
      <button style="margin-bottom: auto">Tambahkan</button>
    </div>
    <div class="mt-10 flex justify-between p-3">
      <p style="margin-bottom: auto" class="font-bold text-xl">Photo Cover</p>
      <img
        src="../assets/person/1.jpeg"
        alt=""
        class="w-36 h-36 rounded-full object-cover mt-5"
      />
      <button style="margin-bottom: auto">Tambahkan</button>
    </div>
    <div class="mt-10 flex justify-between p-3">
      <p style="margin-bottom: auto" class="font-bold text-xl">
        User Information
      </p>
      <button style="margin-bottom: auto">Tambahkan</button>
    </div>
    <div class="p-3">
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
