<script setup>
// Fetching active user to display name and avatar
const usersStore = useUsersStore();
const user = usersStore.getActiveUser;

const logout = async () => {
  // Deleting user credentials from store
  usersStore.logoutUser();

  // Navigating to login page
  return await navigateTo('/login');
};
</script>

<template>
  <nav class="flex items-center justify-between gap-2">
    <div class="flex items-center gap-2" v-if="user">
      <img :src="user.avatar" alt="" loading="lazy" class="h-8 w-8" />
      <p>{{ user.name }}</p>
    </div>

    <NuxtLink @click.prevent="logout" class="button"> Logout </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.button {
  @apply rounded-lg bg-red-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-4;
}
</style>
