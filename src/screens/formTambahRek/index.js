import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Form,
  Item,
  Label,
  Input,
  H3,
  ListItem,
  Separator,
  Picker
} from "native-base";

import styles from "./styles";

// Components
import FormFloatingLabel from "../../components/FormFloatingLabel";
import FieldDropdown from "../../components/FieldDropdown";
import ButtonNext from "../../components/ButtonNext";

class FormTambahRek extends Component {

  render() {
    return (
      <Container style={styles.backgroundWhite}>
        <Header style={styles.backgroundWhite}
          androidStatusBarColor="#fff"
          transparent
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("FormCairkanKomisi")}
            >
              <Icon style={{color: "#4F4F4F"}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F", fontWeight: "bold"}}>Rekening Bank</Title>
          </Body>
          
        </Header>

        <Content padder>
          <Form>
            <FormFloatingLabel placeholderText="No. Rekening" />

            <FormFloatingLabel placeholderText="Rek A/N" />

            <Separator style={{backgroundColor: "white"}}/>

            <FieldDropdown />

          </Form>

          <Separator style={{backgroundColor: "white"}}/>

          <ButtonNext textButtonNext="Lanjutkan" />
          
        </Content>
      </Container>
    );
  }
}

export default FormTambahRek;
