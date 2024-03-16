<script>
import More from "vue-material-design-icons/DotsVertical.vue";
import { Users } from "../DummyData";
import { ref } from "vue";

export default {
  props: {
    post: {
      type: Array,
      required: true,
    },
  },
  components: {
    More,
  },
  setup(props) {
    console.log(props.post, "KEKGINI");
    const like = ref(props.post.like);
    const isLike = ref(false);

    const likeHandler = () => {
      like.value = isLike.value ? like.value - 1 : like.value + 1;
      isLike.value = !isLike.value;
    };

    const getUserProfile = (userId) => {
      //   console.log(userId, `seperti inilah ${userId + 1}`);
      return Users.find((user) => user.id === userId);
    };

    const makePathImg = (nameFile, types) => {
      const Url =
        types === "person"
          ? `src/assets/person/${nameFile}`
          : `src/assets/post/${nameFile}`;
      return Url;
    };
    return { like, isLike, likeHandler, getUserProfile, makePathImg };
  },
};
</script>

<template>
  <div v-for="(singlePost, index) in post" :key="index">
    <div
      style="
        width: 100%;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
        box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
        margin: 30px 0;
        padding: 15px;
      "
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            :src="
              makePathImg(
                getUserProfile(singlePost.userId).profilePicture,
                'person'
              )
            "
            alt=""
            class="w-8 h-8 rounded-full object-cover"
          />
          <span class="text-base font-semibold ml-3" style="margin: 0 10">{{
            getUserProfile(singlePost.userId).username
          }}</span>
          <span class="text-xs ml-4 font-medium" style="color: gray">{{
            singlePost.date
          }}</span>
        </div>
        <div>
          <More />
        </div>
      </div>
      <div style="margin: 20px 0">
        <span>{{ singlePost.desc }}</span>
        <img
          :src="makePathImg(singlePost.photo, 'post')"
          alt=""
          class="mt-5 object-contain"
          style="max-width: 700px"
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            src="../assets/like.png"
            alt=""
            class="w-6 h-6 mr-1 cursor-pointer"
            @click="likeHandler"
          />
          <img
            src="../assets/heart.png"
            alt=""
            class="w-6 h-6 mr-1 cursor-pointer"
            @click="likeHandler"
          />
          <span class="text-sm">{{ singlePost.like }} People Like it</span>
        </div>
        <div>
          <span
            class="cursor-pointer text-sm"
            style="border-bottom: 1px dashed gray"
          >
            {{ singlePost.comment }} comments
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
