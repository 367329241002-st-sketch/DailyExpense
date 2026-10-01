import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ transactions, balance, totalIncome, totalExpense }) {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>ภาพรวมการเงิน</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>คงเหลือทั้งหมด</Text>
          <Text style={styles.balanceText}>฿{balance.toLocaleString()}</Text>

          <View style={styles.row}>
            <View>
              <Text style={styles.incomeLabel}>รายรับ</Text>
              <Text style={styles.incomeText}>+฿{totalIncome.toLocaleString()}</Text>
            </View>
            <View>
              <Text style={styles.expenseLabel}>รายจ่าย</Text>
              <Text style={styles.expenseText}>-฿{totalExpense.toLocaleString()}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>รายการล่าสุด</Text>
        {transactions.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <Text style={item.type === 'income' ? styles.incomeText : styles.expenseText}>
              {item.type === 'income' ? '+' : ''}฿{item.amount.toLocaleString()}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}