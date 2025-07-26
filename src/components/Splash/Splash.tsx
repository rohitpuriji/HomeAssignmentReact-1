import React, { useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import splash_styles from './styles/splash_styles';

type SplashProps = {
  navigation: StackNavigationProp<any, any>;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../icons/bg.png')}
      style={splash_styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={splash_styles.textContainer}>
        <Text style={splash_styles.welcomeText}>Home Assignment</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
