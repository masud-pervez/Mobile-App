import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Footer() {
  const [activeTab, setActiveTab] = useState("টালি");
  // console.log(activeTab);
  return (
    <View
      style={{
        backgroundColor: "#B8222B",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
      }}
    >
      <HeaderButton
        title="টালি"
        icon="book"
        rightBorder={25}
        leftBorder={0}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="ক্যাশবক্স"
        icon="inbox"
        rightBorder={0}
        leftBorder={0}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="ওয়ালেট"
        rightBorder={0}
        leftBorder={0}
        icon="wallet"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="মেন্যু"
        rightBorder={0}
        leftBorder={25}
        icon="menufold"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  //return console.log(props)
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.title)}
    style={{
      textAlign: "center",
      width: "25%",
      paddingVertical: 10,
      borderTopRightRadius: props.leftBorder,
      borderTopLeftRadius: props.rightBorder,
      overflow: "hidden",
      transition: 'all 0.3s',
      borderBottomColor: props.activeTab === props.title ? "#DFA8A4" : null,
      borderBottomWidth: props.activeTab === props.title ? 5 : null,
      backgroundColor: props.activeTab === props.title ? "#9E1D22" : "#B8222B",
    }}
  >
    <AntDesign color={"#fff"} name={props.icon} size={23} />
    <Text style={{ color: "#fff", marginTop: 3 }}>{props.title}</Text>
  </TouchableOpacity>
);
