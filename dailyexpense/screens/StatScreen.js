import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/styles';

export default function StatScreen({ totalIncome, totalExpense, balance }) {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>สรุปยอดเงิน</Text>
        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>รวมรายรับ</Text>
          <Text style={styles.incomeText}>+฿{totalIncome.toLocaleString()}</Text>
        </View>
        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>รวมรายจ่าย</Text>
          <Text style={styles.expenseText}>-฿{totalExpense.toLocaleString()}</Text>
        </View>
        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>คงเหลือสุทธิ</Text>
          <Text style={styles.balanceText}>฿{balance.toLocaleString()}</Text>
        </View>
      </View>
    </ScrollView>
  );
}