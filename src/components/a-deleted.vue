<template>
    <ul class="del-items">
        Deleted Tasks
        <li class="deleted-item" v-for="task in deletedTaskList" :key="task">
            {{ task }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'a-deleted',
    props: ['deletedTaskList']
}
</script>

<style scoped>
.deleted-item {
    border: 1px solid gray;
    border-radius: 3px;
    padding: 5px;
    list-style: none;
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 3px;
    background: white;
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
}
</style>