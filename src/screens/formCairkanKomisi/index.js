import React, { Component } from "react";
import { Platform } from "react-native";

// React Native Base
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  ListItem,
  Separator,
  Form
} from "native-base";

// Styles
import styles from "./styles";

// Components
import FormFloatingLabel from "../../components/FormFloatingLabel";
import TextSection from "../../components/TextSection";
import ButtonAddRek from "../../components/ButtonAddRek";
import ListUserRek from "../../components/ListUserRek";
import ButtonNext from "../../components/ButtonNext";

class FormCairkanKomisi extends Component {
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
            >
              <Icon style={{color: "#4F4F4F"}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#4F4F4F", fontWeight: "bold"}}>Cairkan Komisi</Title>
          </Body>
          
        </Header>

        <Content padder>

          <Form>
            <FormFloatingLabel placeholderText="Masukkan Jumlah Amount" />
          </Form>


          <Separator style={{backgroundColor: "white"}}/>

          <TextSection textTitle="Transfer ke" />

          <Separator style={{backgroundColor: "white"}}/>

          <ButtonAddRek openFormAddRek={()=> this.props.navigation.navigate("FormTambahRek")} textAddRek="Tambah Rekening" />

          <Separator style={{backgroundColor: "white"}}/>

          <ListUserRek nameUser="Wahyu Fatur Rizki (Mandiri)" noRekUser="No.Rek: 0123456789010" />

          <ListUserRek nameUser="Rizky Triana (BCA)" noRekUser="No.Rek: 534535345353454" />

          <ListUserRek nameUser="Christian Widjaya (BNI)" noRekUser="No.Rek: 3453534909090" />

          <Separator style={{backgroundColor: "white"}}/>

          <ButtonNext textButtonNext="Lanjutkan" />
          
        </Content>
      </Container>
    );
  }
}

export default FormCairkanKomisi;
