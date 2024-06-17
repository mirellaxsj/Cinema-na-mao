import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndicacaoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indicações</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Divertida Mente</Text>
        <Text style={styles.movieDescription}>Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Enrolados</Text>
        <Text style={styles.movieDescription}>O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Barbie</Text>
        <Text style={styles.movieDescription}>Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Moana</Text>
        <Text style={styles.movieDescription}>Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Frozen</Text>
        <Text style={styles.movieDescription}>Acompanhada por um vendedor de gelo, a jovem e destemida princesa Anna parte em uma jornada por perigosas montanhas de gelo na esperança de encontrar sua irmã, a rainha Elsa, e acabar com a terrível maldição de inverno eterno, que está provocando o congelamento do reino.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Harry Potter</Text>
        <Text style={styles.movieDescription}>Um jovem bruxo enfrenta as forças das trevas em uma escola de magia.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#8B4513',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default IndicacaoScreen;
