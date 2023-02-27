import React, {FC, useState} from "react";
import {View} from "@tarojs/components";
import sugarUser from "../../core/SugarUser";

type UserBarPropsType = {
  onSwitchUser: () => void;
  style?: React.CSSProperties
}

const UserBar: FC<UserBarPropsType> = (props) => {
  const [user, setUser] = useState(sugarUser.user);
  return (
    <View style={{
      textAlign: "center",
      fontWeight: "bold",
      padding: "10px 20px",
      height: "20px",
      lineHeight: "20px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      ...props.style
    }
    } onClick={() => {
      setUser(sugarUser.switchUser());
      props.onSwitchUser();
    }}
    > {user} </View>
  );
}

export default UserBar;
