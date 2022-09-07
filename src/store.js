import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            taskList: []
        }
    },
    mutations: {
        addTask(state, task) {
            state.taskList.push(task)
        }
    },
    getters: {
        getTaskList(state) {
            return state.taskList
        }
    }
})




