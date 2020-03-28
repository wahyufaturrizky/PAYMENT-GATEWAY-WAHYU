import React from "react";

import {
  Item,
  Label,
  Input,
} from "native-base";

const FormFloatingLabel = (props) => {
  return (
    <Item floatingLabel>
      <Label style={{color: "#BDBDBD"}}>{props.placeholderText}</Label>
      <Input />
    </Item>
  )
}

export default FormFloatingLabel;