import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function CashboxstatusBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingBottom: 12,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FBE69F",
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderRadius: 20,
          justifyContent: "space-around",
        }}
      >
        <AntDesign name="filetext1" color={"#7A3C3C"} size={20} />
        <Text style={{ color: "#7A3C3C", marginLeft: 5 }}>রিপোর্ট</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#eee",
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
            justifyContent: "space-around",
            marginRight: 10,
          }}
        >
          <AntDesign name="swap" size={20} />
          <Text style={{ marginLeft: 5 }}>ক্যাশবক্স মিলাই</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <AntDesign name="eyeo" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
