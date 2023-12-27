import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import SelectCity from "./src/Screens/SelectCity";
import Home from "./src/Screens/Home";
import Details from "./src/Components/Details";
import { Wrapper } from "./src/Context/Wrapper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Wrapper>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SelectCity" component={SelectCity} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </Wrapper>
  );
}
