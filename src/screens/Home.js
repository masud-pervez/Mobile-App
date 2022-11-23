import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Flatlist,
  Button,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Home() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggle, settoggle] = useState(true);
  const [edited, setEdited] = useState(null);

  const handleChange = (text) => {
    setValue(text);
  };

  const handleAdd = (event) => {
    const maxId =
      todos.length < 1 ? 0 : Math.max(...[...todos].map((item) => item.id));

    if (!toggle) {
      setTodos(
        todos.filter((elem, idx) => {
          if (idx === edited) {
            return (elem.text = value);
          }
          return elem;
        })
      );
      setValue("");
    } else {
      if (value !== "") {
        setTodos([...todos, { id: maxId + 1, text: value }]);
      }
      setValue("");
    }
    settoggle(true);
    event.preventDefault();
  };

  const handleDelete = (id) => {
    const newItems = todos.filter((item, index) => id !== index);
    setTodos(newItems);
  };

  const handleEdit = (id) => {
    const newItems = todos.find((item, index) => id === index);
    setValue(newItems.text);
    settoggle(false);
    setEdited(id);
  };

  return (
    <View style={Styles.screen}>
      <View
        style={{
          backgroundColor: "#FFF",
          padding: 20,
          width: "90%",
          borderRadius: 12,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Add Todo
            <Ionicons name="md-checkmark-circle" size={25} color="#0093E9" />
          </Text>
        </View>
        <View
          style={{
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextInput
            value={value}
            onChangeText={handleChange}
            style={{
              flex: 1,
              padding: 10,
              color: "gray",
              focus: {
                outLine: "none",
                border: "none",
              },
            }}
            placeholder="Todo Text"
          />
          {toggle ? (
            <Button onPress={handleAdd} title="Add"></Button>
          ) : (
            <Button onPress={handleAdd} title="Edit"></Button>
          )}
        </View>
        <View style={{ marginTop: 16, maxHeight: 200 }}>
          <ScrollView>
            {todos.length > 0 ? (
              <View>
                {todos.map((item, idx) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        marginTop: 2,
                        fontSize: 12,
                        backgroundColor: "#85FFBD",
                        padding: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: 5,
                        height: "auto",
                      }}
                    >
                      <Text style={{ height: "auto" }}>
                        <Text style={{ fontWeight: "bold", color: "red" }}>
                          {idx + 1}.
                        </Text>{" "}
                        {item.text}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button onPress={() => handleDelete(idx)} title="Del" />
                        <Button onPress={() => handleEdit(idx)} title="Edit" />
                      </View>
                    </View>
                  );
                })}
              </View>
            ) : (
              <Text style={{textAlign:"center"}}>No data</Text>
              // <Image source={image} style={Styles.image} />
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#21D4FD",
    backgroundImage: "linear-gradient(19deg, #B721FF 0%, #21D4FD 100%)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
// background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
