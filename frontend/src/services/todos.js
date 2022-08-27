import { TodoItem } from "../components/TodoItem";

const API_URL = "http://127.0.0.1:8000/api";

export async function getAllTodos() {
  try {
    const response = await fetch(`${API_URL}/todos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function createTodo(todo) {
  console.log(JSON.stringify(todo));
  const payload = JSON.stringify(todo);
  try {
    const response = await fetch(`${API_URL}/todos/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": window.CSRF_TOKEN,
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await response.json();
    return data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTodo(todo) {
  try {
    const response = await fetch(`${API_URL}/todos/` + todo.id, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": window.CSRF_TOKEN,
      },
    });
    const data = await response.json();
    return data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
