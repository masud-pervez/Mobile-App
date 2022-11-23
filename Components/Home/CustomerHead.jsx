import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

export default function CustomerHead() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ color: "#A5A5A5", fontSize: 14 }}>কাস্টমার ১</Text>
        <Text style={{ color: "#A5A5A5", fontSize: 14 }}>সাপ্লায়ার ০</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "75%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#F3F7FA",
            padding: 10,
            borderRadius: 50,
            borderColor: "#EFEFEF",
            borderWidth: "0.5px",
          }}
        >
          <Feather name="download" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FCF0F0",
            paddingHorizontal: 15,
            borderRadius: 20,
            justifyContent: "space-around",
          }}
        >
          <Feather name="bell" color={"#7A3C3C"} size={20} />
          <Text style={{ color: "#7A3C3C", fontWeight: "bold" }}>
            তাগাদা পাঠাই
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: "#943D4D" }}>পাবো </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#44BE65" }}>/ </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: "#44BE65" }}>দেবো</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
