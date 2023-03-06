import {sugarRequest} from "../../core/network";
import {TodoItem} from "./types";
import {UserType} from "../../core/SugarUser";

export async function getAllTodo() {
  return await sugarRequest<TodoItem[]>("/todo", "GET");
}

export async function getTodo(_id: number) {
  return await sugarRequest<TodoItem[]>("/todo/" + _id, "GET");
}

export async function postTodo(todoItem: TodoItem) {
  return await sugarRequest<TodoItem[]>("/todo", "POST", todoItem);
}

export async function deleteTodo(_id: number) {
  return await sugarRequest<TodoItem[]>("/todo/delete", "POST", {_id: _id});
}

export async function getUserTags(user: UserType) {
  return await sugarRequest<string[]>("/todo/tags/" + user, "GET");
}
