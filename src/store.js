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
        deleteTask({commit}, task, index) {
            commit('toDeleteList', task, index)
        }
    },
    mutations: {
        addTask(state, task) {
            state.taskList.unshift(task)
        },
        toDeleteList(state, task, index) {
            state.taskList.splice(index, 1)
            state.deletedTaskList.push(task)
        }
        
    },
})




