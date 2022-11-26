import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function IncomeSheet() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardItem1}>
          <View style={styles.header}>
            <Text>আজকের বেচা</Text>
            <Text style={{ marginLeft: 7, fontWeight: "900" }}>০</Text>
          </View>
          <Text style={{ color: "#F1D7D8", fontSize: 30, fontWeight: "900" }}>
            |
          </Text>
          <View style={styles.header}>
            <Text>বর্তমান ক্যাশ</Text>
            <Text style={{ marginLeft: 7, fontWeight: "900" }}>৪০০</Text>
          </View>
        </View>

        <View style={styles.cardItem2}>
          <View style={styles.body}>
            <View style={{ padding: 10 }}>
              <Text>মোট পাবো</Text>
              <Text
                style={{
                  color: "#952D2C",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                ১,১০০
              </Text>
            </View>
          </View>
          {/* <Text
            style={{
              color: "#F1D7D8",
              fontSize: 30,
              fontWeight: "300",
              marginTop: 15,
              marginRight: 1,
            }}
          >
            |
          </Text> */}
          <View style={styles.body}>
            <View
              style={{
                padding: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text>মোট দেবো</Text>
              <Text
                style={{
                  color: "#53B96D",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                ০
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 1,
    padding: 15,
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FEF2F2",
    borderRadius: 10,
    width: "100%",
  },
  cardItem1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#F8DEDF",
  },
  header: {
    padding: 10,
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardItem2: {
    flexDirection: "row",
    width: "100%",
  },
  body: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
