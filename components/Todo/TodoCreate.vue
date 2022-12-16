<script setup>
const emit = defineEmits(['todoCreated']);

const activeUserAuthHeader = useUsersStore().getActiveUserHeader;
const todos = useTodos();
const todoBody = ref('');

const createTodo = async () => {
  await todos.createNewTodo(todoBody.value, activeUserAuthHeader);
  emit('todoCreated');
};
</script>

<template>
  <form @submit.prevent="createTodo">
    <label for="todo">Create new Todo</label>

    <div class="mt-2 flex gap-4">
      <input
        type="text"
        name="todo"
        id="todo"
        class="input"
        v-model="todoBody"
      />
      <button type="submit" class="button">Create</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.input {
  @apply grow rounded-lg border  border-gray-600  bg-gray-700 py-2 px-4 text-white placeholder-gray-400 sm:text-sm;
}

.button {
  @apply rounded-lg bg-primary-600 px-12  py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-700 focus:outline-none focus:ring-4;
}
</style>
