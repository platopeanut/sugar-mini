import {FC} from "react";
import {View} from "@tarojs/components";
import SugarIcon, {SugarIcons} from "../../components/SugarIcon";
import UserIcon from "../../components/UserIcon";
import {UserType} from "../../../core/SugarUser";

type FooterPropsType = {
  week: number,
  user: UserType,
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
      boxShadow: "rgba(67, 71, 85, 0.27) 0 0 0.25em, rgba(90, 125, 188, 0.05) 0 0.25em 1em",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
    }}
    >
      <SugarIcon name={SugarIcons.left} onTap={props.onTapLeft} style={{ flex: 1}} />
      <UserIcon user={props.user} onSwitchUser={props.onTapUser} style={{flex: 1}} />
      <View style={{
        flex: 1,
        textAlign: "center",
        height: `${FOOTER_HEIGHT}px`,
        lineHeight: `${FOOTER_HEIGHT}px`,
        fontSize: `${FONT_SIZE}px`
      }}
      >{props.week}</View>
      <SugarIcon name={SugarIcons.update} onTap={props.onTapUpdate} style={{ flex: 1}} />
      <SugarIcon name={SugarIcons.right} onTap={props.onTapRight} style={{ flex: 1}} />
    </View>
  )
}

const FOOTER_HEIGHT = 50
const FONT_SIZE = 18

export default Footer
