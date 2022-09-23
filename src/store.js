import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            taskList: [],
            deletedTaskList: []
        }
    },
    getters: {
        getTaskList(state) {
            return state.taskList
        },
        getDeletedTaskList(state) {
            return state.deletedTaskList
        },
    },
    actions: {
        addData({commit}, data) {
            commit('addTask', data)
        },
        deleteTask({commit}, {task, index}) {
            commit('deleteTask', {task, index})
        },
        backToTaskList({commit}, {task, index}) {
            commit('backToTaskList', {task, index})
        },
        editTask({commit}, text, index) {
            console.log('test', text, index)
            commit('editTask', {text, index})
        }
    },
    mutations: {
        addTask(state, task) {
            state.taskList.unshift(task)
        },
        deleteTask(state, {task, index}) {
            state.taskList.splice(index, 1) 
            state.deletedTaskList.push(task)
        },
        backToTaskList(state, {task, index}) {
            state.deletedTaskList.splice(index, 1) 
            state.taskList.push(task)
        },
        editTask(state, {text, index}) {
            state.taskList[index] = text
        }       
    },
})




