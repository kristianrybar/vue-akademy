<template>
    <ul>
        <li class="deleted-item" v-for="task in deletedTaskList">
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
}
</style>