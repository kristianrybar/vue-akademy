<template>
    <div>
        <h1>
            My data
        </h1>
        <ul>
            <li v-for="data in myData" :key="data.id">
                {{ data.name }}
            </li>
        </ul>
    </div>
  
</template>

<script>
import axios from 'axios' 
export default {
    name:'a-my-data',
    data() {
        return {
            myData: []
        }
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/myData`)
            this.myData = res.data
        }
        catch(e) {
            console.error(e)
        }
    }
}
</script>

<style scoped>
</style>