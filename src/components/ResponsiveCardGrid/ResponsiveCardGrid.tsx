import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './styles/responsiveCardGrid_styles';

const ResponsiveCardGrid: React.FC = () => {
  const cards = [
    { title: 'Card 1', description: 'This is the description for Card 1.' },
    { title: 'Card 2', description: 'This is the description for Card 2.' },
    { title: 'Card 3', description: 'This is the description for Card 3.' },
    { title: 'Card 4', description: 'This is the description for Card 4.' },
    { title: 'Card 5', description: 'This is the description for Card 5.' },
    { title: 'Card 6', description: 'This is the description for Card 6.' },
  ];

  const numColumns = Dimensions.get('window').width > 600 ? 3 : 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ResponsiveCardGrid;
