import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import home_styles from './styles/home_styles';

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const items = [
    'Simple Counter App',
    'Personalized Greeting',
    'Toggle Visibility',
    'Timer',
    'Input Handling',
    'Todo List',
    'Responsive Card Grid',
    'Memoized Component',
    'Custom Hook',
    'Dark Mode',
  ];

  const handleItemPress = (item: string) => {
    navigation.navigate(item.replace(/\s+/g, ''), {});
  };

  return (
    <View style={home_styles.container}>
      <Text style={home_styles.title}>
        Please select any one Assignment to proceed!
      </Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={home_styles.listItemContainer}>
              <Text style={home_styles.listItem}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
