import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function IncomeExpence() {
  return (
    <View style={style.container}>
      <View style={style.card}>
        <View style={style.cardItem}>
          <Text style={style.cardHead1}>
            আজকের বেচা <Text style={{ fontWeight: "bold" }}>০</Text>
          </Text>
          <View style={{ padding: 10 }}>
            <Text>মোট পাবো</Text>
            <Text
              style={{ color: "#952D2C", fontWeight: "bold", fontSize: 20 }}
            >
              ১,১০০
            </Text>
          </View>
        </View>
        <View style={style.cardItem}>
          <Text style={style.cardHead2}>
            বর্তমান ক্যাশ <Text style={{ fontWeight: "bold" }}>০</Text>
          </Text>
          <View style={{ padding: 10 }}>
            <Text>মোট দেবো</Text>
            <Text
              style={{ color: "#53B96D", fontWeight: "bold", fontSize: 20 }}
            >
              ০
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#FEF2F2",
    borderRadius: 10,
  },
  cardItem: {
    flex: 1,
    flexDirection: "column",
  },
  cardHead1: {
    backgroundColor: "#F8DEDF",
    padding: 10,
    borderTopStartRadius: 10,
  },
  cardHead2: {
    backgroundColor: "#F8DEDF",
    padding: 10,
    borderTopEndRadius: 10,
  },
});
