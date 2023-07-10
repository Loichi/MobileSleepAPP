import React from 'react';
import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';



const HomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.upContent}></View>
        <View style={styles.bottomContent}>
          <Text style={styles.sleepBetter}>SleepBetter</Text>
          <Text style={styles.wakeHappier}>Wake Happier</Text>
          <Text style={styles.littleText}>Have a Relaxed and Focused Day</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable onPress={() => navigation.navigate('HomePage')} style={styles.button}>
          
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  topContainer: {
    height: screenHeight * 0.85,
  },
  upContent: {
    height: screenHeight * 0.63,
  },
  bottomContent: {
    height: screenHeight * 0.24,
    paddingLeft: screenWidth * 0.08,
  },
  bottomContainer: {
    height: screenHeight * 0.18,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.07,
    backgroundColor: '#5099B4',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  sleepBetter: {
    fontSize: 40,
  
  },
  wakeHappier: {
    fontSize: 45,
  
  },
  littleText: {
    color: 'grey',
 
  },
});

export default HomeScreen;
