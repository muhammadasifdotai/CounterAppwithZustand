import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useStore from './store';

const Counter: React.FC = () => {
  const { count, increase, decrease, reset } = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={increase} style={styles.button}>
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrease} style={styles.button}>
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.resetButton}>
         <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    countText: {
      fontSize: 48,
      marginBottom: 20,
    },
    buttons: {
      flexDirection: 'row',
    },
    button: {
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: '#6200ea',
      borderRadius: 5,
    },
    resetButton: {
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: '#f44336', // Different color for reset button
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
  });  

export default Counter;
