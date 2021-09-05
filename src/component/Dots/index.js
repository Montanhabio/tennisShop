import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';



export default function Dots(props) {
 return (
     <View style={[styles.container, {backgroundColor:props.color}]}>
         
     </View>
   
  );
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').width * 0.05,
        borderRadius: Dimensions.get('window').width * 0.05/2,
        
    }
})