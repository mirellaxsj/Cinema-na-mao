import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatoScreen() {
  // Informações de contato e descrição
  const informacoes = {
    contato: {
      email: "mirellafranca@meucine.com.br",
      telefone: "(19)707070-707070",
      endereco: "Avenida Antonio Pinto Catão, 542, Jaguariúna, São Paulo"
    },
    descricao: "Bem-vindo ao CineNaMão, a sua passagem para um mundo de entretenimento cinematográfico sem limites. Fundada com a paixão por filmes e o compromisso com a excelência, a CineNaMão oferece uma experiência única de streaming que une os amantes do cinema de todas as partes do mundo."
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato / Quem Somos</Text>
      <Text style={styles.subtitle}>Entre em contato:</Text>
      <Text style={styles.info}>Email: {informacoes.contato.email}</Text>
      <Text style={styles.info}>Telefone: {informacoes.contato.telefone}</Text>
      <Text style={styles.info}>Endereço: {informacoes.contato.endereco}</Text>
      <Text style={styles.description}>{informacoes.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#ff7373',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});
