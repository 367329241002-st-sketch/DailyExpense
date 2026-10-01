import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles, { COLORS } from './styles/styles';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import DetailScreen from './screens/DetailScreen';
import StatScreen from './screens/StatScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const [transactions, setTransactions] = useState([
    { id: '1', title: 'เงินเดือน', amount: 30000, type: 'income', date: '01 ต.ค.' },
    { id: '2', title: 'ค่าอาหาร', amount: -150, type: 'expense', date: '01 ต.ค.' },
    { id: '3', title: 'ค่าเดินทาง', amount: -80, type: 'expense', date: '01 ต.ค.' },
  ]);

  // ฟังก์ชันเพิ่มข้อมูลรายการใหม่
  const handleAddTransaction = (newTx) => {
    const newItem = {
      ...newTx,
      id: Date.now().toString(),
    };
    setTransactions([newItem, ...transactions]);
    setActiveTab('Home'); // เมื่อบันทึกแล้วให้เด้งกลับมาหน้า Home
  };

  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + Math.abs(item.amount), 0);

  const balance = totalIncome - totalExpense;

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <HomeScreen
            transactions={transactions}
            balance={balance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
        );
      case 'Add':
        return <AddScreen onAddTransaction={handleAddTransaction} />;
      case 'Detail':
        return <DetailScreen transactions={transactions} />;
      case 'Stat':
        return (
          <StatScreen
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            balance={balance}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{activeTab}</Text>
      </View>

      {renderScreen()}

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Home')}>
          <Ionicons
            name={activeTab === 'Home' ? 'home' : 'home-outline'}
            size={24}
            color={activeTab === 'Home' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Home' && styles.activeTabLabel]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Add')}>
          <Ionicons
            name={activeTab === 'Add' ? 'add-circle' : 'add-circle-outline'}
            size={24}
            color={activeTab === 'Add' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Add' && styles.activeTabLabel]}>เพิ่มข้อมูล</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Detail')}>
          <Ionicons
            name={activeTab === 'Detail' ? 'list' : 'list-outline'}
            size={24}
            color={activeTab === 'Detail' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Detail' && styles.activeTabLabel]}>รายการ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Stat')}>
          <Ionicons
            name={activeTab === 'Stat' ? 'pie-chart' : 'pie-chart-outline'}
            size={24}
            color={activeTab === 'Stat' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Stat' && styles.activeTabLabel]}>สรุป</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}