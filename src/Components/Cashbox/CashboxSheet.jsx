import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CashboxSheet() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardItem2}>
          <View style={styles.body}>
            <View style={{ padding: 10 }}>
              <Text style={{color:"#837247"}}>আজকের বেচা</Text>
              <Text
                style={{
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
          <Text 
            style={{
              color: "#F2C880",
              fontSize: 20,
              fontWeight: "300",
              marginTop: 15,
              // marginRight: ,
            }}
          >
            |
          </Text>
          <View style={styles.body}>
            <View
              style={{
                padding: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text>বর্তমান ক্যাশ</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                ৪০০
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardItem1}>
          <View style={styles.header}>
            <Text>আজকে পেলাম</Text>
            <Text style={{color:"#53B96D",marginLeft: 7, fontWeight: "900" }}>০</Text>
          </View>
          <Text style={{ color: "#F2C880", fontSize: 20, fontWeight: "900" }}>
            |
          </Text>
          <View style={styles.header}>
            <Text>আজকে দিলাম</Text>
            <Text style={{ color: "#952D2C",marginLeft: 7, fontWeight: "900" }}>০</Text>
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
    backgroundColor: "#FCE5A2",
    borderRadius: 10,
    width: "100%",
  },
  cardItem1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#FCF6D6",
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
