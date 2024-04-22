import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import data from "../../card.json";
import Card from "../small/Card";

export default function Cards({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        {data.map((item) => (
          <Card
            navigation={navigation}
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  TextHead: {
    fontSize: 30,
    fontWeight: "bold",
  },
  ScrollView: {
    width: "100%",
    display: "flex",
  },
});
