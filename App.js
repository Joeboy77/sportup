import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from './screens/onboards/Home';
import Onboard from './screens/onboards/Onboard';
import SignIn from './screens/auth/SignIn';

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            // Enable transitions between screens
            gestureEnabled: true,
            cardStyleInterpolator: ({ current, layouts }) => {
              const translateX = current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              });

              return {
                cardStyle: {
                  transform: [
                    {
                      translateX,
                    },
                  ],
                },
              };
            },
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name='SignIn' component={SignIn} />
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
