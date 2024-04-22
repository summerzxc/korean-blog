import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CategoryDetail({ route }) {
  const { id } = route.params;

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
