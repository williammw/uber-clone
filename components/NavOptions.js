import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const data =[ 
  {
    id :"123",
    title: "Get a ride",
    image :"",
    screen :"MapScreen",
  },
  {
    id:"456",
    title:"Order food",
    image:"",
    screen :"EatsScreen"
  }
]


const NavOptions = () => {
  return (
    <FlatList data={data}
    // horizontal
    keyExtractor={(item)=> item.id}
    renderItem={({item}) => ( 
      <TouchableOpacity>
        <View>
          <Image
          style={{width:120, height:120, resizeMode:"contain"}}
          source={{uri:item.image}}
          />
        </View>
      </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})
