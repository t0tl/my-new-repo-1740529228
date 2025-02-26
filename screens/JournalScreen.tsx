import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyEntries = [
  {
    id: '1',
    date: '2024-03-20',
    method: 'Pour Over',
    rating: 4,
    notes: 'Bright and fruity notes, perfect morning brew',
  },
  {
    id: '2',
    date: '2024-03-19',
    method: 'French Press',
    rating: 5,
    notes: 'Rich and full-bodied, excellent crema',
  },
];

export default function JournalScreen({ navigation }) {
  const renderEntry = ({ item }) => (
    <View style={styles.entryCard}>
      <View style={styles.entryHeader}>
        <Text style={styles.method}>{item.method}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.notes}>{item.notes}</Text>
      <View style={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <Ionicons
            key={index}
            name={index < item.rating ? 'star' : 'star-outline'}
            size={20}
            color="#D4582B"
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyEntries}
        renderItem={renderEntry}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEntry')}
      >
        <Ionicons name="add" size={32} color="#FAF3E0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
  },
  list: {
    padding: 20,
    gap: 16,
  },
  entryCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  method: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: '#4A3428',
  },
  date: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 16,
    color: '#6B4C3A',
  },
  notes: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 16,
    color: '#2C2C2C',
    marginBottom: 12,
  },
  rating: {
    flexDirection: 'row',
    gap: 4,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#D4582B',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});