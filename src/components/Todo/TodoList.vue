<template>
  <div class="taskItems">
    <ul v-for="todo in allTTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem/TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["allTTodos"]),
  },
};
</script>

<style>
</style>