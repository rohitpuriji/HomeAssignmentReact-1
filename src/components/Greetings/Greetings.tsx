import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/greetings_styles';

type GreetingCardProps = {
  name: string;
  message: string;
};

const GreetingCard: React.FC<GreetingCardProps> = ({ name, message }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const Greetings: React.FC = () => {
  return (
    <View style={styles.container}>
      <GreetingCard name="John Doe" message="Happy Birthday!" />
      <GreetingCard
        name="Jane Smith"
        message="Congratulations on your promotion!"
      />
      <GreetingCard
        name="Alice Johnson"
        message="Wishing you a speedy recovery!"
      />
    </View>
  );
};

export default Greetings;
