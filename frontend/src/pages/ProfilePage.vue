<script>
import TopBar from "../components/TopBar.vue";
import SideBar from "../components/SideBar.vue";
import FeedProfile from "../components/FeedProfile.vue";
import ProfileRightBar from "../components/ProfileRightBar.vue";
import EditForm from "../components/EditForm.vue";

export default {
  components: {
    TopBar,
    SideBar,
    FeedProfile,
    ProfileRightBar,
    EditForm,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar />
    <div style="flex: 9">
      <div>
        <div style="height: 300px; position: relative">
          <img
            src="../assets/post/8.jpeg"
            alt=""
            class="w-full object-cover"
            style="height: 250px"
          />
          <img
            src="../assets/person/10.jpeg"
            alt=""
            class="w-36 h-36 rounded-full object-cover absolute left-0 right-0 m-auto top-36"
            style="border: 3px solid white"
          />
        </div>
        <div class="flex flex-col items-center justify-center">
          <h4 class="text-xl font-bold">El Macho</h4>
          <span class="font-light">Hello gaesss</span>
          <button @click="openModal">Edit Profile</button>
        </div>
        <EditForm v-show="isModalVisible" @close="closeModal" />
      </div>
      <div class="flex">
        <FeedProfile />
        <ProfileRightBar />
      </div>
    </div>
  </div>
</template>
