import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import CustomerDetails from "../../Components/Home/CustomerDetails";
import CustomerHead from "../../Components/Home/CustomerHead";
import IncomeSheet from "../../Components/Home/IncomeSheet";
import SearchBar from "../../Components/Home/SearchBar";
import AddCustomer from "../../Components/Home/AddCustomer";

export default function Home({navigation}) {
  // console.log(navigation);
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
      <AddCustomer props={navigation}/>
    </SafeAreaView>
  );
}
