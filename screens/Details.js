import { View, Text,Image } from 'react-native'
import React from 'react'

const img = {
    1: require('../assets/1.jpg'),
    2: require('../assets/2.jpg'),
    3: require('../assets/3.jpg'),
}

const Details = ({ navigation, route }) => {
  return (
    <View>
        <Image
          style={{width: '100%', height: 333}}
          source={img[route.params.id]}
        />
        <Text style={{fontSize: 30,fontWeight: 'bold', marginTop: 10,padding:10}}>{route.params.name}</Text>
    </View>
  )
}

export default Details