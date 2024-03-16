<script>
    import Online from "./Online.vue";
    import {Users} from "../DummyData.js"
    
    export default{
        components: {
            Online
        },
        data(){
        return {
            Users: Users
        }
    }
    }
</script>

<template>
    <div class="flex items-center">
        <img src="../assets/gift.png" alt="" class="w-10 h-10 mr-2.5">
        <span class="font-light text-xs">
            <b class="font-bold text-sm">YantoBalap</b> <span>And</span><b class="font-bold text-sm"> 3 other friends</b><span class="text-xs"><b> have birthday Today</b></span>
        </span>
    </div>
    <img src="../assets/ads.png" alt="" class="w-full" style="margin: 30px 0; border-radius: 10px;">
    <h4 class="mb-5">Online Friends</h4>
    <ul v-for="(user, index) in Users" :key="index" :user="user" class="list-none">
        <Online :user="user"/>
    </ul>
</template>