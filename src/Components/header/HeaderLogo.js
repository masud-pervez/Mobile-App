import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

//?Icons
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HeaderLogo() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          marginRight: 12,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AntDesign name="mail" size={20} />
        <Text>ইনবক্স</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginRight: 12,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AntDesign name="questioncircleo" size={20} />
        <Text>হেল্প</Text>
      </TouchableOpacity>
    </View>
  );
}
