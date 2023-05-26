export default {
    add_todo(state, todo) {
        state.todos.push(todo);
        // state.ttodos = state.todos;
        console.log(todo);
    },
    delete_todo(state, id) {
        state.todos = state.todos.filter((todo) => todo.id !== id);
        // state.ttodos = state.todos;
    },
    update_todo(state, todo) {
        const index = state.todos.findIndex((t) => t.id === todo.id);
        if (index !== -1) {
            state.todos[index] = todo;
        }

    },
    clear_all_todo(state) {
        state.todos = [];
    },
};
