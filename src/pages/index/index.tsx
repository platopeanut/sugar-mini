import {View, Text, Button} from '@tarojs/components'
import Taro from "@tarojs/taro";

function Index() {
  return (
    <View>
      <Text>Hello, World</Text>
      <Button onClick={() => {
        Taro.navigateTo({
          url: '../curriculum/index'
        }).then()
      }}
      >Click Me</Button>
    </View>
  )
}

export default Index
