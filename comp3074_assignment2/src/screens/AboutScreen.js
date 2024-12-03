import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>Deep Rajubhai Lakhani</Text>
        <Text style={styles.idText}>Student ID: 10140218</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to Main</Text>
        </TouchableOpacity>
      </View>
    </View>
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


  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#31473A', 
    marginBottom: 20,
    textTransform: 'uppercase', 
    letterSpacing: 1.2,
  },

  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 12,
    width: '100%',
    maxWidth: 500,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
    textAlign: 'center',
  },

 
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textTransform: 'capitalize',
  },


  idText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
  },


  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#31473A', 
    color: '#FFFFFF', 
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5, 
  },


  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AboutScreen;
