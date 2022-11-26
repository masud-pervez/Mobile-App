import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Details() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 12,
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
          paddingVertical: 14,
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
              backgroundColor: "#005A99",
              padding: 15,
              borderRadius: 50,
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              Ru
            </Text>
          </View>
          <Text style={{ fontSize: 18, marginLeft: 10 }}>Ruhits</Text>
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
            style={{ color: "#75463E", fontWeight: "bold", marginRight: 10 }}
          >
            ১১০০.০০
          </Text>
          <MaterialIcons name="arrow-forward-ios" color={"#75463E"} size={12} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
