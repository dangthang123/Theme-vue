export default {
    addTodo({ commit }, todo) {
        commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
        commit('delete_todo', id);
    },
    updateTodo({ commit }, todo) {
        commit('update_todo', todo);
    },
    clearAllTodo({ commit }) {
        commit('clear_all_todo',)
    }
};
