<template>
<ul>
    <li v-for="task in deletedTaskList">
        {{ task }}
    </li>
</ul> 

</template>
<script>
export default {
    props: ['deletedTaskList']
}
</script>
<style scoped>
</style>