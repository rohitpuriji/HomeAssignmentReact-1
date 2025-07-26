import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/counter_styles';

const SimpleCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement} />
      </View>
    </View>
  );
};

export default SimpleCounter;
