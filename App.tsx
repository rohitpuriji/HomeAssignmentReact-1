import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/components/Splash/Splash';
import Home from './src/components/Home/Home';
import SimpleCounterApp from './src/components/SimpleCounter/SimpleCounter';
import PersonalizedGreeting from './src/components/Greetings/Greetings';
import ToggleVisibility from './src/components/Toggle/ToggleVisiblity';
import Timer from './src/components/Timer/Timer';
import InputHandling from './src/components/InputHandling/InputHandling';
import TodoList from './src/components/TodoList/TodoList';
import ResponsiveCardGrid from './src/components/ResponsiveCardGrid/ResponsiveCardGrid';
import MemoizedComponent from './src/components/MemoizedComponent/MemoizedComponent';
import CustomHook from './src/components/CustomHook/CustomHook';
import DarkMode from './src/components/DarkMode/DarkMode';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} // Hide header for Splash screen
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }} // Customize header for Home screen
        />
        <Stack.Screen name="SimpleCounterApp" component={SimpleCounterApp} />
        <Stack.Screen
          name="PersonalizedGreeting"
          component={PersonalizedGreeting}
        />
        <Stack.Screen name="ToggleVisibility" component={ToggleVisibility} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="InputHandling" component={InputHandling} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen
          name="ResponsiveCardGrid"
          component={ResponsiveCardGrid}
        />
        <Stack.Screen name="MemoizedComponent" component={MemoizedComponent} />
        <Stack.Screen name="CustomHook" component={CustomHook} />
        <Stack.Screen name="DarkMode" component={DarkMode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
