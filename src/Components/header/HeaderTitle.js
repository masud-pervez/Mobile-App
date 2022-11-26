import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

//?Icons
import { Logo } from "../../assets/wallet";

export default function HeaderTitle() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity activeOpacity={0.5}>
        <Logo />
      </TouchableOpacity>
      <Text style={{ marginLeft: 10, fontWeight: "700", fontSize: 20 }}>
        Masud Pervez
      </Text>
    </View>
  )
}
