import {View} from '@tarojs/components'
import CardItem from "./components/CardItem"
import bgImageBase64 from "../../images/bgImage";

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
    path: '../curriculum/index'
  },
  {
    iconPath: 'clock',
    color: '#67bdde',
    name: '安排',
    path: '../plan/index'
  }
]

function Index() {
  // Taro.request({
  //   url: "http://platopeanut.top:9999/msg/all",
  //   method: "GET",
  //   success: (res) => {
  //     console.log(res)
  //   }
  // })
  return (
    <View style={{
      backgroundImage: `url(${bgImageBase64})`,
      backgroundSize: "cover",
      height: "700px",
    }}
    >
      <View style={{width: "100%", height: "100px"}}></View>
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
    </View>
  )
}


export default Index
