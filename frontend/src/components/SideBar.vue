<script>
import Rss from "vue-material-design-icons/Rss.vue";
import Chat from "vue-material-design-icons/MessageText.vue";
import Group from "vue-material-design-icons/AccountMultiple.vue";
import BookMark from "vue-material-design-icons/BookMark.vue";
import Help from "vue-material-design-icons/HelpCircleOutline.vue";
import Job from "vue-material-design-icons/BriefcaseOutline.vue";
import Event from "vue-material-design-icons/Calendar.vue";
import Courses from "vue-material-design-icons/School.vue";
import Video from "vue-material-design-icons/PlayCircle.vue";

import CloseFriend from "./CloseFriend.vue";
import { Users } from "../DummyData.js";

export default {
  components: {
    rss: Rss,
    chat: Chat,
    videos: Video,
    group: Group,
    bookmark: BookMark,
    help: Help,
    job: Job,
    event: Event,
    courses: Courses,
    CloseFriend,
  },
  data() {
    return {
      Users: Users,
    };
  },
};
</script>

<template>
  <div
    style="flex: 3; height: calc(100vh-50px)"
    class="overflow-scroll sticky top-12"
  >
    <div class="p-5">
      <ul>
        <li>
          <rss />
          <span>Feed</span>
        </li>
        <li>
          <chat />
          <span>Chats</span>
        </li>
        <li>
          <videos />
          <span>Video</span>
        </li>
        <li>
          <group />
          <span>Group</span>
        </li>
        <li>
          <bookmark />
          <span>BookMarks</span>
        </li>
        <li>
          <help />
          <span>Question</span>
        </li>
        <li>
          <job />
          <span>Jobs</span>
        </li>
        <li>
          <event />
          <span>Events</span>
        </li>
        <li>
          <courses />
          <span>Courses</span>
        </li>
      </ul>
      <button
        class="bg-gray-200 p-2 pl-7 pr-7 rounded-md mb-4"
        style="text-align: center"
      >
        Show More
      </button>
      <hr />
      <ul v-for="(user, index) in Users" :key="index" :user="user" class="mt-5">
        <CloseFriend :user="user" />
      </ul>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(179, 179, 179);
}

ul li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

li span {
  margin-left: 15px;
}
</style>
