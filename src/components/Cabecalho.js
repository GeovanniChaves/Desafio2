import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>DSV - MOBILE</Text>

      <Image
        source={require('../../assets/img/paisagem.jpg')} // coloque sua imagem aqui
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 150,
    height: 80,
    marginTop: 10,
    resizeMode: 'contain',
  },
});