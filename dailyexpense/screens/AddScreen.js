import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import styles, { COLORS } from '../styles/styles';

export default function AddScreen({ onAddTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'income' หรือ 'expense'

  const handleAdd = () => {
    if (!title.trim() || !amount.trim()) {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกจำนวนเงินให้ถูกต้อง');
      return;
    }

    // ส่งข้อมูลกลับไปที่ App.js
    onAddTransaction({
      title: title.trim(),
      amount: type === 'expense' ? -numAmount : numAmount,
      type: type,
      date: 'วันนี้',
    });

    // ล้างค่าในช่องกรอก
    setTitle('');
    setAmount('');
    Alert.alert('สำเร็จ', 'บันทึกข้อมูลเรียบร้อยแล้ว');
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>เพิ่มข้อมูลรายการ</Text>

        {/* รูปภาพประกอบหน้าเพิ่มข้อมูล */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image
            source={require('../assets/photo.jpg')}
            style={styles.mediaImage}
            resizeMode="cover"
          />
        </View>

        {/* ช่องกรอกชื่อรายการ */}
        <Text style={styles.inputLabel}>ชื่อรายการ</Text>
        <TextInput
          style={styles.textInput}
          placeholder="เช่น ค่าอาหาร, เงินเดือน"
          value={title}
          onChangeText={setTitle}
        />

        {/* ช่องกรอกจำนวนเงิน */}
        <Text style={styles.inputLabel}>จำนวนเงิน (บาท)</Text>
        <TextInput
          style={styles.textInput}
          placeholder="0.00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* ปุ่มเลือกประเภท (รายรับ / รายจ่าย) */}
        <Text style={styles.inputLabel}>ประเภทรายการ</Text>
        <View style={styles.typeContainer}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'income' && { backgroundColor: COLORS.income },
            ]}
            onPress={() => setType('income')}
          >
            <Text
              style={[
                styles.typeButtonText,
                type === 'income' && { color: COLORS.white },
              ]}
            >
              รายรับ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'expense' && { backgroundColor: COLORS.expense },
            ]}
            onPress={() => setType('expense')}
          >
            <Text
              style={[
                styles.typeButtonText,
                type === 'expense' && { color: COLORS.white },
              ]}
            >
              รายจ่าย
            </Text>
          </TouchableOpacity>
        </View>

        {/* ปุ่มบันทึกข้อมูล */}
        <TouchableOpacity style={styles.submitButton} onPress={handleAdd}>
          <Text style={styles.submitButtonText}>บันทึกรายการ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}