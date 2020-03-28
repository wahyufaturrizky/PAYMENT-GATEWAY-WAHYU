import React from "react";

import {
  H3
} from "native-base";

const TextSection = (props) => {
  return (
    <H3 style={{fontWeight: "bold", color: "#4F4F4F"}}>{props.textTitle}</H3>
  )
}

export default TextSection;