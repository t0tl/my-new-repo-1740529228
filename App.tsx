import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts, PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';
import JournalScreen from './screens/JournalScreen';
import AddEntryScreen from './screens/AddEntryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FAF3E0',
          },
          headerTintColor: '#4A3428',
          headerTitleStyle: {
            fontFamily: 'PlayfairDisplay_700Bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Coffee Journal' }} />
        <Stack.Screen name="Timer" component={TimerScreen} options={{ title: 'Brew Timer' }} />
        <Stack.Screen name="Journal" component={JournalScreen} options={{ title: 'My Brews' }} />
        <Stack.Screen name="AddEntry" component={AddEntryScreen} options={{ title: 'New Entry' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}