<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    computed: {
        ImgUrl() {
            const ImgUrl = `src/assets/person/${this.user.profilePicture}`;
            console.log(ImgUrl);
            return ImgUrl;
        }
    }
}

</script>

<template>
    <li class="flex items-center mb-4">
        <img :src="ImgUrl" alt="" class="w-8 h-8 rounded-full object-cover mr-2">
        <span>{{ user.username }}</span>
        
    </li>
</template>
