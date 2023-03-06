import {FC} from "react";
import {View} from "@tarojs/components";
import UserIcon from "../../components/UserIcon";
import {UserType} from "../../../core/SugarUser";
import SugarIcon, {SugarIcons} from "../../components/SugarIcon";

const Header: FC<{
  user: UserType
  onSwitchUser: () => void
  tags: string[]
  tagIdx: number
  onTapTag: (idx: number) => void
  onTapUpdate: () => void
  onTapAdd: () => void
}> = (props) => {
  return (
    <View style={{
      width: "100%",
      position: "fixed",
      top: 0,
      zIndex: 10,
      backgroundColor: "white"
    }}
    >
      <View style={{display: "flex"}}>
        <UserIcon user={props.user} onSwitchUser={props.onSwitchUser} style={{flex: 1}} />
        <SugarIcon name={SugarIcons.update} style={{flex: 1}} onTap={props.onTapUpdate} />
        <SugarIcon name={SugarIcons.plus} style={{flex: 1}} onTap={props.onTapAdd} />
      </View>
      <View style={{
        display: "flex",
        padding: "10px",
        paddingBottom: "0px"
      }}
      >
        {
          props.tags.map((tag, index) => {
            return (
              <View
                key='index'
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px",
                  color: props.tagIdx === index ? "#3498db" : "#eaeaea",
                  borderBottom: props.tagIdx === index ? "2px solid #3498db" : "2px solid #eaeaea"
                }}
                onClick={() => { props.onTapTag(index) }}
              >{tag}</View>
            );
          })
        }
      </View>
    </View>
  );
}

export default Header;
