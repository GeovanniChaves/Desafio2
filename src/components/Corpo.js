import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function Corpo() {

  function alteraState() {
    alert("ola");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>UseState</Text>

      <TouchableHighlight
        style={styles.botao}
        underlayColor="#8B0000"
        onPress={alteraState}
      >
        <Text style={styles.botaoTexto}>CLIQUE AQUI</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 80,
  },
  texto: {
    fontSize: 28,
    color: 'darkred',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: 'darkred',
    padding: 15,
    borderRadius: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});