import { View, Text } from 'react-native'
import React from 'react'

export default function HeaderTitle() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome name="qrcode" size={30} />
      </TouchableOpacity>
      <Text style={{ marginLeft: 10, fontWeight: "700", fontSize: 20 }}>
        Masud Pervez
      </Text>
    </View>
  )
}