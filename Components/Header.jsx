import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Header() {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingStart: 10,
        paddingEnd: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          padding: 10,
        }}
      >
        <FontAwesome name="qrcode" size={30} />
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
          MASUD PERVEZ
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity style={{ textAlign: "center" }}>
          <AntDesign name="mail" size={20} />
          <Text style={{ fontWeight: "bold", alignItems: "center" }}>
            ইনবক্স
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ textAlign: "center" }}>
          <AntDesign name="questioncircleo" size={20} />
          <Text style={{ fontWeight: "bold", alignItems: "center" }}>
            হেল্প
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
