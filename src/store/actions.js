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
    },
    // addToCart({ commit }, product) {
    //     commit('addToCart', product);
    // }
    addToCart({ commit, state }, product) {
        console.log(product);
        const existingProduct = state.cartItems.find(item => item.databaseId === product.databaseId);
        console.log(existingProduct);

        if (existingProduct) {
            const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
            commit('updateCartItem', updatedProduct);
        } else {
            const newProduct = { ...product, quantity: 1 };
            commit('addCartItem', newProduct);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },


};

