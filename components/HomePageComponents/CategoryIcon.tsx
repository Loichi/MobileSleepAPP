import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

interface CategoryIconProps {
  text: string;
  backColor: string;
  onPress: () => void;
}

function CategoryIcon({ text, backColor, onPress }: CategoryIconProps) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: backColor }]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CategoryIcon;
