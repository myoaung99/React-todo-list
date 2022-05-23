import { todoActions } from "./todo-slice";

export const postTodoList = (todo) => {
  return async (dispatch) => {
    const sendHttp = async () => {
      dispatch(todoActions.isLoading(true));

      const response = await fetch(
        "https://react-5826f-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      dispatch(todoActions.isLoading(false));
    };

    try {
      await sendHttp();
    } catch (error) {
      console.error(error.message || "Error");
    }
  };
};

export const fetchTodoList = (transformData) => {
  return async (dispatch) => {
    const sendHttp = async () => {
      dispatch(todoActions.isLoading(true));
      const response = await fetch(
        "https://react-5826f-default-rtdb.firebaseio.com/todos.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch todos");
      }

      dispatch(todoActions.isLoading(false));

      const responseData = await response.json();

      let newTodoArray = [];

      for (const key in responseData) {
        newTodoArray.push({
          ...responseData[key],
        });
      }

      dispatch(todoActions.replace(newTodoArray));
    };

    try {
      await sendHttp();
    } catch (error) {
      console.error(error.message || "Something went wrong.");
    }
  };
};
