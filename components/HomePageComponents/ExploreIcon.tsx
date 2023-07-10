import React from 'react';
import { View, Text, Dimensions, StyleSheet , ImageBackground, TouchableOpacity} from 'react-native';


interface ExploreIconProps {
  text: Array<string>,
  category: string;
  imageBackground: string;
  onPress: () => void;
}

function ExploreIcon({ text,category, imageBackground, onPress }: ExploreIconProps) {
  return (
    <TouchableOpacity  onPress={onPress}>

    <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: imageBackground }} style={styles.container} >
      <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{category}</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timerText}>3:10:55</Text>
      </View>
    </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.25,
    borderRadius: 40,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 40,
    display: "flex",
    justifyContent: 'space-between',
    margin:9,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  text: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
  },
  timer:{
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.05,
    backgroundColor : "white",
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerText:{
    fontSize: 16,
    fontWeight: 'bold',

  }
});

export default ExploreIcon;
