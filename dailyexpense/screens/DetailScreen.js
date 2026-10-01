import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/styles';

export default function DetailScreen({ transactions }) {
  const expenses = transactions.filter((item) => item.type === 'expense');

  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>รายการรายจ่าย</Text>
        {expenses.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <Text style={styles.expenseText}>฿{item.amount.toLocaleString()}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}