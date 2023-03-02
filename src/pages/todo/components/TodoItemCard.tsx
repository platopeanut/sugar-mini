import {FC, useState} from "react";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import {getAllTodoItemStatus, TodoItem, TodoItemStatus} from "../types";

const TodoItemCard: FC<{
  todoItem: TodoItem
  onChangeStatus: (status: TodoItemStatus) => void
}> = (props) => {
  const statusList = getAllTodoItemStatus();
  let index = -1;
  statusList.forEach((status, idx) => {
    if (status === props.todoItem.status) {
      statusList[idx] += ' (Curr) ';
      index = idx;
    }
  })

  const [isFold, setIsFold] = useState(true);

  return (
    <View style={{
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      width: "80%",
      margin: "20px auto",
      borderRadius: "5px",
    }}
    >
      <TodoItemHeader
        name={props.todoItem.name}
        status={props.todoItem.status}
        onTapDetail={() => setIsFold(prevState => !prevState)}
        onTapStatus={() => {
          Taro.showActionSheet({
            itemList: statusList,
            success: function (res) {
              if (res.tapIndex === index) return;
              props.onChangeStatus(statusList[res.tapIndex]);
            }
          })
        }}
      />
      {
        isFold ? (<View></View>) : (<View style={{paddingBottom: "10px"}}>
          <TodoInfoItem label='Deadline' value={props.todoItem.deadline} />
          <TodoInfoItem label='Priority' value={props.todoItem.priority.toString()} />
          <TodoInfoItem label='User' value={props.todoItem.user} />
          <TodoInfoItem label='Info' value={props.todoItem.info} />
        </View>)
      }
    </View>
  );
}

export default TodoItemCard;

const TodoItemHeader: FC<{
  name: string
  status: TodoItemStatus
  onTapDetail: () => void
  onTapStatus: () => void
}> = (props) => {
  return (
    <View
      style={{
        display: "flex",
        height: "20px",
        borderBottom: "1px solid #eaeaea",
        padding: "20px",
      }}
    >
      <View style={{ textAlign: "left", flex: 1 }} onClick={props.onTapDetail}>{props.name}</View>
      <View
        onClick={props.onTapStatus}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "10px",
          backgroundColor: getStatusColor(props.status)
        }}
      ></View>
    </View>
  );
}

const TodoInfoItem: FC<{
  label: string
  value: string
}> = (props) => {
  return (
    <View style={{display: "flex", width: "90%", margin: "10px auto"}}>
      <View style={{flex: 0.3, color: "gray", textAlign: "left"}}>{props.label}</View>
      <View style={{flex: 0.7, textAlign: "right"}}>{props.value}</View>
    </View>
  );
}

function getStatusColor(status: TodoItemStatus) {
  if (status === "Will") return "#009432";
  if (status === "Done") return "#ff6348";
  if (status === "Now") return "#1289A7";
  if (status === "Ignore") return "#a4b0be";
}
