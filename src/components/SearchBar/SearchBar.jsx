import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar as SBComponent } from 'react-native-paper';
import styled from 'styled-components/native';

const StyledView = styled.View`
  color: green;
  background-color: red;
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <StyledView style={styles.container}>
      <SBComponent
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={onChangeSearch}
        onIconPress={alert}
        value={searchQuery}
      />
    </StyledView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {},
  searchInput: {
    margin: 10,
  },
});
