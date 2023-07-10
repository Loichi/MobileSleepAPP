import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Animated, Easing } from 'react-native';

interface LecturePlayerProps {
  text: string;
  category: string;
  imageUrl: string;

}

function LecturePlayer({ text,category, imageUrl }: LecturePlayerProps) {

  
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Image source={{ uri: imageUrl }} style={styles.icon} />
          <Text style={styles.text}>  {text} {category}</Text>
        </View>
        <TouchableOpacity style={styles.playIcon} onPress={handleTogglePlay}>
          <Ionicons name={isPlaying ? 'pause' : 'play'} size={25} color="rgb(80, 153, 181)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: 'rgb(80, 153, 181)',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.08,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: Dimensions.get('window').width * 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  icon: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').height * 0.08,
    borderRadius: 10,
  },
  playIcon: {
    width: Dimensions.get('window').width * 0.13,
    height: Dimensions.get('window').width * 0.13,
    backgroundColor: 'rgb(247, 247, 248)',
    borderRadius: Dimensions.get('window').width * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LecturePlayer;
