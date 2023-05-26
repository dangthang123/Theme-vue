<template>
  <li>
    <button v-if="!check">{{ todo.title }}</button>
    <div v-else>
      <input type="text" v-bind:value="todoText" @change="todoTextChange" />
    </div>
    <div class="class-btn">
      <button @click="updateTodoI(todo)" class="btn-add">
        {{ check ? "Update" : "Edit" }}
      </button>
      <br />
      <button @click="deleteTodo(todo.id)" class="btn-delete">Delete</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
  },

  data() {
    return {
      todoText: "",
      check: false,
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoI(todo) {
      this.check = this.check == true ? false : true;
      if (this.check) {
        this.todoText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
      }
    },
  },
};
</script>

<style scope>
.class-btn {
  display: flex;
  gap: 3px;
}
.btn-add {
  background: #4ec5c1 !important;
  padding: 5px;
  border-radius: 10px;
}
.btn-add:hover,
.btn-delete:hover {
  color: #fff !important;
}
.btn-delete {
  background: red !important;
  padding: 5px;
  border-radius: 10px;
}
</style>