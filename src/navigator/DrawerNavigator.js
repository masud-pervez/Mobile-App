import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import CustomDrawer from "./CustomDrawer";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStatusBarAnimation: "fade",
        drawerLabelStyle: {
          marginRight: -25,
        },
      }}
    >
      <Drawer.Screen name="tab" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
