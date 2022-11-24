import { View, Text } from "react-native";
import React from "react";

export default function IncomeListHead() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#FAFAFA",
      }}
    >
      <View>
        <Text style={{ fontSize: 15 }}>
          বাকি আদায় <Text style={{ color: "#53B96D", marginLeft: 12 }}>০</Text>
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 15 }}>
          পেমেন্ট দেয়া{" "}
          <Text style={{ color: "#952D2C", marginLeft: 12 }}>০</Text>
        </Text>
      </View>
    </View>
  );
}
