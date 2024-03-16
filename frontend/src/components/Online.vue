<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        computed: {
            ImgUrl(){
                const Image = `src/assets/person/${this.user.profilePicture}`;
                return Image;
            }
        }
    }
</script>

<template>
    <li class="flex items-center mb-4">
        <div class="mr-2 relative">
            <img :src="ImgUrl" alt="" class="w-10 h-10 rounded-full object-cover">
            <span class="w-3 h-3 rounded-full bg-green-500 absolute" style="top: -2px; border: 2px solid white;"></span>
        </div>
        <span style="font-weight: 500;">{{ user.username }}</span>
    </li>
</template>