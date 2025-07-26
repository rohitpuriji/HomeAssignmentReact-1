import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles/memoized_styles';
type ChildProps = {
  text: string;
};

const ChildComponent: React.FC<ChildProps> = React.memo(({ text }) => {
  console.log('Child now rendered');
  return (
    <View style={styles.childContainer}>
      <Text style={styles.childText}>Child Component Text: {text}</Text>
    </View>
  );
});

const MemoizedComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Component</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button
        style={styles.button}
        title="Increment Counter"
        onPress={incrementCounter}
      />
      <TextInput
        style={styles.input}
        placeholder="Type something"
        value={text}
        onChangeText={newText => setText(newText)}
      />
      <ChildComponent text={text} />
    </View>
  );
};

export default MemoizedComponent;
