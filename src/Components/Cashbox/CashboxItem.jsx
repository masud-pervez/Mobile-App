import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { IncomeIn, IncomeOut } from "../../assets/wallet";

export default function CashboxItem({ data }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          borderBottomWidth: 0.7,
          borderBottomColor: "#C5C5C5",
          borderStyle: "dashed",
          alignItems: "center",
          paddingVertical: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "50%",
          }}
        >
          <View
            style={{
              backgroundColor: `${data.iconcolor}`,
              padding: 12,
              borderRadius: 50,
            }}
          >
            {data.credit ? <IncomeIn /> : <IncomeOut />}
          </View>
          <Text style={{ fontSize: 18, marginLeft: 10 }}>{data.title}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "50%",
          }}
        >
          <Text
            style={{ color: data.color, fontWeight: "bold", marginRight: 10 }}
          >
            {data.amount === 0 ? "০.০০" : data.amount}
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
