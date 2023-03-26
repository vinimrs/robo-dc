import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Features from '../screens/Features';
import Events from '../screens/Events';
import { EventI, PointI, Routes } from '@types';
import Event from '../screens/Event';
import Explore from '../screens/Explore';
import Point from '../screens/Point';
import Movement from '../screens/Movement';
import { points } from '@constants';
import Moving from '../screens/Movement/Moving';
import Arrived from '../screens/Movement/Arrived';

export type StackParamsList = {
  Home: undefined;
  Features: { userRole: string } | undefined;
  Events: undefined;
  Event: { event: EventI } | undefined;
  Explore: undefined;
  Point: { point: PointI } | undefined;
  Movement: { point: PointI } | undefined;
  Moving: { point: PointI } | undefined;
  Arrived: { point: PointI } | undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

const AppRotes: React.FC<{
  initialScreen?: Routes;
}> = ({ initialScreen = 'Home' }) => {
  return (
    <Stack.Navigator
      initialRouteName={initialScreen}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Features" component={Features} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen
        name="Point"
        component={Point}
        initialParams={{ point: points[0] }}
      />
      <Stack.Screen
        name="Movement"
        component={Movement}
        initialParams={{ point: points[0] }}
      />
      <Stack.Screen
        name="Moving"
        component={Moving}
        initialParams={{ point: points[0] }}
      />
      <Stack.Screen
        name="Arrived"
        component={Arrived}
        initialParams={{ point: points[0] }}
      />
    </Stack.Navigator>
  );
};

export default AppRotes;
