import {FC, useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import {getAllTodo, postTodo} from "./network";
import TodoItemCard from "./components/TodoItemCard";
import {TodoItem} from "./types";
import Header from "./components/Header";
import sugarUser from "../../core/SugarUser";

const Todo: FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [user, setUser] = useState(sugarUser.user);
  function update() {
    Taro.showLoading();
    getAllTodo().then(items => {
      setTodoItems(items);
      Taro.hideLoading();
    });
  }
  useEffect(() => { update() }, []);

  const [currTodoItems, setCurrTodoItems] = useState<TodoItem[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagIdx, setTagIdx] = useState(0);

  useEffect(() => {
    const currTags = getTodoItemsTags(todoItems.filter(it => it.user === user));
    setCurrTodoItems(todoItems.filter(it => it.tag === currTags[tagIdx]));
    setTags(currTags);
  }, [todoItems, user, tagIdx]);

  return (
    <View>
      <Header
        user={user}
        onSwitchUser={() => { setUser(sugarUser.switchUser(true)) }}
        tags={tags} tagIdx={tagIdx} onTapTag={idx => setTagIdx(idx)}
        onTapUpdate={() => {
          update();
          Taro.showToast({ title: "更新成功", icon: "success" });
        }}
      />
      <View style={{marginTop: "100px"}}>
        {
          currTodoItems.map(it => <TodoItemCard
            key='it'
            todoItem={it}
            onChangeStatus={(status) => {
              it.status = status;
              postTodo(it).then(items => setTodoItems(items));
            }}
          />)
        }
      </View>
      <View style={{height: "50px"}}></View>
    </View>
  );
}

export default Todo;

function getTodoItemsTags(todoItems: TodoItem[]): string[] {
  const tags: string[] = [];
  todoItems.forEach(it => { if (!tags.includes(it.tag)) tags.push(it.tag); });
  return tags;
}
