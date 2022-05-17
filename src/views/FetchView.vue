<template>
    <div>
        <h1>Fetch Data inside Setup Function</h1>
        <div v-if="error">{{ error }} </div>
        <div v-if="posts.length">
            <div v-for="post in posts" :key="post">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
                <p>{{ post.tags }}</p>
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'


export default {
    setup(){
        const posts = ref([])
        const error = ref(null)

        const load = async () => {
            try {
                let data = await fetch('http://localhost:3000/posts')
                if (!data.ok) {
                    throw Error ('No data available')
                }
                posts.value = await data.json()                
            }
            catch(err){
                error.value = err.message
                console.log(error.value)
            }
        }    
        
        load();

        return { posts, error }
    }
}
</script>

<style>

</style>