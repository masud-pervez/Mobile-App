import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import routes from "../constants/routes";

//?Components
import { Talybook, Drawer, Wallet, CashBox } from "../screens";
const { CashBox_Tab, Drawer_TAB, Wallet_Tab, TalyBook_TAB } = routes;
import { HeaderTitle, HeaderLogo } from "../Components/header";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === TalyBook_TAB) {
            iconName = focused ? "book" : "book";
          } else if (route.name === CashBox_Tab) {
            iconName = focused ? "inbox" : "inbox";
          } else if (route.name === Wallet_Tab) {
            iconName = focused ? "wallet" : "wallet";
          } else if (route.name === Drawer_TAB) {
            iconName = focused ? "menuunfold" : "menufold";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        headerTitle: (props) => <HeaderTitle {...props} />,
        headerRight: (props) => <HeaderLogo {...props} />,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#9E1D22",
        tabBarInactiveBackgroundColor: "#B8222B",
        tabBarStyle: { height: 65 },
        tabBarLabelStyle: { marginBottom: 15 },
      })}
    >
      <Tab.Screen name={routes.TalyBook_TAB} component={Talybook} />
      <Tab.Screen name={routes.CashBox_Tab} component={CashBox} />
      <Tab.Screen name={routes.Wallet_Tab} component={Wallet} />
      {/* <Tab.Screen name={routes.Drawer_TAB} component={DrawerNavigator} /> */}
    </Tab.Navigator>
  );
}
