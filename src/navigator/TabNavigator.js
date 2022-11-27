import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import routes from "../constants/routes";

//?Components
import { Talybook, Wallet, CashBox } from "../screens";
const { CashBox_Tab, Drawer, Wallet_Tab, TalyBook_TAB } = routes;
import { HeaderTitle, HeaderLogo } from "../Components/header";
import StackNavigator from "./StackNavigator";



export default function TabNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === TalyBook_TAB) {
            iconName = focused ? "book" : "book";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === CashBox_Tab) {
            iconName = focused ? "inbox" : "inbox";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === Wallet_Tab) {
            iconName = focused ? "wallet" : "wallet";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === Drawer) {
            iconName = focused ? "menuunfold" : "menufold";
            return (
              <AntDesign
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
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
      <Tab.Screen name={routes.Drawer} component={StackNavigator} />
    </Tab.Navigator>
  );
}
