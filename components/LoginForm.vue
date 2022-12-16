<script setup>
defineProps({
  users: { type: Array, required: true },
  isAuthValid: { type: [Boolean, null], required: true }
});

const emit = defineEmits(['submit']);
const username = ref('');
const password = ref('');

const handleFormSubmit = () => {
  emit('submit', username.value, password.value);
};
</script>

<template>
  <form
    submit-label="Login"
    class="space-y-4"
    @submit.prevent="handleFormSubmit"
  >
    <div>
      <label for="users" class="label">Username</label>
      <select id="users" class="select" v-model="username">
        <option disabled value="">Choose a user</option>

        <option :value="user.username" v-for="user in users" :key="user.id">
          {{ user.name }}
        </option>
      </select>
    </div>

    <div>
      <label for="password" class="label">Password</label>
      <input
        v-model="password"
        class="input"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
      />
    </div>

    <div>
      <p
        v-show="isAuthValid === false"
        class="error-message opacity-0"
        :class="{ 'opacity-100': isAuthValid === false }"
      >
        Invalid credentials, please try again.
      </p>

      <button type="submit" class="button">Sign in</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.label {
  @apply mb-2 block text-sm font-medium text-white;
}

.input {
  @apply block w-full rounded-lg border  border-gray-600  bg-gray-700 p-2.5 text-white placeholder-gray-400 sm:text-sm;
}

.select {
  @apply block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500;
}

.button {
  @apply mt-4 w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4;
}

.error-message {
  @apply text-sm font-medium text-red-600  transition-opacity;
}
</style>
