<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p class="snippet" @click="handleClick">{{ snippet }}</p>
        <p v-if="showPostBody">{{ post.body }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
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
    .snippet {
        cursor: pointer;
    }
</style>