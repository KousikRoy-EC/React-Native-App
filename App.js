import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default function App() {

  const [Goals, setGoals] = useState(["DSA revision", "React native Learning"]);
  const [text, onChangeText] = useState("");

  function onAdd() {
    setGoals((prev) => {
      return [...prev, text];
    })
    onChangeText("");
  }

  function onChange(e) {
    onChangeText(e);
  }

  function deleteThis(id) {

    setGoals(prevGoals => {
      return prevGoals.filter((GoalItem, index) => {
        return index !== id;
      });
    });

  }

  return (
    <View style={styles.parent}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder=" Course Goal"
          style={styles.input}
          onChangeText={onChange}
          defaultValue={text}
        />

        <View style={styles.btn}>
          <Button title="Add Goals" onPress={onAdd} />
        </View>
      </View>
      <View>
        {Goals.map((element, ind) => {
          return (
            <View key={ind} style={styles.block} onPress={deleteThis(ind)}>
              <Text style={{ color: "white" }}>{element}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 50,
  },
  input: {
    height: 40,
    margin: 12,
    width: 230,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  block: {
    backgroundColor: "black",
    borderWidth: 1,
    width: 340,
    height: 30,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontWeight: "bold",
  },
});
