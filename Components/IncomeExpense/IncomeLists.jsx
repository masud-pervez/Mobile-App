import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import IncomeItem from "./IncomeItem";

export default function IncomeLists() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <IncomeItem key={item.id} data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const data = [

  {
    id: 1,
    title: "ক্যাশ বেচা",
    amount: 0.0,
    iconcolor: "#DCF3E1",
    color: "#52C066",
  },
  {
    id: 2,
    title: "ক্যাশ কেনা",
    amount: "১,১০০",
    iconcolor: "#F6B6BD",
    color: "#A6293E",
  },
  {
    id: 3,
    title: "খরচ",
    amount: 0.0,
    iconcolor: "#F6B6BD",
    color: "#A6293E",
  },
  {
    id: 4,
    title: "মালিক দিল",
    amount: 0.0,
    iconcolor: "#DCF3E1",
    color: "#52C066",
  },
  {
    id: 5,
    title: "মালিক নিল",
    amount: 0.0,
    iconcolor: "#F6B6BD",
    color: "#A6293E",
  },
];
