import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from './styles/dark_styles';
const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#333' : '#f9f9f9' },
      ]}
    >
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        {isDarkMode ? 'Dark Mode is ON' : 'Dark Mode is OFF'}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        thumbColor={isDarkMode ? '#fff' : '#000'}
      />
    </View>
  );
};

export default DarkMode;
