<template>
    <ul class="del-items">
        Deleted Tasks
        <li class="deleted-item" v-for="(task, index) in getDeletedTaskList" :key="task">
            <div>
               {{ task }} 
            </div>
            <button @click="removeDeletedTask(index, task)">
                 Back To TaskList
            </button>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' 
export default {
    name: 'a-deleted',
    methods: {
        ...mapActions(['backToTaskList']),
        removeDeletedTask(index, task) {
            this.backToTaskList({index, task})
        }
    },
    computed: {
        ...mapGetters(['getDeletedTaskList']),
        deletedTaskList() {
            return this.getDeletedTaskList
        },
    }
}
</script>

<style scoped>
.deleted-item {
    border: 1px solid gray;
    border-radius: 3px;
    padding: 5px;
    list-style: none;
    max-width: 380px;
    margin: 0 auto;
    margin-bottom: 3px;
    background: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.del-items {
    text-align: center;
    padding: 10px;
    border: 2px solid rgb(28, 13, 158);
    margin-top: 20px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background: rgb(238, 239, 255);
    display: flex;
    flex-direction: column;  
}
</style>