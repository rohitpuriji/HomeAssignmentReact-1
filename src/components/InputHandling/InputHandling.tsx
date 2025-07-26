import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles/InputHandling_styles';
const InputHandling: React.FC = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
    </View>
  );
};

export default InputHandling;
