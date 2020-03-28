import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";

import FormCairkanKomisi from "./screens/formCairkanKomisi/";
import FormTambahRek from "./screens/formTambahRek/";

const HomeStack = createStackNavigator(
  {
    FormTambahRek: { screen: FormTambahRek },
    FormCairkanKomisi: { screen: FormCairkanKomisi },
  },
  {
    initialRouteName: "FormCairkanKomisi",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(HomeStack);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
