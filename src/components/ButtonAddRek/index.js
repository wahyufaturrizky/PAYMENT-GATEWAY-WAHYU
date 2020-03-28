import React from "react";

import {
  Button,
  Text,
  Right,
  Icon
} from "native-base";

const ButtonAddRek = (props) => {
  return (
    <Button full style={{backgroundColor: "#fff"}} 
      onPress={props.openFormAddRek}
    >
      <Icon style={{color: "#4F4F4F"}} active name="add" />
      <Text style={{color: "#828282"}}>{props.textAddRek}</Text>
      <Right />
    </Button>
  )
}

export default ButtonAddRek;