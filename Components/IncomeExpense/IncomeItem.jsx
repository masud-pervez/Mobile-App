import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function IncomeItem({ data }) {
  console.log(data);
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
            <FontAwesome5
              name="hand-holding-water"
              color={data.color}
              size={25}
            />
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
