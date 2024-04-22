import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Categories from "../components/big/Categories";

export default function Home({navigation}) {
  return (
    <View>     
      <Text style={styles.TextHead}>Home Page</Text>
      <Categories navigation={navigation}/>
      <Button title="See Blogs" onPress={() => navigation.navigate("CardPage")}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  TextHead: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
})