import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Cards from "../components/big/Cards";

export default function CardPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.TextHead}>Native Blog Page</Text>
      <Cards navigation={navigation}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
    width: "100%",
  },
  TextHead: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
