<template>
<div class="container">
  <button @click="showDeleted = !showDeleted">
    to deleted
  </button>

  <input 
    type="text" placeholder="New item" 
    :class="invalid === '' ? 'error' : ''"
    v-model="task"
    @keyup.enter="addTask">

  <button @click="addTask">
    Add
  </button>

  <br>

  <ul class="list">
    <a-item-task 
      v-for="(text, index) in taskList" :key="index"
      :text="text"
      @removeTask="removeTask(index)"/>
  </ul>
</div>

<a-deleted v-if="showDeleted" :deletedTaskList="deletedTaskList"/>

</template>

<script>
import AItemTask from './a-item-task.vue'
import ADeleted from './a-deleted.vue'

export default {
  name: 'a-main',

  components: {
    AItemTask,
    ADeleted
  },
  data() {
    return {
      showDeleted: false,
      deletedTaskList: [],
      taskList: [],
      task: '',
      invalid: ''
    }
  },
  methods: {
    addTask: function() {
      if(this.task !== '') {
        this.taskList.push(this.task);
        this.task= '';
      }     
    },
    removeTask: function(index) {
            this.deletedTaskList.push(this.taskList[index])
            this.taskList.splice(index, 1)
        }
  },
}

</script>

<style scoped>
.container {
  width: 500px;
  padding: 20px;
  border: solid 2px gray;
  margin: 200px auto 0 auto;
}

.container input, .container button {
  padding: 5px 10px;
}
.error {
  background-color: rgb(255, 89, 89);
  color: #fff;
}       
</style>
