import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//?Icons
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//?Components
import HomeC from "./screens/Home/Home";
import DrawerC from "./screens/Drawer/Drawer";
import WalletC from "./screens/Wallet/Wallet";
import IncomeExpencesC from "./screens/IncomeExpences/IncomeExpences";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "book" : "book";
            } else if (route.name === "IncomeEx") {
              iconName = focused ? "inbox" : "inbox";
            } else if (route.name === "Wallet") {
              iconName = focused ? "wallet" : "wallet";
            } else if (route.name === "Drawer") {
              iconName = focused ? "menuunfold" : "menufold";
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          headerTitle: (props) => <HeaderTitle {...props} />,
          headerRight: (props) => <LogoTitle {...props} />,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "#fff",
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#9E1D22",
          tabBarInactiveBackgroundColor: "#B8222B",
          tabBarStyle: {height: 65},
          tabBarLabelStyle: { marginBottom: 15 },
        })}
      >
        <Tab.Screen name="Home" component={HomeC} />
        <Tab.Screen name="IncomeEx" component={IncomeExpencesC} />
        <Tab.Screen name="Wallet" component={WalletC} />
        <Tab.Screen name="Drawer" component={DrawerC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HeaderTitle({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome name="qrcode" size={30} />
      </TouchableOpacity>
      <Text style={{ marginLeft: 10, fontWeight: "700", fontSize: 20 }}>
        Masud Pervez
      </Text>
    </View>
  );
}

function LogoTitle({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          marginRight: 12,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AntDesign name="mail" size={20} />
        <Text>ইনবক্স</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginRight: 12,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AntDesign name="questioncircleo" size={20} />
        <Text>হেল্প</Text>
      </TouchableOpacity>
    </View>
  );
}
