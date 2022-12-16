<script setup>
const props = defineProps({ todo: { type: Object, required: true } });
const emit = defineEmits(['todoEdited']);

const activeUserAuthHeader = useUsersStore().getActiveUserHeader;
const todos = useTodos();

const toggleTodoState = async () => {
  await todos.toggleTodoCompletion(props.todo.id, activeUserAuthHeader);
  emit('todoEdited');
};

const deleteTodo = async () => {
  await todos.deleteTodo(props.todo.id, activeUserAuthHeader);
  emit('todoEdited');
};
</script>

<template>
  <div
    v-if="todo"
    class="flex items-center justify-between gap-2 rounded bg-gray-700 py-4 px-6"
  >
    <div class="flex items-center gap-2">
      <Icon
        :name="
          todo.completed
            ? 'ic:baseline-check-circle'
            : 'ic:baseline-do-not-disturb-on'
        "
        :class="todo.completed ? 'text-green-500' : 'text-yellow-500'"
        size="20"
      />

      <p>{{ todo.task }}</p>
    </div>

    <div>
      <button @click="toggleTodoState">
        <Icon
          name="bx:refresh"
          size="24"
          class="transition-colors hover:text-blue-500"
        />
      </button>

      <button class="ml-2" @click="deleteTodo">
        <Icon
          name="ic:round-delete-forever"
          size="24"
          class="transition-colors hover:text-red-500"
        />
      </button>
    </div>
  </div>
</template>
