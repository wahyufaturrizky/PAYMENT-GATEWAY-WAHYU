import React from "react";
import { Platform } from "react-native";

import {
  ListItem,
  Left,
  Button,
  Icon,
  Right,
  Body,
  Text
} from "native-base";

const ListUserRek = (props) => {
  return (
    <ListItem style={{marginBottom: 18}} icon>
      <Left>
        <Button active transparent>
          <Icon active style={{ color: "#4F4F4F", fontSize: 30}} name="card" />
        </Button>
      </Left>

      <Body>
        <Text style={{fontWeight: "bold", color: "#828282"}}>{props.nameUser}</Text>
        <Text style={{fontSize: 14, color: "#BDBDBD"}}>{props.noRekUser}</Text>
      </Body>
      <Right>
        {Platform.OS === "ios" &&
        <Icon active name="arrow-forward" />}
      </Right>
    </ListItem>
  )
}

export default ListUserRek;