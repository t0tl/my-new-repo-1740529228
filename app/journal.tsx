import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, typography, spacing } from './theme';

export default function Journal() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={colors.background} />
        </Pressable>
        <Text style={styles.title}>Coffee Journal</Text>
      </View>

      <ScrollView style={styles.content}>
        <Pressable style={styles.addButton} onPress={() => router.push('/journal/new')}>
          <MaterialCommunityIcons name="plus" size={24} color={colors.background} />
          <Text style={styles.addButtonText}>New Entry</Text>
        </Pressable>

        <View style={styles.entriesContainer}>
          <Text style={styles.emptyText}>No journal entries yet</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.xl * 2,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.primary,
  },
  backButton: {
    marginRight: spacing.md,
  },
  title: {
    ...typography.headerLarge,
    color: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.lg,
    ...Platform.select({
      ios: {
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  addButtonText: {
    ...typography.body,
    color: colors.background,
    marginLeft: spacing.sm,
  },
  entriesContainer: {
    flex: 1,
    minHeight: 300,
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...typography.body,
    color: colors.text,
    opacity: 0.5,
  },
});