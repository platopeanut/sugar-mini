import {FC, useState} from "react";
import {Button, Input, Text, View} from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import {TodoItem, TodoItemStatus} from "../types";
import {getTodo, postTodo} from "../network";
import {UserType} from "../../../core/SugarUser";

const TodoEdit: FC = () => {
  const [todoItem, setTodoItem] = useState<TodoItem>({
    name: "", deadline: "", status: "Ignore", priority: 0, tag: "", info: "", user: "We"
  });

  useLoad((e) => {
    if (e._id) {
      getTodo(parseInt(e._id)).then(items => {
        if (items.length > 0) { setTodoItem(items[0]); }
      })
    }
  });

  function onSubmit() {
    postTodo(todoItem).then(res => {
      if (res.length > 0) {
        Taro.showToast({icon: "success", title: ""});
        Taro.navigateBack({delta: 1});
      } else {
        Taro.showToast({icon: "error", title: ""});
      }
    })
  }

  return (
    <View>
      <InputItem
        label='Name'
        value={todoItem.name}
        onChange={(v) => { setTodoItem(item => { item.name = v; return item; }) }}
      />
      <InputItem
        label='Tag'
        value={todoItem.tag}
        onChange={(v) => { setTodoItem(item => { item.tag = v; return item; }) }}
      />
      <InputItem
        label='User'
        value={todoItem.user}
        onChange={(v) => { setTodoItem(item => { item.user = v as UserType; return item; }) }}
      />
      <InputItem
        label='DDL'
        value={todoItem.deadline}
        onChange={(v) => { setTodoItem(item => { item.deadline = v; return item; }) }}
      />
      <InputItem
        label='Status'
        value={todoItem.status}
        onChange={(v) => { setTodoItem(item => { item.status = v as TodoItemStatus; return item; }) }}
      />
      <InputItem
        label='LV'
        value={todoItem.priority.toString()}
        onChange={(v) => { setTodoItem(item => { item.priority = parseFloat(v); return item; }) }}
      />
      <InputItem
        label='Info'
        value={todoItem.info}
        onChange={(v) => { setTodoItem(item => { item.info = v; return item; }) }}
      />
      <View style={{
        display: "flex",
        width: "90%",
        margin: "20px auto"
      }}
      >
        <Button
          onClick={() => {onSubmit();}}
          style={{
            backgroundColor: "#67bdde",
            color: "white",
            flex: 1,
            marginRight: "10px"
          }}
        >Submit</Button>
        <Button
          onClick={() => { Taro.navigateBack({delta: 1}); }}
          style={{
            backgroundColor: "#f06c79",
            color: "white",
            flex: 1,
            marginLeft: "10px"
          }}
        >Cancel</Button>
      </View>
    </View>
  );
}

export default TodoEdit;

const InputItem: FC<{
  label: string
  value: string
  onChange: (value: string) => void
}> = (props) => {
  return (
    <View style={{
      display: "flex",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      width: "90%",
      margin: "10px auto",
      height: `${inputItemHeight}px`,
    }}
    >
      <Text style={{
        flex: 0.2,
        lineHeight: `${inputItemHeight}px`,
        textAlign: "center",
        borderRight: "1px solid #eaeaea",
        color: "gray",
      }}
      >{props.label}</Text>
      <Input
        type='text'
        value={props.value}
        onInput={e => { props.onChange(e.detail.value); }}
        style={{
          flex: 0.8,
          height: `${inputItemHeight}px`,
          lineHeight: `${inputItemHeight}px`,
          padding: "0 10px",
        }}
      ></Input>
    </View>
  );
}

const inputItemHeight = 50;
