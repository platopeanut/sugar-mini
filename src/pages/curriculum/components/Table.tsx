import {FC} from "react";
import {View} from "@tarojs/components";
import {range} from "../../../utils/util";
import {LessonViewItem} from "../type";

type TablePropsType = {
  lessonViewItems : LessonViewItem[],
  onTapItem(lessonViewItem: LessonViewItem): void
}

const Table: FC<TablePropsType> = (props) => {
  console.log(props)
  return (
    <View style={{
      marginTop: "50px",
      display: "flex",
      flexDirection: "row"
    }}
    >
      <TableIndex />
      <View style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(13, 1fr)",
        columnGap: "1px"
      }}
      >
        {
          props.lessonViewItems.map(it =>
            <View key='it' onClick={() => {props.onTapItem(it)}} style={{
              height: `${CELL_HEIGHT * (it.endRow - it.startRow + 1)}px`,
              gridColumn: it.column,
              gridRowStart: it.startRow,
              gridRowEnd: it.endRow + 1,
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              textAlign: "center",
              borderRadius: "5px",
              boxShadow: "rgba(67, 71, 85, 0.27) 0 0 0.25em, rgba(90, 125, 188, 0.05) 0 0.25em 1em",
              backgroundColor: it.color,
              color: "white"
            }}
            >
              <View style={{borderBottom: "2px solid white"}}>{it.classroom}</View>
              <View>{it.lessonName}</View>
            </View>
          )
        }
      </View>
    </View>
  )
}

const TableIndex = () => {
  return (
    <View style={{
      flex: 0.05,
      display: "flex",
      flexDirection: "column",
      boxShadow: "rgba(0, 0, 0, 0.16) 0 1px 4px"
    }}
    >
      {range(1, 13).map(it => <View key={it} style={{
        flex: 1,
        width: "100%",
        height: `${CELL_HEIGHT}px`,
        lineHeight: `${CELL_HEIGHT}px`,
        textAlign: "center"
      }}
      >{it}</View>)}
    </View>
  )
}

const CELL_HEIGHT = 65

export default Table
