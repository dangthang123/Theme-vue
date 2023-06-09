export default {
    add_todo(state, todo) {
        state.todos.push(todo);
        // state.ttodos = state.todos;
        // console.log(todo);
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

    // addToCart(state, product) {
    //     state.cartItems.push(product);
    //     console.log(state);
    // }

    setCartItems(state, cartItems) {
        state.cartItems = cartItems;
    },

    addCartItem(state, product) {
        state.cartItems.push(product);
    },
    updateCartItem(state, product) {
        const index = state.cartItems.findIndex(item => item.databaseId === product.databaseId);
        if (index !== -1) {
            state.cartItems.splice(index, 1, product);
        }
    },

};
