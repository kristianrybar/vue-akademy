<template>
  <li class="item-task">
    {{ text }}
    <button @click="$router.push(`/edit/${id}`)" class="edit-btn">
      EDIT
    </button>
    <button
      class="del-btn" 
      @click="$emit('removeTask')">
      DELETE
    </button>
  </li>
</template>

<script>
export default {
  name: 'a-task',
  props: ['text', 'id'],
}
</script>

<style scoped>
.item-task {
  border: 1px solid gray;
  padding: 6px;
  text-decoration: none;
  list-style: none;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.del-btn {
  background-color: rgb(252, 36, 36);
  color: rgb(255, 234, 234);
  cursor: pointer;
  border: none;
  padding: 5px 11px;
  font-size: 12px;
  border-radius: 3px;
  font-weight: 700;
  margin-left: 10px;
  border: 1px solid black;
}

.edit-btn {
  background-color: rgb(255, 218, 53);
  color: rgb(29, 29, 29);
  cursor: pointer;
  border: none;
  padding: 5px 11px;
  font-size: 12px;
  border-radius: 3px;
  font-weight: 700;
  margin-left: auto;
  border: 1px solid black;
}
</style>