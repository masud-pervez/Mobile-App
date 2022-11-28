import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//?Icons
import AntDesign from "react-native-vector-icons/AntDesign";
import routes from "../../constants/routes";

export default function HeaderLogo() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.Inbox)}
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
        onPress={() => navigation.navigate(routes.Help)}
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
