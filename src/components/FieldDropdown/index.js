import React, { Component } from "react";

import {
  Item,
  Picker,
  Icon
} from "native-base";

class FieldDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {

    return (
      <Item picker>
        <Picker mode="dropdown" iosIcon={<Icon name="ios-arrow-down" />}
        style={{ width: undefined }}
        placeholder="Select your SIM"
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        selectedValue={this.state.selected2}
        onValueChange={this.onValueChange2.bind(this)}
        >
        <Item style={{color: "#BDBDBD"}} label="Nama Bank" value="key0" />
        <Item label="Bank Mandiri" value="key1" />
        <Item label="Bank BCA" value="key2" />
        <Item label="Bank Danamon" value="key3" />
        <Item label="Bank BNI" value="key4" />
        <Item label="Bank BRI" value="key5" />
        </Picker>
      </Item>
    )
  }
}

export default FieldDropdown;