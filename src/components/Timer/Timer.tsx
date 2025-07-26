import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/timer_styles';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Elapsed Time: {seconds} seconds</Text>
    </View>
  );
};

export default Timer;
