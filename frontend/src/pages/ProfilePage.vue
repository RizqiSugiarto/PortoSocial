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
  <div
    v-if="isModalVisible"
    class="fixed inset-0 flex items-center justify-center z-50"
    style="background-color: rgba(0, 0, 0, 0.5)"
  ></div>
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
        <div class="flex flex-col items-center justify-center relative">
          <h4 class="text-xl font-bold">El Macho</h4>
          <span class="font-light">Hello gaesss</span>
          <div
            class="bg-gray-200 absolute left-0 top-16 items-center rounded-md"
          >
            <button class="w-28 h-8" @click="openModal">Edit Profile</button>
          </div>
        </div>
        <EditForm v-show="isModalVisible" @close="closeModal" />
      </div>
      <div class="flex mt-12">
        <FeedProfile />
        <ProfileRightBar class="mt-8" />
      </div>
    </div>
  </div>
</template>
