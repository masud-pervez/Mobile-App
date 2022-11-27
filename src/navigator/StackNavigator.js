import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BackupData,
  BuyMessage,
  CashReports,
  DueReports,
  ExpenceReports,
  InchargeHeadReports,
  Refear,
  SellBuyReports,
  SendingReports,
  Settings,
} from "../Components";
import routes from "../constants/routes";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.BackupData} component={BackupData} />
      <Stack.Screen name={routes.Buy_Message} component={BuyMessage} />
      <Stack.Screen name={routes.Cash_Reports} component={CashReports} />
      <Stack.Screen name={routes.Due_Reports} component={DueReports} />
      <Stack.Screen name={routes.Expence_Reports} component={ExpenceReports} />
      <Stack.Screen name={routes.Refearal} component={Refear} />
      <Stack.Screen name={routes.SellBuy_Reports} component={SellBuyReports} />
      <Stack.Screen name={routes.Sending_Reports} component={SendingReports} />
      <Stack.Screen name={routes.Settings_Label} component={Settings} />
      <Stack.Screen
        name={routes.InchargeHead_Reports}
        component={InchargeHeadReports}
      />
    </Stack.Navigator>
  );
}
