import React, {FC} from "react";
import {UserType} from "../../core/SugarUser";
import SugarIcon, {SugarIcons} from "./SugarIcon";

type UserIconPropsType = {
  user: UserType
  onSwitchUser: () => void
  style?: React.CSSProperties
}

const UserIcon: FC<UserIconPropsType> = (props) => {
  return (
    <SugarIcon
      name={props.user === "Li" ? SugarIcons.girl : SugarIcons.boy}
      onTap={props.onSwitchUser}
      style={props.style}
    />
  );
}

export default UserIcon;
