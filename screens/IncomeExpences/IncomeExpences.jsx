import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import IncomeListHead from "../../Components/IncomeExpense/IncomeListHead";
import IncomeLists from "../../Components/IncomeExpense/IncomeLists";
import IncomeSheet from "../../Components/IncomeExpense/IncomeSheet";
import StatusBar from "../../Components/IncomeExpense/StatusBar";

export default function IncomeExpences() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <IncomeSheet />
      <StatusBar />
      <IncomeListHead />
      <IncomeLists />
    </SafeAreaView>
  );
}
