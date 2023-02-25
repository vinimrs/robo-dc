import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Features from '../screens/Features';
import Events from '../screens/Events';
import { EventI } from '@types';
import Event from '../screens/Event';

export type StackParamsList = {
  Home: undefined;
  Features: { userRole: string } | undefined;
  Events: undefined;
  Event: { event: EventI } | undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

const AppRotes: React.FC<{
  initialScreen?: 'Home' | 'Features' | 'Events' | 'Event';
}> = ({ initialScreen = 'Home' }) => {
  return (
    <Stack.Navigator
      initialRouteName={initialScreen}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Features" component={Features} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
};

export default AppRotes;
