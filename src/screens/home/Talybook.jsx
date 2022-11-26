import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { AddCustomer, CustomerDetails, CustomerHead, IncomeSheet, SearchBar } from "../../Components";

export default function Talybook() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IncomeSheet />
      <SearchBar />
      <CustomerHead />
      <ScrollView style={{
        backgroundColor: "#fff",
        position: "relative",
        paddingBottom: 70,
      }}>
        <CustomerDetails />
      </ScrollView>
      <AddCustomer />
    </SafeAreaView>
  );
}
