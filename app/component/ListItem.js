import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ placeName }) => {
  const { listItem } = styles;
  return (
    <TouchableOpacity>
      <View style={listItem}>
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
});
