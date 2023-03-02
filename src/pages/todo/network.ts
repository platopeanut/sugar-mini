import {sugarRequest} from "../../core/network";
import {TodoItem} from "./types";

export async function getAllTodo() {
  return await sugarRequest<TodoItem[]>("/todo", "GET");
}

export async function postTodo(todoItem: TodoItem) {
  return await sugarRequest<TodoItem[]>("/todo", "POST", todoItem);
}
