<script>
import PhotoOrVideo from "vue-material-design-icons/FolderMultipleImage.vue";
import Tag from "vue-material-design-icons/Tag.vue";
import Map from "vue-material-design-icons/MapMarker.vue";
import EmoticonOutline from "vue-material-design-icons/EmoticonOutline.vue";

export default {
  components: {
    photo: PhotoOrVideo,
    tag: Tag,
    maps: Map,
    emote: EmoticonOutline,
  },
};
</script>

<template>
  <div
    class="h-fit mr-10 pb-9 w-full"
    style="
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
      box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    "
  >
    <div class="p-2.5">
      <div class="flex items-center">
        <img
          src="../assets/person/1.jpeg"
          alt=""
          class="w-12 h-12 rounded-full object-cover mr-2.5"
        />
        <input
          type="text"
          placeholder="Posting sesuatu?"
          class="border-none w-1/2 focus:outline-none"
        />
      </div>
      <hr class="m-5" />
      <div class="flex items-center content-between">
        <div class="flex ml-5">
          <div class="flex cursor-pointer items-center mr-4">
            <photo style="color: tomato" class="text-lg mr-1" />
            <span class="text-lg font-medium">Photo or Video</span>
          </div>
          <div class="flex cursor-pointer items-center mr-4">
            <tag style="color: blue" class="text-lg mr-1" />
            <span class="text-lg font-medium">Tag</span>
          </div>
          <div class="flex cursor-pointer items-center mr-4">
            <maps style="color: green" class="text-lg mr-1" />
            <span class="text-lg font-medium">Location</span>
          </div>
          <div class="flex cursor-pointer items-center mr-4">
            <emote style="color: goldenrod" class="text-lg mr-1" />
            <span class="text-lg font-medium">Feelings</span>
          </div>
        </div>
        <button
          class="p-2 bg-green-600 font-medium cursor-pointer"
          style="border-radius: 5px; color: white; margin-left: 120px"
        >
          Share
        </button>
      </div>
    </div>
  </div>
</template>
