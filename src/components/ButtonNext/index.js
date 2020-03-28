import React from "react";

import {
  Button,
  Text,
  Right,
  Icon,
  Left,
  Body
} from "native-base";

const ButtonNext = (props) => {
  return (
    <Button full rounded style={{backgroundColor: "#94ACF6",}}>
      <Left />
      <Body>
        <Text style={{color: "#fff"}}>{props.textButtonNext}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon style={{color: "#fff"}} active name="arrow-forward" />
        </Button>
      </Right>
    </Button>
  )
}

export default ButtonNext;