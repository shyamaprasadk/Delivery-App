import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}
    initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
