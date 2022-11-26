import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Talybook, Wallet, CashBox } from "../screens";
import routes from "../constants/routes";

const Drawer = createDrawerNavigator();
const { CashBox_DRAWER, TalyBook_DRAWER, Wallet_DRAWER } = routes;

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="TalyBook_DRAWER">
      <Drawer.Screen name={TalyBook_DRAWER} component={Talybook} />
      <Drawer.Screen name={CashBox_DRAWER} component={CashBox} />
      <Drawer.Screen name={Wallet_DRAWER} component={Wallet} />
    </Drawer.Navigator>
  );
}
