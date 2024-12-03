import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import axios from 'axios';

const MainScreen = () => {
  const [baseCurrency, setBaseCurrency] = useState('CAD');
  const [destCurrency, setDestCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    if (!baseCurrency || !destCurrency || !amount) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jEkZvpsLiOZw40cLbxpZmDgSHUlScgC29n6mi5q2&base_currency=${baseCurrency.toUpperCase()}`;

    axios
      .get(url)
      .then(response => {
        const exchangeRate = response.data.data[destCurrency.toUpperCase()];
        if (exchangeRate) {
          setConvertedAmount((amount * exchangeRate).toFixed(2));
        } else {
          Alert.alert('Error', 'Destination currency not found.');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to fetch data. Please check the currencies and try again.');
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.heading}>Currency Converter</Text>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.input}
              placeholder="Base Currency (e.g., CAD)"
              value={baseCurrency}
              onChangeText={(text) => setBaseCurrency(text.toUpperCase())}
              placeholderTextColor="#31473A"
            />
            <TextInput
              style={styles.input}
              placeholder="Destination Currency (e.g., USD)"
              value={destCurrency}
              onChangeText={(text) => setDestCurrency(text.toUpperCase())}
              placeholderTextColor="#B0B0B0"
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={String(amount)}
              keyboardType="numeric"
              onChangeText={text => setAmount(Number(text))}
              onSubmitEditing={Keyboard.dismiss}
              placeholderTextColor="#B0B0B0"
            />
            <TouchableOpacity style={styles.button} onPress={handleConvert}>
              <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
          </View>

          {convertedAmount !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.results}>
                {amount} {baseCurrency.toUpperCase()} = <Text style={styles.resultAmount}>{convertedAmount}</Text> {destCurrency.toUpperCase()}
              </Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF4F2',
    padding: 20,
  },

  contentContainer: {
    backgroundColor: '#FFFFFF', 
    padding: 30,
    borderRadius: 10,
    maxWidth: 500,
    width: '100%',
    textAlign: 'center',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#31473A',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    fontSize: 16,
    color: '#31473A',
    backgroundColor: '#EDF4F2', 
  },

  
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#31473A', 
    color: '#FFFFFF', 
    borderRadius: 8,
    alignItems: 'center',
  },


  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },


  results: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#31473A', 
    color: '#EDF4F2',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  resultAmount: {
    fontSize: 22,
    fontWeight: 'bold',
  },


});

export default MainScreen;
