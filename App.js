import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import PropertyDetails from './Screens/PropertyDetails';
import Landing from './Screens/Landing';

//Async data
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        {/* <Stack.Screen name='Welcome' component={Landing} /> */}
        <Stack.Screen name='Property Details' component={PropertyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

