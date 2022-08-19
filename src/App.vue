<template>
<div class="container">

  <input 
    type="text" placeholder="New item" 
    :class="invalid === '' ? 'error' : ''"
    v-model="task"
    @keyup.enter="addTask">

  <button 
    @click="addTask">
    Add
  </button>

  <br>

  <ul class="list">
    <li 
      v-for="(text, index) in taskList" :key="index">
      {{ text }}
      <button 
        @click="removeTask(index)">
        Delete
      </button>
    </li>
  </ul>
</div>
  
</template>

<script>

export default {
  data() {
    return {
      taskList: [],
      task: '',
      invalid: ''
    }
  },
  methods: {
    addTask: function() {
      if(this.task != '') {
        this.taskList.push(this.task);
        this.task= '';
      }
    },
    removeTask: function(index) {
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
  background-color: rgb(221, 63, 63);
  color: #fff;
}
</style>
