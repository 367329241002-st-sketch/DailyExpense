import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#4F46E5',
  background: '#F8FAFC',
  white: '#FFFFFF',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  income: '#16A34A',
  expense: '#DC2626',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  body: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
  mediaImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },

  // Form & Inputs
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 6,
    marginTop: 10,
  },
  textInput: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 6,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  typeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Cards & Items
  summaryCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  cardLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  balanceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  incomeLabel: {
    fontSize: 12,
    color: COLORS.income,
  },
  incomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.income,
  },
  expenseLabel: {
    fontSize: 12,
    color: COLORS.expense,
  },
  expenseText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.expense,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 10,
  },
  itemCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    color: '#1E293B',
  },
  itemDate: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  activeTabLabel: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default styles;