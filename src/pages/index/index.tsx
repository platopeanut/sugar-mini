import {Button, View} from '@tarojs/components'
import CardItem from "./components/CardItem"
import bgImageBase64 from "../../images/bgImage";
import MsgCard from "./components/MsgCard";
import {clearAllStorage, printAllStorage} from "../../core/storage";

type CardItemConfig = {
  iconPath: string
  color: string
  name: string
  path: string
}

const cardItemsConfig: CardItemConfig[] = [
  {
    iconPath: 'calendar',
    color: '#f06c79',
    name: '课表',
    path: '../course/index'
  },
  {
    iconPath: 'clock',
    color: '#67bdde',
    name: '安排',
    path: '../plan/index'
  }
]

function Index() {
  printAllStorage();
  return (
    <View style={{
      backgroundImage: `url(${bgImageBase64})`,
      backgroundSize: "cover",
      height: "700px",
    }}
    >
      <MsgCard />
      <View style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "90%",
      }}
      >{
        cardItemsConfig.map((it, index) =>
          <CardItem
            key='it'
            iconPath={it.iconPath}
            color={it.color}
            name={it.name}
            path={it.path}
            row={Math.trunc(index / 2) + 1}
            column={index % 2 + 1}
          />
        )
      }
      </View>
      <Button onClick={()=>clearAllStorage()}>清除缓存</Button>
    </View>
  )
}


export default Index
