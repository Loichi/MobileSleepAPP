import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Components
import CategoryIcon from '../components/HomePageComponents/CategoryIcon';
import ExploreIcon from '../components/HomePageComponents/ExploreIcon';
import LecturePlayer from '../components/HomePageComponents/LecturePlayer';
import SearchBar from '../components/HomePageComponents/SearchBar';

// Data
import moodsData from '../MoodsData';

function HomePageScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const handleSearch = (query: any) => {
    console.log('Recherche:', query);
    // Effectuez votre logique de recherche ici
  };

  const [selectedCategory, setSelectedCategory] = useState('Relax');
  const [selectedName, setSelectedName] = useState('Camping');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleNameSelect = (name: string) => {
    setSelectedName(name);
  };

  const filteredMoods = moodsData.filter((mood: any) => mood.category === selectedCategory);
 
  const filteredMusicPlay = moodsData.filter((mood) => {
    return mood.category === selectedCategory && mood.name === selectedName;
  });

  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.textTopContainer}>
          <Text style={styles.textTop}>Good Morning</Text>
          <Text style={styles.textTop}>Imram Molla</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar onSearch={handleSearch} />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.selectCategory}>Select Category</Text>
        <ScrollView horizontal>
          <CategoryIcon
            text="Sleep"
            backColor="rgb(255, 243, 231)"
            onPress={() => handleCategorySelect('Sleep')}
          />
          <CategoryIcon
            text="Focus"
            backColor="rgb(220, 235, 240)"
            onPress={() => handleCategorySelect('Focus')}
          />
          <CategoryIcon
            text="Relax"
            backColor="rgb(239, 244, 255)"
            onPress={() => handleCategorySelect('Relax')}
          />
          <CategoryIcon
            text="Feel Good"
            backColor="rgb(253, 239, 239)"
            onPress={() => handleCategorySelect('Feel Good')}
          />
        </ScrollView>
      </View>

      <View style={styles.exploreContainer}>
        <Text style={styles.selectCategory}>Explore Moods</Text>
        <ScrollView horizontal>
          {filteredMoods.map((mood: any, index: number) => (
            <ExploreIcon
              key={index}
              text={mood.name}
              category={mood.category}
              imageBackground={mood.imageUrl}
              onPress={() => handleNameSelect(mood.name)}
            />
          ))}
        </ScrollView>
      </View>
    <View style={styles.playerContainer}>
  {filteredMusicPlay.map((mood: any, index: number) => (
    <LecturePlayer
      key={index}
      text={mood.name}
      category={mood.category}
      imageUrl={mood.imageUrl}
 
    />
  ))}
</View>

    </View>
  );
}


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  topContainer: {
    height: screenHeight * 0.33,
  
  },
  textTopContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: screenWidth * 0.08,
    height: screenHeight * 0.2,
    
  },
  textTop: {
    fontSize:32
  },
  searchBarContainer:{
    height: screenHeight * 0.13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar:{
    height: screenHeight * 0.08,
    width: screenWidth * 0.85,
    backgroundColor: "rgb(249, 250, 254)",
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'  
  },
    
    categoryContainer: {
      height: screenHeight * 0.25,
      paddingLeft: screenWidth * 0.08,
    },
    selectCategory:{
      
      fontSize:20,
      marginBottom: 10
    },
    
    exploreContainer: {
    paddingLeft: screenWidth * 0.08,
    height: screenHeight * 0.35,

    justifyContent: 'center'
  },
  playerContainer:{
    paddingLeft: screenWidth * 0.08,
  }
});
export default HomePageScreen;
