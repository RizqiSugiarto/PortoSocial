<script setup>
import TopBar from "../components/TopBar.vue";
import SideBar from "../components/SideBar.vue";
import RightBar from "../components/RightBar.vue";
// import Share from "../components/Share.vue";
import Feed from "../components/Feed.vue";
</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar />
    <!-- <Share /> -->
    <Feed />
    <RightBar />
  </div>
</template>

<style></style>
