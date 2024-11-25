import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/onboards/Home';

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,

        }}
      >
        <Stack.Screen 
        name='Home'
        component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
