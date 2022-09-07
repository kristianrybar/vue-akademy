<template>
<div class="container">
  <button class="btn" @click="showDeleted = !showDeleted">
    to deleted
  </button>

  <input 
    type="text" placeholder="New item" 
    :class="{'error': isInvalid}"
    v-model="task"
    @keyup.enter="addTask">

  <button @click="addTask">
    Add
  </button>
  <ul >
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
import AItemTask from './a-item-task.vue'
import ADeleted from './a-deleted.vue'
import AMyData from './a-my-data.vue'


export default {
  name: 'a-main',

  components: {
    AItemTask,
    ADeleted,
    AMyData
  },
  data() {
    return {
      showDeleted: false,
      deletedTaskList: [],
      task: '',
      isInvalid: false
    }
  },
  methods: {
    addTask: function() {
      if(this.task !== '') {
        //this.taskList.push(this.task)
        this.$store.commit('addTask', this.task)
        this.task= ''
        this.isInvalid= false
      }else {
        this.isInvalid= true
      }
      console.log(this.taskList)     
    },
    removeTask: function(index) {
      this.deletedTaskList.push(this.taskList[index])
      this.taskList.splice(index, 1)
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
  margin: 200px auto 0 auto;
}

.container input, .container button {
  padding: 5px 10px;
}
.error {
  background-color: rgb(255, 89, 89);
  color: #fff;
}

.btn {
  padding: 8px 16px !important;
  display: inline-block;
  margin: 5px;
  border: none;
  background-color: rgb(175, 175, 253);
  border-radius: 3px;
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
