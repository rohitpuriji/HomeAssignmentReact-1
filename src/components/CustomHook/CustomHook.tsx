import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './styles/customHook_styles';

const CustomHook: React.FC = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      {data && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CustomHook;
