<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p @click="handleClick">{{ snippet }}</p>
        <p v-if="showPostBody">{{ post.body }}</p>

    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    data(){
        return {
            showPostBody: false,
        }
    },
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '....'
        })
    
    return { snippet }
    },
    methods: {
        handleClick(){
            this.showPostBody = !this.showPostBody
        }
    },
}
</script>

<style>

</style>