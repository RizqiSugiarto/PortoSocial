<script>
import Share from "./Share.vue";
import PostVue from "./Post.vue";
import { Posts } from "../DummyData.js";

export default {
  data() {
    return {
      post: Posts,
    };
  },
  components: {
    Share,
    PostVue,
  },
};
</script>

<template>
  <div>
    <div class="mr-28">
      <Share />
      <PostVue :post="post" />
    </div>
  </div>
</template>
