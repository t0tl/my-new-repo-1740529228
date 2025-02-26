import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Coffee Journey</Text>
        <Text style={styles.subtitle}>Track, Time, and Perfect Your Brew</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
          <LinearGradient
            colors={['#4A3428', '#6B4C3A']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="timer-outline" size={32} color="#FAF3E0" />
            <Text style={styles.cardTitle}>Brew Timer</Text>
            <Text style={styles.cardSubtitle}>Perfect Your Process</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
          <LinearGradient
            colors={['#D4582B', '#E37547']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="book-outline" size={32} color="#FAF3E0" />
            <Text style={styles.cardTitle}>Journal</Text>
            <Text style={styles.cardSubtitle}>Record Your Brews</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 32,
    color: '#4A3428',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 18,
    color: '#6B4C3A',
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    padding: 24,
    borderRadius: 16,
    height: 160,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: '#FAF3E0',
    marginTop: 12,
  },
  cardSubtitle: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 16,
    color: '#FAF3E0',
    opacity: 0.9,
  },
});