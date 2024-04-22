import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Components
import CardPage from "./Screen/CardPage.jsx";
import Home from "./Screen/Home.jsx";
import SingleCard from "./Screen/SingleCard.jsx";
import CategoryDetail from "./components/small/CategoryDetail.jsx";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="CardPage" component={CardPage} />
        <Drawer.Screen name="SingleCard" component={SingleCard} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
