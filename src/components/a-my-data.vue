<template>
    <div id="myData" >
        <h1>
            My data
        </h1>
        <input
            type="text"
            v-model="dataName"
            @keyup.enter="addData"
            aria-label="Add a new Data"
            placeholder="Add a new Data"/>
        <ul>
            <li v-for="data in myData" :key="data.id"
                v-if="!isLoading">
                {{ data.name }}
            </li>
            <div v-else class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
const baseURL = 'http://localhost:3001/myData'
export default {
    name:'a-my-data',
    data() {
        return {
            myData: [],
            dataName: '',
            isLoading: false
        }
    },
    async created() {
        this.isLoading= true
        try {
            const res = await axios.get(baseURL)
            this.myData = res.data
            this.dataName = ''
        }
        catch(e) {
            console.error(e)
        }
        this.isLoading = false
    },
    methods: {
        async addData() {
            try {
                const res = await axios.post(baseURL, { name: this.dataName })
                this.myData.push(res.data)
                this.dataName = ''
            }
            catch(e) {
                console.error(e)
            }
        }
    }
}
</script>

<style scoped>
#myData h1, #myData input {
    margin: 10px 0 5px 10px;
    color: rgb(112, 64, 1);
}

#myData input {
    padding: 5px 10px;
}

#myData li {
    font-size: 19px;
    line-height: 1.5;
    color: rgb(121, 73, 1);
}
</style>