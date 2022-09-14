import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            taskList: [],
            
        }
    },
    getters: {
        getTaskList(state) {
            return state.taskList
        }
    },
    mutations: {
        addTask(state, task) {
            state.taskList.push(task)
        }
    },
})




