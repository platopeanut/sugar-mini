import {UserType} from "../../core/SugarUser";

export type TodoItemStatus = "Will" | "Now" | "Done" | "Ignore";

export type TodoItem = {
  _id?: number
  name: string
  deadline: string
  status: TodoItemStatus
  priority: number
  tag: string
  info: string
  user: UserType
}

export function getAllTodoItemStatus(): TodoItemStatus[] {
  return ["Will", "Now", "Done", "Ignore"];
}
