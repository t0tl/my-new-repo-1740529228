import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { colors, typography, spacing } from './theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Coffee Journal</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.actionsContainer}>
          <Link href="/timer" asChild>
            <Pressable style={styles.actionCard}>
              <MaterialCommunityIcons name="timer" size={32} color={colors.accent} />
              <Text style={styles.actionTitle}>Brew Timer</Text>
              <Text style={styles.actionDescription}>Start your perfect brew</Text>
            </Pressable>
          </Link>

          <Link href="/journal" asChild>
            <Pressable style={styles.actionCard}>
              <MaterialCommunityIcons name="notebook" size={32} color={colors.accent} />
              <Text style={styles.actionTitle}>Journal</Text>
              <Text style={styles.actionDescription}>Record your brews</Text>
            </Pressable>
          </Link>
        </View>

        <Text style={styles.sectionTitle}>Recent Brews</Text>
        <View style={styles.recentBrews}>
          <Text style={styles.emptyText}>No brews recorded yet</Text>
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
    paddingTop: spacing.xl * 2,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.primary,
  },
  title: {
    ...typography.headerLarge,
    color: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: spacing.lg,
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
  actionTitle: {
    ...typography.headerMedium,
    color: colors.text,
    marginTop: spacing.md,
  },
  actionDescription: {
    ...typography.caption,
    color: colors.text,
    opacity: 0.7,
  },
  sectionTitle: {
    ...typography.headerMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  recentBrews: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: spacing.lg,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...typography.body,
    color: colors.text,
    opacity: 0.5,
  },
});