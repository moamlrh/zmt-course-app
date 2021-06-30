import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RestCard from './components/Card/RestCard';
import SearchBar from './components/SearchBar/SearchBar';

export default function Index() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
