const endpoint = 'http://localhost:4000/todos';

export default function () {
  return {
    getUserTodos: async (userAuthHeader) => {
      const options = {
        headers: { Authorization: userAuthHeader }
      };

      const {
        data: todos,
        pending,
        error,
        refresh
      } = await useFetch(endpoint, options);
      return { todos, refresh };
    },

    createNewTodo: async (todo, userAuthHeader) => {
      const options = {
        body: { task: todo },
        method: 'POST',
        headers: { Authorization: userAuthHeader }
      };

      return await useFetch(`${endpoint}`, options);
    },

    toggleTodoCompletion: async (todoID, userAuthHeader) => {
      const options = {
        method: 'PUT',
        headers: { Authorization: userAuthHeader }
      };

      return await useFetch(`${endpoint}/${todoID}`, options);
    },

    deleteTodo: async (todoID, userAuthHeader) => {
      const options = {
        method: 'DELETE',
        headers: { Authorization: userAuthHeader }
      };

      return await useFetch(`${endpoint}/${todoID}`, options);
    }
  };
}
