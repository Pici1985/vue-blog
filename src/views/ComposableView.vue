<template>
    <div>
        <h1>Composables</h1>
        <div>
            <h1>Fetch Data inside Setup Function</h1>
            <div v-if="error">{{ error }} </div>
            <div v-if="posts.length">
                <div v-for="post in posts" :key="post">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                    <span v-for="tag in post.tags" :key="tag">
                        #{{ tag }}
                    </span>
                </div>
            </div>
            <div v-else>Loading...</div>
        </div>
    </div>
</template>

<script>
// import { ref } from '@vue/reactivity'

import getPosts from '../composables/getPosts'

export default {
    setup(){
        
        const { posts, error, load } = getPosts()  
        
        load()

        return { posts, error }
    }
}
</script>

<style>

</style>