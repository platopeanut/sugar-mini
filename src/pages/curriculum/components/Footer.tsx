import {FC} from "react";
import {View} from "@tarojs/components";

type FooterPropsType = {
  week: number,
  user: string,
  onTapLeft: () => void,
  onTapRight: () => void,
  onTapUser: () => void,
  onTapUpdate: () => void
}

const Footer: FC<FooterPropsType> = (props) => {
  return (
    <View style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: `${FOOTER_HEIGHT}px`,
      boxShadow: "rgba(67, 71, 85, 0.27) 0 0 0.25em, rgba(90, 125, 188, 0.05) 0 0.25em 1em",
      backgroundColor: "white",

      display: "flex",
      flexDirection: "row",
    }}
    >
      <View
        className='at-icon at-icon-chevron-left'
        onClick={props.onTapLeft}
        style={{ flex: 1, textAlign: "center", fontSize: `${ICON_SIZE}px`, height: `${FOOTER_HEIGHT}px`, lineHeight: `${FOOTER_HEIGHT}px` }}
      ></View>
      <View
        onClick={props.onTapUser}
        style={{
        flex: 1,
        textAlign: "center",
        height: `${FOOTER_HEIGHT}px`,
        lineHeight: `${FOOTER_HEIGHT}px`,
        fontSize: `${FONT_SIZE}px`
      }}
      >{props.user}</View>
      <View style={{
        flex: 1,
        textAlign: "center",
        height: `${FOOTER_HEIGHT}px`,
        lineHeight: `${FOOTER_HEIGHT}px`,
        fontSize: `${FONT_SIZE}px`
      }}
      >{props.week}</View>
      <View
        className='at-icon at-icon-reload'
        onClick={props.onTapUpdate}
        style={{ flex: 1, textAlign: "center", fontSize: `${ICON_SIZE}px`, height: `${FOOTER_HEIGHT}px`, lineHeight: `${FOOTER_HEIGHT}px` }}
      ></View>
      <View
        className='at-icon at-icon-chevron-right'
        onClick={props.onTapRight}
        style={{ flex: 1, textAlign: "center", fontSize: `${ICON_SIZE}px`, height: `${FOOTER_HEIGHT}px`, lineHeight: `${FOOTER_HEIGHT}px` }}
      ></View>
    </View>
  )
}

const FOOTER_HEIGHT = 50
const ICON_SIZE = 30
const FONT_SIZE = 18

export default Footer
