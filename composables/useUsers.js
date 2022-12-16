const endpoint = 'http://localhost:4000';

export default function () {
  return {
    fetchAll: async () => {
      const { data } = await useFetch(`${endpoint}/users`);
      return data;
    },

    generateBasicAuthHeader: (username, password) => {
      const base64Credentials = btoa(`${username}:${password}`);
      return `Basic ${base64Credentials}`;
    },

    // Used to auth at login page instead of dashboard page for a better UX. Also it makes more sense to me this way
    auth: async basicAuthHeader => {
      const config = {
        headers: { Authorization: basicAuthHeader }
      };

      const { data } = await useFetch(`${endpoint}/todos`, config);
      if (!data.value) return false;
      return true;
    }
  };
}
