<script setup>
// Fetching active user auth header to get his todos list from the server
const usersStore = useUsersStore();
const userAuthHeader = usersStore.getActiveUserHeader;

// Fetching user's todos list
const { todos, refresh } = await useTodos().getUserTodos(userAuthHeader);
</script>

<template>
  <div class="min-h-screen py-6">
    <Nav />

    <h1 class="mb-4 border-b border-gray-600 py-4 text-4xl font-semibold">
      Todos
    </h1>

    <TodoCreate class="mb-4" @todo-created="refresh" />

    <section>
      <p>Your Current Todos</p>

      <div v-auto-animate class="mt-2 flex flex-col gap-2">
        <TodoItem
          v-for="item in todos"
          :key="item.id"
          :todo="item"
          @todo-edited="refresh"
        />
      </div>
    </section>
  </div>
</template>
