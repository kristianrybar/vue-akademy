<template>
    <div class="rout-box">
        <span @click="$router.push('/')">Home</span> / EditTask
    </div>
    <div class="container">
        <input v-model="currentTask" class="edit-input" type="text">
        <button
            @click="sendEditedTask(currentTask, $route.params.id)" 
            class="edit-btn">
            EDIT
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 

export default {
    name: 'a-edit-screen',
    data() {
        return {
            currentTask: ''
        }
    },
    methods: {
        ...mapActions(['editTask']),

        sendEditedTask(value, index) {
            this.editTask(value, index)
            console.log(value, index)
            this.$router.push('/')
        },
    },
    computed: {
        ...mapGetters(['getTaskList']),
        text() {
            return this.getTaskList[this.$route.params.id]
        },
    },
    mounted() {
        this.currentTask = this.text
    }
}
</script>

<style scoped>
.edit-btn {
  background-color: rgb(179, 233, 168);
  color: rgb(0, 0, 0);
  cursor: pointer;
  border: none;
  padding: 10px 18px;
  font-size: 12px;
  border-radius: 3px;
  font-weight: 700;
  margin-left: 10px;
  border: 1px solid black;
}

.container {
    margin: 0 auto;
    text-align: center;
    margin-top: 150px;
    display: flex;
    justify-content: center;
}

.rout-box {
    display: inline-block;
    cursor: pointer;
    padding: 6px 16px;
    background: rgb(230, 230, 230);
    position: absolute;
    top: 30px;
    left: 30px;
    border-radius: 5px;
    border: 1px solid rgb(36, 36, 36);
    font-size: 17px;
}

.edit-input {
    padding: 5px;
    font-size: 16px;
}
</style>