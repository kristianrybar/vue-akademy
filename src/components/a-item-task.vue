<template>
    <li>
      {{ text }}
      <button 
        @click="$emit('removeTask')">
        Delete
      </button>
    </li>
</template>

<script>
export default {
    name: 'a-task',
    props: ['text'],
}
</script>

<style scoped>
    
</style>