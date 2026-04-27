import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <Text>Geovanni Chaves</Text>
      <Text>&lt;24/05/2026&gt;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});