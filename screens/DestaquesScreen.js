import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DestaquesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Planeta dos Macacos: O Reinado.</Text>
        <Text style={styles.movieDescription}>Muitos anos depois do reinado de Caesar, os macacos agora são a espécie dominante e vivem em harmonia enquanto os humanos precisam se esconder nas sombras. À medida que o novo líder constrói seu império, um jovem macaco embarca em uma jornada que o leva a questionar tudo o que lhe foi ensinado sobre seu passado, tomando decisões capazes de definir o futuro de ambos os mundos.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Furiosa: Uma Saga Mad Max.</Text>
        <Text style={styles.movieDescription}>Furiosa: Uma Saga Mad Max é um prelúdio de Mad Max: Estrada da Fúria (2015), mostrando a história de origem de Furiosa. Na trama ela é sequestrada de seu lar, o Lugar Verde de Muitas Mães, por uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Cruzando Wasteland, eles alcançam a Cidadela, dominada pelo Immortan Joe.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Garfield: Fora de Casa.</Text>
        <Text style={styles.movieDescription}>Após reencontrar seu pai, Garfield acaba se envolvendo em um arriscado e hilariante assalto.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff7373',
  },
  movie: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFE4C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ff7373',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default DestaquesScreen;
