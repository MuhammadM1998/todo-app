export const useUsersStore = defineStore('users', {
  state: () => ({
    activeUser: null,
    activeUserHeader: null,
    isUserAuthenticated: false
  }),

  persist: true,

  getters: {
    getActiveUser: state => state.activeUser,
    getActiveUserHeader: state => state.activeUserHeader,
    getAuthState: state => state.isUserAuthenticated
  },

  actions: {
    setActiveUser(user) {
      this.activeUser = user;
    },
    setActiveUserHeader(authHeader) {
      this.activeUserHeader = authHeader;
    },
    setAuthState(authValue) {
      this.isUserAuthenticated = authValue;
    },

    loginUser(user, authHeader) {
      this.activeUser = user;
      this.activeUserHeader = authHeader;
      this.isUserAuthenticated = true;
    },

    logoutUser() {
      this.activeUser = null;
      this.activeUserHeader = null;
      this.isUserAuthenticated = false;
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
