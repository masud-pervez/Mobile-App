import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  Addmoney,
  CashOut,
  ColectionIcon,
  Sendmoney,
  Flaxiload,
  Suplier,
  LogoTaly,
} from "../../assets/wallet";

export default function Wallet() {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          elevation: 1,
          backgroundColor: "#fff",
          marginTop: 1,
        }}
      >
        <View>
          <LogoTaly width={130} height={70} />
        </View>
        <View>
          <Text>একাউন্ট ব্যালেন্স</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ColectionIcon />
          <Text style={{ fontWeight: "700", marginBottom: 10, paddingTop: 1 }}>
            কালেকশন
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flaxiload />
          <Text style={{ fontWeight: "700", marginBottom: 10, paddingTop: 1 }}>
            মোবাইল রিচাজ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Suplier />
          <Text style={{ fontWeight: "700", marginBottom: 10, paddingTop: 1 }}>
            সাপ্নায়ার পেমেন্ট
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CashOut />
          <Text style={{ fontWeight: "700", marginBottom: 10, paddingTop: 1 }}>
            মানি আউট
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Addmoney />
          <Text style={{ fontWeight: "700", marginBottom: 10, paddingTop: 1 }}>
            অ্যাড মানি{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 15,
          }}
        >
          <Sendmoney />
          <Text style={{ fontWeight: "700", marginBottom: 10, paddingTop: 1 }}>
            সেন্ড মানি
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
