import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import Category from "../small/Category";
import data from "../../category.json";

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <Category
            key={item.id}
            title={item.title}
            image={item.image}
            id={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
