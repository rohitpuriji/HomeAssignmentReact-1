import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/toggle_styles';

const ToggleVisibility: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? 'Hide Details' : 'Show Details'}
        onPress={toggleVisibility}
      />
      {isVisible && (
        <Text style={styles.description}>
          This is some sample description text that is toggled on.
        </Text>
      )}
    </View>
  );
};

export default ToggleVisibility;
