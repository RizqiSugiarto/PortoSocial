<script>
import PostVue from "./Post.vue";
import { Posts } from "../DummyData.js";

export default {
  data() {
    return {
      post: Posts,
    };
  },
  components: {
    PostVue,
  },
};
</script>

<template>
  <div>
    <div class="mr-28">
      <PostVue :post="post" />
    </div>
  </div>
</template>
