import React from 'react'
import {StyleSheet, Text, SafeAreaView , Image, View} from 'react-native';
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`} >
      <View style={tw`p-5`}>
        <Image 
        style={{
          width:100, 
          height:100, 
          backgroundColor:"white",
          resizeMode:"contain",
        }}
          source={{            
            uri: "http://pngimg.com/uploads/uber/uber_PNG16.png",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
{/* <Text style={[tw`text-red-500 p-10`, styles.text, {color:"purple",}, ]}>Home</Text> */}

// const styles = StyleSheet.create({
//   text:{
//     color:"blue",
//   }
// })