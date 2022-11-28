import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import routes from "../../constants/routes";

export default function AddCustomer({ props }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginVertical: 30,
        position: "absolute",
        right: 25,
        bottom: 0,
        top: "85%",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.AddCustomer)}
        activeOpacity={0.8}
        style={{
          backgroundColor: "#B8222B",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons color={"#fff"} name="md-person-add-outline" size={22} />
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          কাস্টমার যোগ করি
        </Text>
      </TouchableOpacity>
    </View>
  );
}
