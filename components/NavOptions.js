import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

const data =[ 
  {
    id :"123",
    title: "Get a ride",
    image :require(`../assets/UberX.webp`),
    screen :"MapScreen",
  },
  {
    id:"456",
    title:"Order food",
    image:require(`../assets/uber_eat_food.png`),
    screen :"EatsScreen"
  }
]


const NavOptions = () => {
  return (
    <FlatList data={data}
    horizontal
    keyExtractor={(item)=> item.id}
    renderItem={({item}) => ( 
      <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
        <View>
          <Image
            style={{width:120, height:120, resizeMode:"contain"}}
            // source={{uri:item.image}}
          //source={require('../assets/uber_PNG16.png')}
          source={item.image} 
          />
          <Text
          style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
          type='antdesign' color='white' name='arrowright'/>
        </View>
      </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})
