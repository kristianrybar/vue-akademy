<template>
    <input 
        type="text" placeholder="New item" 
        :class="{'error': isInvalid}"
        v-model="task"
        @keyup.enter="addNewTask(task)">

    <button @click="addNewTask(task)">
        Add Task
    </button>
</template>

<script>
export default {
    name: 'a-add-item',
    data() {
        return {
            isInvalid: false,
            task: ''
        }
    },
    methods: {
        addNewTask(task) {
            if(this.task !== '') {
                this.task= ''
                this.$emit('addTask', task)
                this.isInvalid= false   
            }else {
                this.isInvalid= true
            }          
        }
    },
}
</script>

<style scoped>
.error {
  background: rgb(255, 136, 136);
}
</style>