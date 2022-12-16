export default defineNuxtRouteMiddleware(to => {
  const isUserAuthenticated = useUsersStore().getAuthState;

  if (to.name === 'dashboard' && !isUserAuthenticated)
    return navigateTo('/login');
});
