<template>
  <div class="container">
    <button class="btn" @click="showDeleted = !showDeleted">
      Show Deleted Tasks
    </button>

    <a-add-item @addTask="addTask"/>

    <ul>
      <a-item-task 
        v-for="(text, index) in taskList" :key="index"
        :text="text"
        @removeTask="removeTask(index)"/>
    </ul>
  </div>

  <a-deleted class="del-list" v-if="showDeleted" :deletedTaskList="deletedTaskList"/>

  <a-my-data class="myData"/>
</template>

<script>
import AAddItem from './a-add-item.vue'
import AItemTask from './a-item-task.vue'
import ADeleted from './a-deleted.vue'
import AMyData from './a-my-data.vue'

export default {
  name: 'a-main',
  components: {
    AItemTask,
    ADeleted,
    AMyData,
    AAddItem
  },
  data() {
    return {
      showDeleted: false,
      deletedTaskList: [],
      isInvalid: false
    }
  },
  methods: {
    removeTask: function(index) {
      this.deletedTaskList.push(this.taskList[index])
      this.taskList.splice(index, 1)
    },
    addTask: function(task) {
      if(task !== '') {
        this.$store.commit('addTask', task) //this.taskList.push(this.task)    
      }
    }
  },
  computed: {
    taskList() {
      return this.$store.getters.getTaskList
    }
  }
}
</script>

<style scoped>

.container {
  width: 500px;
  padding: 20px;
  border: solid 2px gray;
  margin: 30px auto 0 auto;
}

.container input, .container button {
  padding: 5px 10px;
}

.btn {
  padding: 8px 16px !important;
  display: inline-block;
  margin: 5px;
  border: none;
  background-color: rgb(175, 175, 253);
  border-radius: 3px;
}

.btn:hover {
  border: 1px solid ;
}

.myData {
  margin: 0 auto;
  max-width: 500px;
  background-color: rgb(255, 213, 124);
  padding: 10px;
  margin-top: 20px;
  border: 3px solid rgb(184, 146, 41);
}
</style>
