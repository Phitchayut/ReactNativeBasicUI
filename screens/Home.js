import {View, Text, Image, ScrollView,Pressable} from 'react-native';
import React from 'react';

const Home = ({navigation }) => {

    const onPressItem = (id , name) => {
        navigation.navigate('Detail', {id:id , name:name})
    }

  return (
    <ScrollView style={{padding: 10}}>

      <View>
        <Text style={{fontSize: 30}}>Attractions</Text>
      </View>

      <View style={{marginVertical:10}}>
      <Pressable onPress={() => onPressItem(1, 'Phi Phi Islands')}>
        <Image
          style={{width: '100%', height: 333}}
          source={require('../assets/1.jpg')}
        />
        <Text style={{fontSize: 30,fontWeight: 'bold', marginTop: 10}}>Phi Phi Islands</Text>
        <Text>
          Phi Phi Islands are a group of islands in Thailand between the large
          island of Phuket and the Malacca Coastal Strait of Thailand.
        </Text>
        </Pressable>
      </View>
      <View style={{marginVertical:10}}>
      <Pressable onPress={() => onPressItem(2, 'Eiffel Tower')}>
        <Image
          style={{width: '100%', height: 333}}
          source={require('../assets/2.jpg')}
        />
        <Text style={{fontSize: 30,fontWeight: 'bold', marginTop: 10}}>Eiffel Tower</Text>
        <Text>
        Eiffel Tower is one of the most famous structures in the world. Eiffel Tower is named after a leading French architect and engineer. It was built as a symbol of the World Fair in 1889.
        </Text>
        </Pressable>
      </View>
      <View style={{marginVertical:10}}>
      <Pressable onPress={() => onPressItem(3, 'Times Square')}>
        <Image
          style={{width: '100%', height: 333}}
          source={require('../assets/3.jpg')}
        />
        <Text style={{fontSize: 30,fontWeight: 'bold', marginTop: 10}}>Times Square</Text>
        <Text>
        Times Square has become a global landmark and has become a symbol of New York City. This is a result of Times Square being a modern, futuristic venue, with huge advertising screens dotting its surroundings.
        </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
