import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  CashboxSheet,
  CashboxstatusBar,
  CustomerHead,
  CashboxLists,
} from "../../Components";

export default function CashBox() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CashboxSheet />
      <CashboxstatusBar />
      <CustomerHead />
      <CashboxLists />
    </SafeAreaView>
  );
}
