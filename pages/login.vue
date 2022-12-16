<script setup>
// Fetching users list to fill login options
const users = useUsers();
const allUsers = await users.fetchAll();

// Authenticating credentials and storing current user to store
const isUserAuthenticated = ref(null);
const authUser = async (username, password) => {
  const userBasicAuthHeader = users.generateBasicAuthHeader(username, password);
  isUserAuthenticated.value = await users.auth(userBasicAuthHeader);
  if (!isUserAuthenticated.value) return;

  // Storing the current active user to Pinia
  const activeUser = allUsers.value.find((user) => user.username === username);
  const usersStore = useUsersStore();
  usersStore.loginUser(activeUser, userBasicAuthHeader);

  // Navigating to dashboard (todos) page
  return await navigateTo('/dashboard');
};
</script>

<template>
  <section class="grid min-h-screen place-content-center">
    <div class="card">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl"
      >
        Sign in to your account
      </h1>

      <LoginForm
        :users="allUsers"
        :is-auth-valid="isUserAuthenticated"
        @submit="authUser"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  @apply w-full space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow  sm:max-w-md sm:p-8 md:mt-0 md:space-y-6;
}
</style>
