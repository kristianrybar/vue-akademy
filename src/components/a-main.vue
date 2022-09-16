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
        @removeTask="removeTask(text, index)"/>
    </ul>
  </div>

  <a-deleted
    class="del-list" v-if="showDeleted" 
    @backToTaskList="backToTaskList"/>

</template>

<script>
import AAddItem from './a-add-item.vue'
import AItemTask from './a-item-task.vue'
import ADeleted from './a-deleted.vue'
import { mapActions, mapGetters } from 'vuex' 

export default {
  name: 'a-main',
  components: {
    AItemTask,
    ADeleted,
    AAddItem
  },
  data() {
    return {
      showDeleted: false,
      isInvalid: false
    }
  },
  methods: {
    ...mapActions(['addData', 'deleteTask']),
    removeTask(task, index) {
      this.deleteTask(task, index)

    },
    addTask(task) {
      if(task !== '') {
       this.addData(task)
      }
    },
    backToTaskList(task) {
      this.taskList.push(task)
    }
  },
  computed: {
    ...mapGetters(['getTaskList']),
    taskList() {
      return this.getTaskList
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
