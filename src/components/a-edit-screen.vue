<template>
    <div class="container">
        <input type="text">
        <button class="edit-btn">
            EDIT
        </button>
    </div>
</template>

<script>
export default {
    name: 'a-edit-screen'
}
</script>

<style scoped>
.edit-btn {
  background-color: rgb(179, 233, 168);
  color: rgb(0, 0, 0);
  cursor: pointer;
  border: none;
  padding: 5px 11px;
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
}
</style>