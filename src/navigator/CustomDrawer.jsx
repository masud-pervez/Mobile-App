import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

import { Text, View } from "react-native";
import routes from "../constants/routes";
import { useNavigation } from "@react-navigation/native";
import { LogoTaly } from "../assets/wallet";

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 20,
          justifyContent: "space-around",
          alignItems: "center",
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
            MP
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "800" }}>Masud Pervez</Text>
          <Text>+8801783307711</Text>
        </View>
        <View>
          <Icons name="pencil-outline" size={32} />
        </View>
      </View>

      <View style={{ marginLeft: 6 }}>
        <Text
          style={{
            padding: 16,
            paddingBottom: 0,
            color: "#8D3434",
            fontSize: 16,
          }}
        >
          {routes.Reports_Title}
        </Text>
        <DrawerItem
          label={routes.SellBuy_Reports}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <Icons name="tag-multiple-outline" size={20} />}
          onPress={() => navigation.navigate(routes.SellBuy_Reports)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.Expence_Reports}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <Icons name="archive-arrow-up-outline" size={20} />}
          onPress={() => navigation.navigate(routes.Expence_Reports)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.Due_Reports}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <Icons name="book-outline" size={20} />}
          onPress={() => navigation.navigate(routes.Due_Reports)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.Cash_Reports}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <AntDesign name="inbox" size={20} />}
          onPress={() => navigation.navigate(routes.Cash_Reports)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.InchargeHead_Reports}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <FontAwesome name="user-o" size={20} />}
          onPress={() => navigation.navigate(routes.InchargeHead_Reports)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
      </View>

      <View style={{ marginLeft: 6 }}>
        <Text
          style={{
            padding: 16,
            paddingBottom: 0,
            color: "#8D3434",
            fontSize: 16,
          }}
        >
          {routes.Others}
        </Text>
        <DrawerItem
          label={routes.BackupData}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <Entypo name="back-in-time" size={20} />}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
          onPress={() => navigation.navigate(routes.BackupData)}
        />
        <DrawerItem
          label={routes.Sending_Reports}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <AntDesign name="bells" size={20} />}
          onPress={() => navigation.navigate(routes.Sending_Reports)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.Buy_Message}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <AntDesign name="message1" size={20} />}
          onPress={() => navigation.navigate(routes.Buy_Message)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.Settings_Label}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <AntDesign name="setting" size={20} />}
          onPress={() => navigation.navigate(routes.Settings_Label)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.Refearal}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <AntDesign name="sharealt" size={20} />}
          onPress={() => navigation.navigate(routes.Refearal)}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
        <DrawerItem
          label={routes.LogOut}
          labelStyle={{
            marginLeft: -25,
          }}
          icon={() => <AntDesign name="logout" size={20} />}
          style={{
            paddingVertical: 0,
            marginBottom: 0,
          }}
        />
      </View>

      <View
        style={{
          marginTop: 80,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 22,
        }}
      >
        <Text>
          <LogoTaly />
        </Text>
        <Text>{routes.Verson}</Text>
      </View>
    </DrawerContentScrollView>
  );
}
