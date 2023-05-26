<template>
  <div id="app">
    <h1>Home</h1>
    <div class="container">
      <div class="task">
        <div class="title">
          <h1>To Do List</h1>
        </div>
        <TodoInput />
        <TodoList />
        <button @click="clearAllTodo" class="btn btn-clear">ClearAll</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "../components/Todo/TodoInput.vue";
import TodoList from "../components/Todo/TodoList.vue";
import { mapActions } from "vuex";
export default {
  components: {
    TodoInput,
    TodoList,
  },
  methods: {
    ...mapActions(["clearAllTodo"]),
  },
};
</script>

<style>
</style>