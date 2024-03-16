<script>
import Search from 'vue-material-design-icons/Magnify.vue';
import Person from 'vue-material-design-icons/Account.vue';
import Chat from 'vue-material-design-icons/MessageText.vue';
import Notif from 'vue-material-design-icons/Bell.vue';

export default {
    components: {
        'search': Search,
        'person': Person,
        'chat': Chat,
        'notif': Notif
    }
}
</script>
<template>
    <div class="h-12 w-full bg-blue-600 flex items-center sticky top-0 z-50">
        <div style="flex: 3;">
            <span class="text-2xl ml-5 font-bold text-white cursor-pointer">portoSocial</span>
        </div>
        <div style="flex: 5;">
            <div class="w-full h-8 bg-white rounded-3xl flex items-center">
                <search class="size-5 ml-2"/>
                <input placeholder="input for friend video or post" class="ml-4 border-none w-3/4 focus:outline-none">
            </div>
        </div>
        <div style="flex: 4; color: white;" class="flex items-center justify-around">
            <div class="space-y-1">
                <span class="mr-2 cursor-pointer text-sm">HomePage</span>
                <span class="mr-2 cursor-pointer text-sm">TimeLine</span>
            </div>
            <div class="flex">
                <div class="mr-3 mt-2.5 cursor-pointer relative">
                    <person/>
                    <span class="w-3 h-3 bg-red-600 text-white absolute flex items-center justify-center text-xs" 
                    style="border-radius: 50%; top: -5px; right: -5px;">1</span>
                </div>
                <div class="mr-3 mt-2.5 cursor-pointer relative">
                    <chat/>
                    <span class="w-3 h-3 bg-red-600 text-white absolute flex items-center justify-center text-xs" 
                    style="border-radius: 50%; top: -5px; right: -5px;">2</span>
                </div>
                <div class="mr-3 mt-2.5 cursor-pointer relative">
                    <notif/>
                    <span class="w-3 h-3 bg-red-600 text-white absolute flex items-center justify-center text-xs" 
                    style="border-radius: 50%; top: -5px; right: -5px;">1</span>
                </div>
            </div>
            <router-link to="/profile"><img src="../assets/person/1.jpeg" alt="" class="w-7 h-7 cursor-pointer object-cover" style="border-radius: 50%;"></router-link>
        </div>
    </div>
</template>