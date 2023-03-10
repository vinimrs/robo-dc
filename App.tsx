import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppRotes from './src/rotes/AppRotes';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor="#00000000"
      />
      <NavigationContainer>
        <AppRotes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
